import Link from "next/link";

export default function NotFound() {
  return <section className="not-found section-shell"><p className="eyebrow">404</p><h1>That page is off the plans.</h1><p>Try the homepage or browse all of our building services.</p><div><Link className="button button-red" href="/">Back home</Link><Link className="button button-outline" href="/services">Our services</Link></div></section>;
}
