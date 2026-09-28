import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../_components/arrow-icon";
import { ContactSection } from "../_components/contact-section";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet Centreline Build, a practical, quality-focused building team serving Nelson and Tasman.",
};

const values = [
  ["01", "Honest work", "Clear advice, straight answers and expectations that are set properly from the start."],
  ["02", "Care in the detail", "We sweat the small things because that is where a good build becomes a lasting one."],
  ["03", "Built for people", "Homes should serve the people inside them. We keep real life at the centre of every decision."],
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero section-shell">
        <div className="about-title reveal"><p className="eyebrow">About Centreline</p><h1>Our history.<br /><span>Our standard.</span></h1></div>
        <div className="about-intro reveal"><p>Our journey began with a simple goal: to build quality homes and spaces people can rely on. We’ve spent years perfecting our craft and building a reputation for thoughtful work across the top of the South.</p><p>From early projects to the work we do today, we remain committed to bringing strength, beauty and practical value to every build.</p></div>
      </section>
      <section className="about-story section-shell">
        <div className="about-story-image reveal"><Image src="/images/centreline/new-build-primary.png" alt="Completed Centreline Build home with timber deck" fill sizes="(max-width: 760px) 100vw, 55vw" /></div>
        <div className="about-story-card reveal"><p className="eyebrow eyebrow-light">Why Centreline</p><h2>Experience without the ego.</h2><p>Over the years we’ve grown, but our values remain the same. We believe in honest work, attention to detail and strong relationships with our clients. Every project matters because every one becomes part of somebody’s day-to-day life.</p><Link className="button button-light" href="/services">See what we build <ArrowIcon /></Link></div>
      </section>
      <section className="values-section"><div className="section-shell"><div className="section-heading reveal"><div><p className="eyebrow">What guides us</p><h2>The standard stays the same on every job.</h2></div></div><div className="values-grid">{values.map(([number, title, body]) => <article className="value-card reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <ContactSection heading="Bring your idea. We’ll bring the building know-how." />
    </>
  );
}

