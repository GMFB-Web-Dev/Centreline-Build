import Link from "next/link";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-brand">
          <p className="footer-kicker">Centreline Build</p>
          <h2>Built right.<br />Built to last.</h2>
          <p>Practical advice and considered building across Nelson and Tasman.</p>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Visit</h3>
          <ul>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/services">All services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li><a href={site.phoneHref}>{site.phoneDisplay}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.area}</li>
            <li>Mon–Fri, 8am–5pm</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Centreline Build</span>
        <span>Nelson, New Zealand</span>
      </div>
    </footer>
  );
}

