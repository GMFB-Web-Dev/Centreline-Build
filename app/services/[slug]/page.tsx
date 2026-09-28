import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/app/_components/arrow-icon";
import { ContactSection } from "@/app/_components/contact-section";
import { serviceBySlug, services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug.get(slug);
  if (!service) return {};
  return { title: service.name, description: `${service.name} by Centreline Build across Nelson and Tasman. ${service.headline}` };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug.get(slug);
  if (!service) notFound();

  return (
    <>
      <section className="service-hero section-shell">
        <div className="service-hero-copy reveal">
          <p className="eyebrow">{service.eyebrow}</p><h1>{service.name}</h1><h2>{service.headline}</h2><p>{service.intro}</p>
          <Link className="button button-red" href="#enquire">Discuss your project <ArrowIcon /></Link>
        </div>
        <div className="service-hero-image reveal"><Image src={service.heroImage} alt={service.heroAlt} fill priority sizes="(max-width: 760px) 100vw, 48vw" /><div className="image-index">01</div></div>
      </section>
      <section className="service-detail section-shell">
        <div className="service-detail-image reveal"><Image src={service.featureOne.image} alt={service.featureOne.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
        <div className="service-detail-copy reveal"><p className="eyebrow">{service.featureOne.kicker}</p><h2>{service.featureOne.title}</h2><p>{service.featureOne.body}</p><Link className="text-link" href="#enquire">Ready to start? <ArrowIcon /></Link></div>
      </section>
      <section className="service-detail service-detail-reverse section-shell">
        <div className="service-detail-image reveal"><Image src={service.featureTwo.image} alt={service.featureTwo.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
        <div className="service-detail-copy reveal"><p className="eyebrow">{service.featureTwo.kicker}</p><h2>{service.featureTwo.title}</h2><p>{service.featureTwo.body}</p><Link className="text-link" href="/contact">Talk to our team <ArrowIcon /></Link></div>
      </section>
      <section className="service-cta section-shell reveal"><p>Centreline Build</p><h2>Let’s get <span>building.</span></h2><Link className="button button-light" href="#enquire">Plan your project <ArrowIcon /></Link></section>
      <ContactSection heading={`Let’s talk about your ${service.name.toLowerCase()} project.`} />
    </>
  );
}

