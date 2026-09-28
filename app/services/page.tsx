import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "../_components/arrow-icon";
import { ContactSection } from "../_components/contact-section";
import { ServiceCard } from "../_components/service-card";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Building Services",
  description: "Explore Centreline Build services across Nelson and Tasman.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero page-hero-services">
        <div className="section-shell">
          <p className="eyebrow eyebrow-light">Our services</p>
          <h1>From first sketch<br />to final finish.</h1>
          <p>One dependable team for new homes, thoughtful renovations and the spaces that make everyday life better.</p>
        </div>
      </section>
      <section className="all-services section-shell">
        <div className="all-services-intro reveal">
          <p className="eyebrow">Built around your project</p>
          <h2>Choose where you want to begin.</h2>
          <p>Every service has its own specialist page. Explore the details, then tell us what you are planning.</p>
        </div>
        <div className="all-services-list">
          {services.map((service, index) => (
            <div className="all-services-item reveal" key={service.slug}>
              <span>0{index + 1}</span>
              <div><p>{service.eyebrow}</p><h3>{service.name}</h3></div>
              <Link className="button button-outline" href={`/services/${service.slug}`}>View service <ArrowIcon /></Link>
            </div>
          ))}
        </div>
        <div className="service-grid service-grid-all">{services.map((service) => <ServiceCard service={service} key={service.slug} />)}</div>
      </section>
      <ContactSection heading="Have a project in mind? Let’s map the next step." />
    </>
  );
}

