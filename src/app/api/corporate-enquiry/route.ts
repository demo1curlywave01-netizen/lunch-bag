import { NextResponse } from "next/server";

// In-memory rate limiting map for basic spam protection
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown-ip";
    const now = Date.now();

    // Check rate limit: max 5 requests per 10 minutes per IP
    const clientLimit = rateLimitMap.get(ip) || { count: 0, lastReset: now };
    if (now - clientLimit.lastReset > 10 * 60 * 1000) {
      clientLimit.count = 0;
      clientLimit.lastReset = now;
    }
    clientLimit.count += 1;
    rateLimitMap.set(ip, clientLimit);

    if (clientLimit.count > 5) {
      return NextResponse.json(
        { error: "Too many requests. Please try again after a few minutes." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const {
      companyName,
      contactPerson,
      designation,
      workEmail,
      phone,
      teamSize,
      officeArea,
      message,
      botTrapField,
    } = body;

    // 1. Spam Honeypot Protection: if bot filled this hidden field, quietly reject
    if (botTrapField && botTrapField.trim().length > 0) {
      return NextResponse.json(
        { message: "Enquiry submitted successfully." },
        { status: 200 }
      );
    }

    // 2. Server-side validation
    if (!companyName || typeof companyName !== "string" || companyName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid company name." },
        { status: 400 }
      );
    }

    if (!contactPerson || typeof contactPerson !== "string" || contactPerson.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter the contact person's name." },
        { status: 400 }
      );
    }

    if (!designation || typeof designation !== "string" || designation.trim().length < 2) {
      return NextResponse.json(
        { error: "Please specify your designation or role." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!workEmail || !emailRegex.test(workEmail.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid work email address." },
        { status: 400 }
      );
    }

    // 10-digit Indian mobile starting with 6, 7, 8, or 9
    const indianPhoneRegex = /^[6-9]\d{9}$/;
    const sanitizedPhone = phone?.toString().replace(/\D/g, "") || "";
    if (!indianPhoneRegex.test(sanitizedPhone)) {
      return NextResponse.json(
        { error: "Please provide a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    // Safe logging hook (never exposing private user data to public logs)
    const sanitizedRecord = {
      timestamp: new Date().toISOString(),
      company: companyName.trim().substring(0, 100),
      contactPerson: contactPerson.trim().substring(0, 70),
      designation: designation.trim().substring(0, 70),
      workEmail: workEmail.trim().substring(0, 100),
      phone: sanitizedPhone,
      teamSize: teamSize || "Unspecified",
      officeArea: officeArea || "Unspecified",
      messageSnippet: (message || "").trim().substring(0, 300),
    };

    console.log("[Corporate Enquiry Received]", {
      company: sanitizedRecord.company,
      contact: sanitizedRecord.contactPerson,
      teamSize: sanitizedRecord.teamSize,
      area: sanitizedRecord.officeArea,
      receivedAt: sanitizedRecord.timestamp,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your corporate tasting request has been logged. Our partnership team will contact you within 4 business hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Corporate Enquiry API Error]", error);
    return NextResponse.json(
      { error: "Internal server error processing enquiry." },
      { status: 500 }
    );
  }
}
