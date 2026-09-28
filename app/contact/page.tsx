import type { Metadata } from "next";
import Image from "next/image";
import { ContactSection } from "../_components/contact-section";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", description: "Contact Centreline Build about a building project in Nelson or Tasman." };

export default function ContactPage() {
  return (
    <>
      <section className="contact-page-hero section-shell">
        <div className="contact-page-title reveal"><p className="eyebrow">Contact Centreline</p><h1>Let’s get your<br /><span>project moving.</span></h1></div>
        <div className="contact-page-copy reveal"><p>Whether you’re ready to start or just have a few questions, we’re here to help. Tell us about your idea and we’ll come back with clear, practical next steps.</p><div className="contact-page-links"><a href={site.phoneHref}><span>Phone</span>{site.phoneDisplay}</a><a href={`mailto:${site.email}`}><span>Email</span>{site.email}</a><p><span>Area</span>{site.area}</p></div></div>
      </section>
      <section className="contact-gallery section-shell"><div className="contact-gallery-main reveal"><Image src="/images/centreline/hero-home.png" alt="Centreline Build modern home exterior" fill priority sizes="(max-width: 760px) 100vw, 65vw" /></div><div className="contact-gallery-side reveal"><Image src="/images/dundeal/timber-cladding.jpg" alt="Timber cladding detail on a modern build" fill sizes="(max-width: 760px) 100vw, 35vw" /></div></section>
      <ContactSection heading="Tell us what you’re planning." />
    </>
  );
}

