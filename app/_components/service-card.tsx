import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";
import { ArrowIcon } from "./arrow-icon";

export function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  return (
    <article className={`service-card ${featured ? "service-card-featured" : ""}`}>
      <Image
        src={service.heroImage}
        alt={service.heroAlt}
        fill
        sizes={featured ? "(max-width: 760px) 100vw, 66vw" : "(max-width: 760px) 100vw, 33vw"}
      />
      <div className="service-card-shade" />
      <div className="service-card-content">
        <span>{service.eyebrow}</span>
        <h3>{service.name}</h3>
        <Link href={`/services/${service.slug}`} aria-label={`Explore ${service.name}`}>
          Explore service <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

