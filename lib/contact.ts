export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(
  body: unknown,
): ContactValidationResult {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const record = body as Record<string, unknown>;
  const name = typeof record.name === "string" ? record.name.trim() : "";
  const email = typeof record.email === "string" ? record.email.trim() : "";
  const subject =
    typeof record.subject === "string" ? record.subject.trim() : "";
  const message =
    typeof record.message === "string" ? record.message.trim() : "";

  if (!name) {
    return { ok: false, error: "Name is required." };
  }
  if (!email) {
    return { ok: false, error: "Email is required." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, error: "Enter a valid email address." };
  }
  if (!subject) {
    return { ok: false, error: "Subject is required." };
  }
  if (!message) {
    return { ok: false, error: "Message is required." };
  }

  return { ok: true, data: { name, email, subject, message } };
}

export function getAllowedOrigins(): string[] {
  const raw = process.env.CONTACT_ALLOWED_ORIGINS ?? "";
  return raw
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
}

export function corsHeaders(origin: string | null): HeadersInit {
  const allowed = getAllowedOrigins();
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };

  if (origin && allowed.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }

  return headers;
}
