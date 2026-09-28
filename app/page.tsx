import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./_components/arrow-icon";
import { ContactSection } from "./_components/contact-section";
import { ServiceCard } from "./_components/service-card";
import { services } from "@/lib/services";

const proofPoints = [
  { number: "Local", label: "Nelson & Tasman" },
  { number: "End-to-end", label: "One capable team" },
  { number: "Built right", label: "Quality workmanship" },
  { number: "Clear", label: "Practical communication" },
];

const process = [
  ["01", "Meet", "We listen, ask the right questions and understand what success looks like for you."],
  ["02", "Plan", "We turn the brief into a practical scope with clear expectations before work begins."],
  ["03", "Build", "Skilled hands, careful sequencing and open communication keep the project moving."],
  ["04", "Enjoy", "We finish well, walk you through the result and leave you with a space made to last."],
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Image src="/images/centreline/hero-home.png" alt="Modern dark-clad Centreline Build home in Nelson" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="section-shell hero-content">
          <p className="eyebrow eyebrow-light">Nelson builders • Built for real life</p>
          <h1>Built right.<br /><span>Built to last.</span></h1>
          <p className="hero-lede">New homes, renovations and outdoor spaces delivered with practical guidance, honest workmanship and care from first conversation to final detail.</p>
          <div className="hero-actions">
            <Link className="button button-red" href="/contact">Start your project <ArrowIcon /></Link>
            <Link className="button button-light" href="/services">Our services <ArrowIcon /></Link>
          </div>
        </div>
        <div className="proof-strip section-shell">
          {proofPoints.map((item) => (
            <div key={item.label}><span className="proof-mark" aria-hidden="true" /><p><strong>{item.number}</strong>{item.label}</p></div>
          ))}
        </div>
      </section>

      <section className="intro-section section-shell">
        <div className="intro-copy reveal"><p className="eyebrow">Built around you</p><h2>Good building starts with a clear line.</h2></div>
        <div className="intro-body reveal"><p>Centreline Build creates durable, considered spaces for people across Nelson and Tasman. We pair the craft of a trusted local builder with a calm, organised process—so you always know what is happening and why.</p><Link className="text-link" href="/about">Meet Centreline Build <ArrowIcon /></Link></div>
      </section>

      <section className="services-section">
        <div className="section-shell">
          <div className="section-heading reveal"><div><p className="eyebrow">What we build</p><h2>One team. Every kind of home project.</h2></div><Link className="button button-outline" href="/services">View all services <ArrowIcon /></Link></div>
          <div className="service-grid">{services.map((service, index) => <ServiceCard service={service} featured={index === 0 || index === 1} key={service.slug} />)}</div>
        </div>
      </section>

      <section className="red-statement"><div className="section-shell red-statement-inner"><p className="eyebrow eyebrow-light">Centreline Build</p><h2>Strong foundations.<br />Straight conversations.</h2><Link className="button button-dark" href="/contact">Let’s get building <ArrowIcon /></Link></div></section>

      <section className="feature-split section-shell">
        <div className="feature-image reveal"><Image src="/images/centreline/kitchen-primary.png" alt="Finished open-plan kitchen with a black stone island" fill sizes="(max-width: 760px) 100vw, 50vw" /><div className="image-note"><span>Interior craft</span><strong>Spaces that work beautifully</strong></div></div>
        <div className="feature-copy reveal"><p className="eyebrow">Details matter</p><h2>Made for the way you live now—and next.</h2><p>A well-built home is more than a collection of good-looking finishes. It is the layout that flows, the storage that lands in the right place and the details that still feel solid years later.</p><p>That is why we think through the whole picture, balancing design ambition with practical building knowledge from the start.</p><Link className="text-link" href="/services/kitchens">Explore our approach <ArrowIcon /></Link></div>
      </section>

      <section className="process-section"><div className="section-shell"><div className="section-heading reveal"><div><p className="eyebrow eyebrow-light">How we work</p><h2>A straightforward path from idea to handover.</h2></div></div><div className="process-grid">{process.map(([number, title, body]) => <article key={number} className="process-card reveal"><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

      <section className="project-gallery section-shell">
        <div className="section-heading reveal"><div><p className="eyebrow">Recent work</p><h2>Built with purpose, finished with care.</h2></div></div>
        <div className="gallery-grid">
          <figure className="gallery-tall reveal"><Image src="/images/centreline/new-build-primary.png" alt="Centreline home with timber deck" fill sizes="(max-width: 760px) 100vw, 40vw" /></figure>
          <figure className="reveal"><Image src="/images/dundeal/timber-cladding.jpg" alt="Warm timber cladding detail on a modern build" fill sizes="(max-width: 760px) 100vw, 30vw" /></figure>
          <figure className="reveal"><Image src="/images/centreline/deck-primary.png" alt="Outdoor deck joining two dark-clad buildings" fill sizes="(max-width: 760px) 100vw, 30vw" /></figure>
          <figure className="gallery-wide reveal"><Image src="/images/dundeal/modern-home-project.jpg" alt="Modern home project with cedar detail and new fencing" fill sizes="(max-width: 760px) 100vw, 60vw" /></figure>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
