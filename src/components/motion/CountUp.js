"use client";

import { useRef } from "react";
import { gsap, useGSAP, EASE, START, MOTION } from "@/lib/gsap";

/* Splits "48h" into 48 and "h", "2025" into 2025 and "". */
const VALUE = /^(\d[\d,]*)(.*)$/;

/**
 * Counts the numbers in `.stat__value` up on scroll-in.
 *
 * Wraps <Stats/> rather than replacing it, so Stats stays a Server Component
 * and the final values are in the server-rendered HTML. Anything that is not
 * a leading number is left alone.
 */
export default function CountUp({
  className,
  select = ".stat__value",
  duration = 1.4,
  start = START,
  children,
  ...rest
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION, () => {
        const nodes = gsap.utils.toArray(ref.current.querySelectorAll(select));
        const original = new Map(nodes.map((n) => [n, n.textContent]));

        nodes.forEach((node) => {
          const match = VALUE.exec(node.textContent.trim());
          if (!match) return;

          const end = Number(match[1].replace(/,/g, ""));
          const suffix = match[2];
          const counter = { n: 0 };

          gsap.to(counter, {
            n: end,
            duration,
            ease: EASE,
            snap: { n: 1 },
            scrollTrigger: { trigger: node, start, once: true },
            onUpdate: () => {
              node.textContent = Math.round(counter.n) + suffix;
            },
            /* Restore the exact server-rendered string, commas and all. */
            onComplete: () => {
              node.textContent = match[1] + suffix;
            },
          });
        });

        /* Killing a tween mid-count would leave a partial number on screen. */
        return () => {
          original.forEach((text, node) => {
            node.textContent = text;
          });
        };
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
}
