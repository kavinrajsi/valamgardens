import Link from "next/link";
import Image from "next/image";
import { site, nav, policyLinks } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row row--gy-lg">
          <div className="col-12 col-md-6 col-lg-4">
            <Link href="/" className="footer__logo" aria-label={`${site.name} home`}>
              <Image src="/logo-light.svg" alt={site.name} width={130} height={62} />
            </Link>
            <p className="footer__about">
              {site.name} designs, builds and maintains gardens across Chennai. Vertical gardens,
              landscaping, terrace gardens, maintenance plans, office plant rental and bulk gift
              plants.
            </p>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <h2 className="footer__heading">Services</h2>
            <ul className="footer__list">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="footer__link">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <h2 className="footer__heading">Company</h2>
            <ul className="footer__list">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="footer__link">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h2 className="footer__heading">Talk to us</h2>
            <address className="footer__contact" style={{ fontStyle: "normal" }}>
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span>{site.hours}</span>
              <span>Serving all of Chennai and nearby districts</span>
            </address>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <ul className="footer__policies">
            {policyLinks.map((p) => (
              <li key={p.href}>
                <Link href={p.href}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
