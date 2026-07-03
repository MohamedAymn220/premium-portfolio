"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

type SubmissionStatus = "idle" | "success" | "error";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

const fieldIds = {
  name: "contact-name",
  email: "contact-email",
  message: "contact-message",
} as const;

const errorIds = {
  name: "contact-name-error",
  email: "contact-email-error",
  message: "contact-message-error",
} as const;

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqgkdkd";

function validateForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter your message.";
  } else if (values.message.trim().length < 12) {
    errors.message = "Please write at least 12 characters.";
  }

  return errors;
}

function ContactSuccess() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-12 text-center"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.svg
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        aria-hidden="true"
      >
        <motion.circle
          cx="38"
          cy="38"
          r="35"
          stroke="#10B981"
          strokeWidth="2.5"
          fill="rgba(16,185,129,0.06)"
          transform="rotate(-90 38 38)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <motion.path
          d="M23 39 L33 49 L53 27"
          stroke="#10B981"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut", delay: 0.45 }}
        />
      </motion.svg>
      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
        Thank you!
      </h3>
      <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
        Your message has been sent successfully. Mohamed will get back to you
        within 24 hours.
      </p>
    </motion.div>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof ContactFormValues, value: string) {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [field]: undefined }));
    setSubmissionStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validateForm(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmissionStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setValues(initialValues);
        setErrors({});
        setSubmissionStatus("success");
      } else {
        setSubmissionStatus("error");
      }
    } catch {
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.35 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">
          Contact
        </p>
        <h2
          id="contact-heading"
          className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Start a focused backend or full-stack conversation
        </h2>
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          Reach Mohamed Ayman for backend internships, Django engineering work,
          full-stack collaboration, or production-ready web application
          opportunities.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto mt-12 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
        viewport={{ once: true, amount: 0.25 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="overflow-hidden rounded-[2.5rem] border border-white/[0.06] bg-slate-900/40 p-8 shadow-2xl shadow-emerald-500/[0.02] backdrop-blur-xl sm:p-10">
          <CardContent className="p-0">
            {submissionStatus === "success" ? (
              <ContactSuccess />
            ) : (
            <form
              action={FORMSPREE_ENDPOINT}
              className="space-y-5"
              method="POST"
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-slate-200"
                    htmlFor={fieldIds.name}
                  >
                    Name
                  </label>
                  <Input
                    aria-describedby={errors.name ? errorIds.name : undefined}
                    aria-invalid={Boolean(errors.name)}
                    autoComplete="name"
                    id={fieldIds.name}
                    name="name"
                    onChange={(event) => updateField("name", event.target.value)}
                    placeholder="Your full name"
                    value={values.name}
                  />
                  {errors.name ? (
                    <p className="text-sm text-red-300" id={errorIds.name} role="alert">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-slate-200"
                    htmlFor={fieldIds.email}
                  >
                    Email
                  </label>
                  <Input
                    aria-describedby={errors.email ? errorIds.email : undefined}
                    aria-invalid={Boolean(errors.email)}
                    autoComplete="email"
                    id={fieldIds.email}
                    name="email"
                    onChange={(event) => updateField("email", event.target.value)}
                    placeholder="you@example.com"
                    type="email"
                    value={values.email}
                  />
                  {errors.email ? (
                    <p className="text-sm text-red-300" id={errorIds.email} role="alert">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-slate-200"
                  htmlFor={fieldIds.message}
                >
                  Message
                </label>
                <Textarea
                  aria-describedby={errors.message ? errorIds.message : undefined}
                  aria-invalid={Boolean(errors.message)}
                  id={fieldIds.message}
                  name="message"
                  onChange={(event) => updateField("message", event.target.value)}
                  placeholder="Tell Mohamed about the backend, full-stack, or internship opportunity."
                  value={values.message}
                />
                {errors.message ? (
                  <p className="text-sm text-red-300" id={errorIds.message} role="alert">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col gap-4 border-t border-white/[0.04] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p
                  aria-live="polite"
                  className="min-h-5 text-sm leading-6 text-muted-foreground"
                >
                  {submissionStatus === "error"
                    ? "Please review the highlighted fields and submit again."
                    : null}
                </p>
                <motion.div whileHover={{ y: -3, scale: 1.015 }} whileTap={{ scale: 0.985 }}>
                  <Button
                    aria-label="Send strategy brief to Mohamed Ayman"
                    className="group h-12 gap-2 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 shadow-[0_8px_30px_rgba(255,255,255,0.12)] transition-colors duration-300 hover:bg-emerald-300 hover:shadow-[0_10px_40px_rgba(16,185,129,0.3)]"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                    <span>{isSubmitting ? "Preparing..." : "Send Strategy Brief"}</span>
                  </Button>
                </motion.div>
              </div>
            </form>
            )}
          </CardContent>
        </div>
      </motion.div>

      <motion.footer
        className="mx-auto mt-12 max-w-5xl"
        initial={{ opacity: 0, y: 18 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
        viewport={{ once: true, amount: 0.35 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div
          aria-hidden="true"
          className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-800/80 to-transparent"
        />
        <div className="flex flex-col items-center justify-between gap-6 py-10 text-xs font-mono text-slate-400 md:flex-row">
          <p>© 2026 Mohamed Ayman. All rights reserved.</p>
          <address className="flex flex-col items-center gap-4 not-italic sm:flex-row sm:gap-6">
            <a
              aria-label="Email Mohamed Ayman at mohamedayman21172@gmail.com"
              className="inline-flex items-center gap-2 transition-colors hover:text-emerald-400"
              href="mailto:mohamedayman21172@gmail.com"
              title="Email Mohamed Ayman"
            >
              <Mail className="h-4 w-4 text-emerald-400/70" aria-hidden="true" />
              mohamedayman21172@gmail.com
            </a>
            <a
              aria-label="Call Mohamed Ayman at +20 114 963 6796"
              className="inline-flex items-center gap-2 transition-colors hover:text-emerald-400"
              href="tel:+201149636796"
              title="Call Mohamed Ayman"
            >
              <Phone className="h-4 w-4 text-emerald-400/70" aria-hidden="true" />
              +20 114 963 6796
            </a>
          </address>
        </div>
      </motion.footer>
    </div>
  );
}
