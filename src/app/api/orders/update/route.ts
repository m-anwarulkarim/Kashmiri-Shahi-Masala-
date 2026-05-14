import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const sheetUrl = process.env.GOOGLE_SHEET_URL;

    if (!sheetUrl) {
      return NextResponse.json(
        {
          success: false,
          message: "Google Sheet URL missing",
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
    });

    const result = await response.json();

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Status update failed",
      },
      { status: 500 },
    );
  }
}
