"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";
import { PhoneIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const drawerId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link href="/" className="header__logo" aria-label={`${site.name} home`}>
            <Image src="/logo.svg" alt={site.name} width={110} height={53} preload />
          </Link>

          <nav className="header__nav" aria-label="Main">
            <ul className="header__list">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="header__link"
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <a href={site.phoneHref} className="header__phone">
              {site.phoneDisplay}
            </a>
            <Link href="/contact" className="btn btn--primary header__cta">
              Book a site visit
            </Link>
            <button
              type="button"
              className="header__toggle"
              aria-expanded={open}
              aria-controls={drawerId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <div id={drawerId} className={`header__drawer${open ? " header__drawer--open" : ""}`}>
        <div className="container">
          <ul className="header__drawer-list">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="header__drawer-link"
                  onClick={() => setOpen(false)}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
                {item.href === "/services" && (
                  <ul>
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="header__drawer-link header__drawer-sub"
                          onClick={() => setOpen(false)}
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="header__drawer-actions">
            <Link href="/contact" className="btn btn--primary btn--block" onClick={() => setOpen(false)}>
              Book a site visit
            </Link>
            <a href={site.phoneHref} className="btn btn--outline btn--block">
              <PhoneIcon className="btn__icon" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
