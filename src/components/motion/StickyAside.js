"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, DESKTOP } from "@/lib/gsap";

/**
 * Replacement for `position: sticky` on the enquiry card.
 *
 * `position: sticky` resolves against the nearest scrollport, which
 * ScrollSmoother replaces with a transformed content element — so the card
 * would simply scroll away. This pins it with ScrollTrigger instead, releasing
 * it when the row it sits in ends.
 *
 * ContactForm calls ScrollTrigger.refresh() when its success state replaces the
 * form with a much shorter block, so the pin end is re-measured.
 */
export default function StickyAside({ className, children, offset = 24, ...rest }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(DESKTOP, () => {
        const header = document.querySelector(".header");
        const top = (header ? header.offsetHeight : 0) + offset;
        const row = ref.current.closest(".row");
        if (!row) return;

        /* A card taller than the space under the header cannot be pinned
           without hiding its own bottom — let it scroll normally instead. */
        if (ref.current.offsetHeight + top > window.innerHeight) return;

        const st = ScrollTrigger.create({
          trigger: ref.current,
          start: `top top+=${top}`,
          endTrigger: row,
          end: "bottom bottom",
          pin: ref.current,
          pinSpacing: false,
        });

        return () => st.kill();
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
