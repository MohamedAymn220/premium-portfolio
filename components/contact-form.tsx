"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

type ContactFormStatus = "idle" | "error" | "success";

const initialState: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [status, setStatus] = useState<ContactFormStatus>("idle");

  function updateField(field: keyof ContactFormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== "idle") setStatus("idle");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isEmailValid = /\S+@\S+\.\S+/.test(form.email);
    const hasRequiredFields = form.name.trim() && form.message.trim() && isEmailValid;

    if (!hasRequiredFields) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );

    window.location.href = `mailto:mohamedayman21172@gmail.com?subject=${subject}&body=${body}`;
    setForm(initialState);
    setStatus("success");
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 md:p-8">
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-200">
              Name
              <Input
                aria-label="Your name"
                autoComplete="name"
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Your full name"
                value={form.name}
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-200">
              Email
              <Input
                aria-label="Your email address"
                autoComplete="email"
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="you@example.com"
                type="email"
                value={form.email}
              />
            </label>
          </div>
          <label className="block space-y-2 text-sm font-medium text-slate-200">
            Message
            <Textarea
              aria-label="Your message"
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Tell Mohamed about the backend, full-stack, or internship opportunity."
              value={form.message}
            />
          </label>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p
              aria-live="polite"
              className="min-h-5 text-sm text-muted-foreground"
            >
              {status === "error" && "Please enter a valid name, email, and message."}
              {status === "success" && "Email client opened with your message."}
            </p>
            <Button type="submit" aria-label="Send message to Mohamed Ayman">
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
