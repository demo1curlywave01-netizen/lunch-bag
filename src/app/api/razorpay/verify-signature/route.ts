import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keySecret) {
      return NextResponse.json(
        { error: "Payment verification unavailable: RAZORPAY_KEY_SECRET missing in server environment." },
        { status: 503 }
      );
    }

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Missing required payment signature fields." },
        { status: 400 }
      );
    }

    const payload = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(payload)
      .digest("hex");

    // Secure timingSafeEqual comparison to prevent timing attacks
    const expectedBuffer = Buffer.from(expectedSignature, "utf-8");
    const providedBuffer = Buffer.from(razorpay_signature, "utf-8");

    if (expectedBuffer.length !== providedBuffer.length) {
      return NextResponse.json(
        { success: false, error: "Invalid payment signature." },
        { status: 400 }
      );
    }

    const isMatch = crypto.timingSafeEqual(expectedBuffer, providedBuffer);

    if (!isMatch) {
      return NextResponse.json(
        { success: false, error: "Signature mismatch verification failed." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Payment signature verified successfully.",
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Razorpay Verification Error]", error);
    return NextResponse.json(
      { error: "Internal server error verifying signature." },
      { status: 500 }
    );
  }
}
