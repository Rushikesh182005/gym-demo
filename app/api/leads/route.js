import { NextResponse } from "next/server";
import { createLead } from "../../../lib/actions/leads";

export async function POST(request) {
  try {
    const body = await request.json();
    const lead = await createLead(body);

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("Lead submission failed", error);
    const status = error.name === "ZodError" ? 400 : 500;
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to submit lead."
      },
      { status }
    );
  }
}


