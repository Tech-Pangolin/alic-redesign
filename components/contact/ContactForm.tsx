"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.css";

type FormFields = {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const initialValues: FormFields = {
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
};

function validate(values: FormFields): FormErrors {
    const errors: FormErrors = {};

    if (!values.firstName.trim()) {
        errors.firstName = "First name is required.";
    }
    if (!values.lastName.trim()) {
        errors.lastName = "Last name is required.";
    }
    if (!values.email.trim()) {
        errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
        errors.email = "Enter a valid email address.";
    }
    if (!values.message.trim()) {
        errors.message = "Please tell us how we can help.";
    }

    return errors;
}

export default function ContactForm() {
    const [values, setValues] = useState<FormFields>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    function updateField<K extends keyof FormFields>(key: K, value: FormFields[K]) {
        setValues((prev) => ({ ...prev, [key]: value }));
        if (errors[key]) {
            setErrors((prev) => {
                const next = { ...prev };
                delete next[key];
                return next;
            });
        }
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const nextErrors = validate(values);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) {
            return;
        }
        setSubmitted(true);
    }

    function handleReset() {
        setValues(initialValues);
        setErrors({});
        setSubmitted(false);
    }

    return (
        <section className={styles.section} aria-label="Contact form">
            <div className={styles.card}>
                {submitted ? (
                    <div className={styles.success} role="status">
                        <h2 className={styles.successHeading}>Thank you</h2>
                        <p className={styles.successBody}>
                            Your message has been received. We look forward to
                            beginning the conversation.
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
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label className={styles.label} htmlFor="firstName">
                                    First name
                                    <span className={styles.required} aria-hidden="true">
                                        *
                                    </span>
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    autoComplete="given-name"
                                    required
                                    aria-required="true"
                                    aria-invalid={Boolean(errors.firstName)}
                                    aria-describedby={
                                        errors.firstName ? "firstName-error" : undefined
                                    }
                                    className={`${styles.input} ${errors.firstName ? styles.inputInvalid : ""}`}
                                    value={values.firstName}
                                    onChange={(e) =>
                                        updateField("firstName", e.target.value)
                                    }
                                />
                                {errors.firstName ? (
                                    <p id="firstName-error" className={styles.error}>
                                        {errors.firstName}
                                    </p>
                                ) : null}
                            </div>

                            <div className={styles.field}>
                                <label className={styles.label} htmlFor="lastName">
                                    Last name
                                    <span className={styles.required} aria-hidden="true">
                                        *
                                    </span>
                                </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    autoComplete="family-name"
                                    required
                                    aria-required="true"
                                    aria-invalid={Boolean(errors.lastName)}
                                    aria-describedby={
                                        errors.lastName ? "lastName-error" : undefined
                                    }
                                    className={`${styles.input} ${errors.lastName ? styles.inputInvalid : ""}`}
                                    value={values.lastName}
                                    onChange={(e) =>
                                        updateField("lastName", e.target.value)
                                    }
                                />
                                {errors.lastName ? (
                                    <p id="lastName-error" className={styles.error}>
                                        {errors.lastName}
                                    </p>
                                ) : null}
                            </div>
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
                            />
                            {errors.email ? (
                                <p id="email-error" className={styles.error}>
                                    {errors.email}
                                </p>
                            ) : null}
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="company">
                                Company
                            </label>
                            <input
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="organization"
                                className={styles.input}
                                value={values.company}
                                onChange={(e) => updateField("company", e.target.value)}
                            />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label} htmlFor="message">
                                How can we help?
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
                            />
                            {errors.message ? (
                                <p id="message-error" className={styles.error}>
                                    {errors.message}
                                </p>
                            ) : null}
                        </div>

                        <button type="submit" className={styles.submit}>
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
