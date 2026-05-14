import { NextResponse } from "next/server";

export async function GET() {
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

    const response = await fetch(sheetUrl, {
      method: "GET",
      cache: "no-store",
    });

    const result = await response.json();

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Orders load failed",
      },
      { status: 500 },
    );
  }
}
