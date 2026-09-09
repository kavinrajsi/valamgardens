"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";
import { PhoneIcon } from "./Icons";

/**
 * Position of each drawer row in the open animation, counted in the order the
 * rows actually appear — the six service links sit between Services and About.
 * Computed once at module scope: `nav` and `services` are static imports, so
 * mutating a counter during render would be both wasteful and compiler-hostile.
 */
const drawerOrder = (() => {
  const order = new Map();
  let i = 0;
  for (const item of nav) {
    order.set(item.href, i++);
    if (item.href === "/services") {
      for (const s of services) order.set(`/services/${s.slug}`, i++);
    }
  }
  return { order, count: i };
})();

const stagger = (href) => ({ "--i": drawerOrder.order.get(href) ?? 0 });

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
            <Link href="/contact" className="btn btn--primary header__cta" data-enquiry="header">
              Get a proposal
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
                  style={stagger(item.href)}
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
                          style={stagger(`/services/${s.slug}`)}
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
          <div className="header__drawer-actions" style={{ "--i": drawerOrder.count }}>
            <Link href="/contact" className="btn btn--primary btn--block" data-enquiry="drawer" onClick={() => setOpen(false)}>
              Get a proposal
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
