import { NextRequest, NextResponse } from "next/server";
import { corsHeaders, validateContactPayload } from "@/lib/contact";
import { appendContactRow } from "@/lib/google-sheets";

function jsonResponse(
  body: unknown,
  status: number,
  origin: string | null,
) {
  return NextResponse.json(body, {
    status,
    headers: corsHeaders(origin),
  });
}

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get("origin");
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(origin),
  });
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse(
      { ok: false, error: "Invalid JSON body." },
      400,
      origin,
    );
  }

  const validated = validateContactPayload(body);
  if (!validated.ok) {
    return jsonResponse({ ok: false, error: validated.error }, 400, origin);
  }

  try {
    await appendContactRow(validated.data);
    return jsonResponse({ ok: true }, 200, origin);
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return jsonResponse(
      {
        ok: false,
        error: "Unable to save your message. Please try again later.",
      },
      500,
      origin,
    );
  }
}
