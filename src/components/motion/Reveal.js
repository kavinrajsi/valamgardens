"use client";

import { useRef } from "react";
import { gsap, useGSAP, EASE, START, MOTION } from "@/lib/gsap";

/**
 * Fades and lifts its own wrapper into view once, on scroll.
 *
 * Renders `children` untouched, so Server Components passed in stay on the
 * server. IMPORTANT: this replaces the element it animates — give it the grid
 * class directly (`<Reveal className="col-12 col-lg-5">`) rather than wrapping
 * a `.col-*` div, or the Bootstrap grid in src/styles/grid.css collapses.
 *
 * The initial hidden state is set in JS, never CSS, so the content stays
 * visible if JS fails.
 */
export default function Reveal({
  as: Tag = "div",
  className,
  y = 24,
  delay = 0,
  duration = 0.7,
  start = START,
  children,
  ...rest
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION, () => {
        gsap.set(ref.current, { autoAlpha: 0, y });
        gsap.to(ref.current, {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          ease: EASE,
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
