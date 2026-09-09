"use client";

import { useRef } from "react";
import { gsap, useGSAP, EASE, START, MOTION } from "@/lib/gsap";

/**
 * Reveals the wrapper's matched descendants one after another.
 *
 * Like Reveal, this REPLACES the element it animates: use
 * `<Stagger className="row row--gy-lg">` in place of the `.row` div and it
 * animates the `.col-*` children. Adding a wrapper instead would make that
 * wrapper the flex child and collapse the columns (see grid.css `.row > *`).
 *
 * `select` is a selector relative to the wrapper; the default is direct
 * children.
 */
export default function Stagger({
  as: Tag = "div",
  className,
  select = ":scope > *",
  each = 0.08,
  y = 20,
  duration = 0.6,
  start = START,
  children,
  ...rest
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION, () => {
        const items = gsap.utils.toArray(ref.current.querySelectorAll(select));
        if (!items.length) return;

        gsap.set(items, { autoAlpha: 0, y });
        gsap.to(items, {
          autoAlpha: 1,
          y: 0,
          duration,
          ease: EASE,
          stagger: each,
          scrollTrigger: { trigger: ref.current, start, once: true },
        });
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
