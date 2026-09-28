import { site } from "@/lib/site";
import { ContactForm } from "./contact-form";

export function ContactSection({
  heading = "Let’s build something that lasts.",
}: {
  heading?: string;
}) {
  return (
    <section className="contact-section" id="enquire">
      <div className="section-shell contact-section-grid">
        <div className="contact-copy reveal">
          <p className="eyebrow eyebrow-light">Start a conversation</p>
          <h2>{heading}</h2>
          <p>
            Tell us what you have in mind. We’ll come back to you with practical next steps and a straightforward conversation about your project.
          </p>
          <div className="contact-direct">
            <a href={site.phoneHref}>
              <span>Call</span>
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`}>
              <span>Email</span>
              {site.email}
            </a>
          </div>
        </div>
        <div className="form-card reveal">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

