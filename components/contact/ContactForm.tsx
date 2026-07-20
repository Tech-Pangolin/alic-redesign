"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.css";

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const initialValues: FormFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.subject.trim()) {
    errors.subject = "Subject is required.";
  }
  if (!values.message.trim()) {
    errors.message = "Message is required.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormFields>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  function updateField<K extends keyof FormFields>(key: K, value: FormFields[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
    if (formError) {
      setFormError(null);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setFormError(null);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !result?.ok) {
        setFormError(
          result?.error ??
            "Unable to send your message. Please try again later.",
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setFormError("Unable to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setValues(initialValues);
    setErrors({});
    setFormError(null);
    setSubmitted(false);
  }

  return (
    <section className={styles.section} aria-label="Contact form">
      <div className={styles.card}>
        {submitted ? (
          <div className={styles.success} role="status">
            <h2 className={styles.successHeading}>Thank you</h2>
            <p className={styles.successBody}>
              Your message has been received. We look forward to beginning the
              conversation.
            </p>
            <button
              type="button"
              className={styles.reset}
              onClick={handleReset}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">
                Name
                <span className={styles.required} aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-required="true"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`${styles.input} ${errors.name ? styles.inputInvalid : ""}`}
                value={values.name}
                onChange={(e) => updateField("name", e.target.value)}
                disabled={isSubmitting}
              />
              {errors.name ? (
                <p id="name-error" className={styles.error}>
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                Email
                <span className={styles.required} aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-required="true"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`${styles.input} ${errors.email ? styles.inputInvalid : ""}`}
                value={values.email}
                onChange={(e) => updateField("email", e.target.value)}
                disabled={isSubmitting}
              />
              {errors.email ? (
                <p id="email-error" className={styles.error}>
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="subject">
                Subject
                <span className={styles.required} aria-hidden="true">
                  *
                </span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                autoComplete="off"
                required
                aria-required="true"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={
                  errors.subject ? "subject-error" : undefined
                }
                className={`${styles.input} ${errors.subject ? styles.inputInvalid : ""}`}
                value={values.subject}
                onChange={(e) => updateField("subject", e.target.value)}
                disabled={isSubmitting}
              />
              {errors.subject ? (
                <p id="subject-error" className={styles.error}>
                  {errors.subject}
                </p>
              ) : null}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">
                Message
                <span className={styles.required} aria-hidden="true">
                  *
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                aria-required="true"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "message-error" : undefined
                }
                className={`${styles.textarea} ${errors.message ? styles.textareaInvalid : ""}`}
                value={values.message}
                onChange={(e) => updateField("message", e.target.value)}
                disabled={isSubmitting}
              />
              {errors.message ? (
                <p id="message-error" className={styles.error}>
                  {errors.message}
                </p>
              ) : null}
            </div>

            {formError ? (
              <p className={styles.formError} role="alert">
                {formError}
              </p>
            ) : null}

            <button
              type="submit"
              className={styles.submit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
