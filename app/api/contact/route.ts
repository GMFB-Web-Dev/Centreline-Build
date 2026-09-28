import { Resend } from "resend";
import { EnquiryEmail, type EnquiryEmailProps } from "@/emails/enquiry";
import { services } from "@/lib/services";

export const runtime = "nodejs";

type ContactPayload = EnquiryEmailProps & {
  consent?: string;
  website?: string;
  submissionId?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validServices = new Set([...services.map((service) => service.name), "Other"]);

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ message: "Please submit the website form." }, { status: 415 });
  }

  let raw: ContactPayload;
  try {
    raw = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ message: "We couldn’t read that enquiry. Please try again." }, { status: 400 });
  }

  if (text(raw.website, 200)) {
    return Response.json({ message: "Thanks—your enquiry has been received." });
  }

  const payload = {
    name: text(raw.name, 100),
    email: text(raw.email, 160).toLowerCase(),
    phone: text(raw.phone, 40),
    service: text(raw.service, 80),
    message: text(raw.message, 3000),
  };
  const submissionId = text(raw.submissionId, 80);
  const consent = text(raw.consent, 10);

  if (!payload.name || !emailPattern.test(payload.email) || payload.message.length < 10 || consent !== "yes") {
    return Response.json({ message: "Please complete your name, email, project details and consent." }, { status: 400 });
  }
  if (payload.service && !validServices.has(payload.service)) {
    return Response.json({ message: "Please select a valid service." }, { status: 400 });
  }
  if (!submissionId || !/^[a-zA-Z0-9-]{8,80}$/.test(submissionId)) {
    return Response.json({ message: "Please refresh the page and try again." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const destination = process.env.CONTACT_FORM_TO_EMAIL;
  if (!apiKey || !destination) {
    console.error("Contact form environment variables are not configured.");
    return Response.json({ message: "Email is not configured yet. Please call or email Centreline Build directly." }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL || "Centreline Build <onboarding@resend.dev>";
  const to = destination.split(",").map((address) => address.trim()).filter(Boolean);
  const emailData = {
    from,
    to,
    replyTo: payload.email,
    subject: `New ${payload.service || "building"} enquiry — ${payload.name.replace(/[\r\n]/g, " ")}`,
    react: EnquiryEmail(payload),
    text: [
      "NEW CENTRELINE BUILD ENQUIRY",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || "Not provided"}`,
      `Service: ${payload.service || "Not selected"}`,
      "",
      "Project details:",
      payload.message,
    ].join("\n"),
  };

  const idempotencyKey = `centreline-enquiry-${submissionId}`;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const { error } = await resend.emails.send(emailData, { idempotencyKey });
    if (!error) return Response.json({ message: "Thanks—your enquiry has been sent." });

    const retryable = error.statusCode === 429 || (error.statusCode !== null && error.statusCode >= 500);
    if (!retryable || attempt === 1) {
      console.error("Resend contact form error:", error.name, error.statusCode);
      return Response.json({ message: "We couldn’t send your enquiry right now. Please call or email us directly." }, { status: 502 });
    }
    await new Promise((resolve) => setTimeout(resolve, 400));
  }

  return Response.json({ message: "We couldn’t send your enquiry right now." }, { status: 502 });
}
