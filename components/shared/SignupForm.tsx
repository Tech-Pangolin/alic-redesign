"use client";

import { FormEvent, useState } from "react";

export type SignupField = {
  name: string;
  label: string;
  type?: "text" | "email";
  required?: boolean;
  autoComplete?: string;
};

type SignupFormProps = {
  fields: SignupField[];
  formName: string;
  buttonText?: string;
  dark?: boolean;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignupForm({
  fields,
  formName,
  buttonText = "Submit",
  dark = false,
}: SignupFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const inputClass = dark
    ? "w-full rounded-full border-2 border-transparent bg-alic-cream px-5 py-3 font-sans text-alic-navy outline-none focus:border-alic-gold"
    : "w-full rounded-full border-2 border-alic-navy/15 bg-white px-5 py-3 font-sans text-alic-navy outline-none focus:border-alic-gold";
  const labelClass = dark
    ? "font-sans text-sm font-medium text-alic-cream"
    : "font-sans text-sm font-medium text-alic-navy";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    for (const field of fields) {
      if (field.required && !values[field.name]?.trim()) {
        setError(`${field.label} is required.`);
        return;
      }
    }

    const email = (values.email ?? "").trim();
    if (!EMAIL_PATTERN.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    const name =
      values.name?.trim() ||
      [values.firstName, values.lastName].filter(Boolean).join(" ").trim() ||
      email;
    const message = fields
      .map((field) => `${field.label}: ${values[field.name] ?? ""}`)
      .join("\n");

    setError(null);
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject: formName, message }),
      });
      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;
      if (!response.ok || !result?.ok) {
        setError(result?.error ?? "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }
      setStatus("done");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  }

  if (status === "done") {
    return (
      <p
        role="status"
        className={
          dark
            ? "font-sans text-alic-cream"
            : "font-sans text-alic-navy"
        }
      >
        Thank you — you&apos;re signed up. We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-1.5">
          <label htmlFor={`signup-${field.name}`} className={labelClass}>
            {field.label}
            {field.required ? (
              <span aria-hidden="true" className="ml-0.5">
                *
              </span>
            ) : null}
          </label>
          <input
            id={`signup-${field.name}`}
            name={field.name}
            type={field.type ?? "text"}
            autoComplete={field.autoComplete}
            required={field.required}
            className={inputClass}
            value={values[field.name] ?? ""}
            onChange={(e) => {
              const v = e.target.value;
              setValues((prev) => ({ ...prev, [field.name]: v }));
              if (error) setError(null);
            }}
            disabled={status === "submitting"}
          />
        </div>
      ))}

      {error ? (
        <p role="alert" className="font-sans text-sm text-red-400">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-1 inline-flex items-center justify-center gap-2 self-start rounded-full bg-alic-gold px-8 py-3 font-sans text-lg font-semibold text-alic-navy transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-65"
      >
        {status === "submitting" ? "Submitting…" : buttonText}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
