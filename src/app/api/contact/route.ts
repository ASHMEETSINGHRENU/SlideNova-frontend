import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, service, budget, message, company } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // In production, send email or insert to database (MongoDB / Supabase / etc.)
    console.log("Nova Project Inquiry Received:", {
      name,
      email,
      company: company || "N/A",
      service: service || "General Inquiry",
      budget: budget || "Not specified",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out to Nova! We will review your project and get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
