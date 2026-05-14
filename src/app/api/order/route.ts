import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const sheetUrl = process.env.GOOGLE_SHEET_URL?.trim();

    if (!sheetUrl) {
      return NextResponse.json(
        {
          success: false,
          message: "GOOGLE_SHEET_URL .env.local এ সেট করা নেই",
        },
        { status: 500 },
      );
    }

    const body = await req.json();

    const response = await fetch(sheetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(body),
      redirect: "follow",
    });

    const text = await response.text();

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Google Apps Script থেকে valid JSON আসেনি",
          details: text,
        },
        { status: 500 },
      );
    }

    if (!response.ok || !result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.error || "Google Sheet এ order save হয়নি",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("ORDER_API_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error হয়েছে। Terminal log check করুন",
      },
      { status: 500 },
    );
  }
}
