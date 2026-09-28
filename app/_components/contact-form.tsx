"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/services";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          submissionId: crypto.randomUUID(),
        }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "We couldn’t send your enquiry.");
      }

      form.reset();
      setStatus("success");
      setMessage("Thanks—your enquiry is with us. We’ll be in touch soon.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please call or email us instead.",
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" autoComplete="name" required maxLength={100} placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required maxLength={160} placeholder="you@example.com" />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="Your phone number" />
        </label>
        <label>
          <span>Service</span>
          <select name="service" defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map((service) => (
              <option value={service.name} key={service.slug}>{service.name}</option>
            ))}
            <option value="Other">Something else</option>
          </select>
        </label>
      </div>
      <label>
        <span>Tell us about your project</span>
        <textarea name="message" required maxLength={3000} rows={6} placeholder="What are you hoping to build, and where?" />
      </label>
      <label className="honeypot" aria-hidden="true">
        Company website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="consent-row">
        <input name="consent" type="checkbox" value="yes" required />
        <span>I’m happy for Centreline Build to contact me about this enquiry.</span>
      </label>
      <div className="form-submit-row">
        <button className="button button-red" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"}
          <span aria-hidden="true">↗</span>
        </button>
        <p className={`form-message ${status}`} role="status" aria-live="polite">
          {message}
        </p>
      </div>
    </form>
  );
}

