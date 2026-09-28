"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { ArrowIcon } from "./arrow-icon";

function Wordmark() {
  return (
    <span className="wordmark" aria-label="Centreline Build">
      <span className="wordmark-main">Centreline</span>
      <span className="wordmark-sub"><i /> Build</span>
    </span>
  );
}

export function Header() {
  const servicesMenuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      const menu = servicesMenuRef.current;
      if (menu?.open && !menu.contains(event.target as Node)) {
        menu.open = false;
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && servicesMenuRef.current?.open) {
        servicesMenuRef.current.open = false;
        servicesMenuRef.current.querySelector("summary")?.focus();
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function closeServicesMenu() {
    if (servicesMenuRef.current) servicesMenuRef.current.open = false;
  }

  return (
    <header className="site-header">
      <div className="header-shell">
        <Link className="brand-link" href="/">
          <Wordmark />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <details className="services-menu" ref={servicesMenuRef}>
            <summary>
              Services
              <svg className="chevron" aria-hidden="true" viewBox="0 0 16 16" fill="none">
                <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <div className="service-dropdown" onClick={closeServicesMenu}>
              <Link className="all-services-link" href="/services">
                <span>All services</span>
                <ArrowIcon />
              </Link>
              {services.map((service) => (
                <Link href={`/services/${service.slug}`} key={service.slug}>
                  {service.name}
                </Link>
              ))}
            </div>
          </details>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <a className="button button-red header-call" href={site.phoneHref}>
          Call {site.phoneDisplay}
        </a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <nav className="mobile-menu-panel" aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            <Link href="/services">All services</Link>
            <div className="mobile-subnav">
              {services.map((service) => (
                <Link href={`/services/${service.slug}`} key={service.slug}>
                  {service.name}
                </Link>
              ))}
            </div>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <a className="button button-red" href={site.phoneHref}>
              Call {site.phoneDisplay}
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
