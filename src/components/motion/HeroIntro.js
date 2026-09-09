"use client";

import { useRef } from "react";
import { gsap, useGSAP, EASE, MOTION } from "@/lib/gsap";

/**
 * The one bespoke timeline on the site: the home hero, played on mount rather
 * than on scroll. Everything else composes Reveal / Stagger / SplitHeading.
 *
 * Replaces the `.row.hero__grid` element, so the two hero columns stay direct
 * flex children of the row.
 */
export default function HeroIntro({ className, children, ...rest }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION, () => {
        const q = gsap.utils.selector(ref);
        const tl = gsap.timeline({ defaults: { ease: EASE } });

        tl.from(q(".hero__media"), { autoAlpha: 0, scale: 1.04, duration: 1 }, 0)
          .from(q(".hero__ground"), { autoAlpha: 0, duration: 0.9 }, 0.1)
          .from(q(".hero__lead"), { autoAlpha: 0, y: 20, duration: 0.7 }, 0.25)
          .from(q(".hero__actions > *"), { autoAlpha: 0, y: 16, duration: 0.6, stagger: 0.08 }, 0.4)
          .from(q(".hero__note"), { autoAlpha: 0, y: 12, duration: 0.6 }, 0.55)
          .from(q(".hero__caption"), { autoAlpha: 0, y: 12, duration: 0.6 }, 0.6);

        return () => tl.kill();
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
