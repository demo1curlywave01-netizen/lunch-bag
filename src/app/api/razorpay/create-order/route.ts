import { NextResponse } from "next/server";

// Server-side strict price catalog (never trust client amounts)
const SERVER_CATALOG: Record<string, number> = {
  // Thalis (single daily meal)
  mon: 149,
  tue: 149,
  wed: 159,
  thu: 149,
  fri: 159,
  default_thali: 149,
  // Passes
  "pass-5-day": 725,
  "pass-20-day": 2599,
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { planId, items, customer } = body;

    let totalAmountInRupees = 0;

    if (planId) {
      // Pass purchase
      const catalogPrice = SERVER_CATALOG[planId];
      if (!catalogPrice) {
        return NextResponse.json(
          { error: "Invalid plan identifier selected." },
          { status: 400 }
        );
      }
      totalAmountInRupees = catalogPrice;
    } else if (Array.isArray(items) && items.length > 0) {
      // Cart items calculation from server-side catalog
      for (const item of items) {
        const itemPrice = SERVER_CATALOG[item.id] || SERVER_CATALOG.default_thali;
        const qty = Math.max(1, parseInt(item.quantity || 1, 10));
        totalAmountInRupees += itemPrice * qty;
      }
    } else {
      return NextResponse.json(
        { error: "No items or pass selected." },
        { status: 400 }
      );
    }

    const amountInPaise = Math.round(totalAmountInRupees * 100);

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // Check if client provided real test keys
    if (!keyId || !keySecret || keyId === "rzp_test_placeholder") {
      // Clearly state that keys are not configured yet
      return NextResponse.json(
        {
          mode: "mock_test_mode",
          status: "keys_not_configured",
          message:
            "Razorpay Test Mode: Keys are not yet configured in .env. Order has been verified against server price catalog (₹" +
            totalAmountInRupees +
            "). Add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to .env.local to enable real checkout.",
          amount: totalAmountInRupees,
          amountInPaise,
          customerSnippet: customer?.name || "Guest Customer",
        },
        { status: 200 }
      );
    }

    // If keys are provided, create official Razorpay order
    const authHeader = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
    const razorpayResponse = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${authHeader}`,
      },
      body: JSON.stringify({
        amount: amountInPaise,
        currency: "INR",
        receipt: `rcpt_${Date.now()}`,
        notes: {
          customerName: customer?.name || "Customer",
          customerPhone: customer?.phone || "",
          officeHub: customer?.officeHub || "",
        },
      }),
    });

    if (!razorpayResponse.ok) {
      const errText = await razorpayResponse.text();
      return NextResponse.json(
        { error: "Failed to create Razorpay order.", details: errText },
        { status: 502 }
      );
    }

    const razorpayOrder = await razorpayResponse.json();

    return NextResponse.json(
      {
        orderId: razorpayOrder.id,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        keyId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Razorpay Create Order Error]", error);
    return NextResponse.json(
      { error: "Internal server error initializing order." },
      { status: 500 }
    );
  }
}
