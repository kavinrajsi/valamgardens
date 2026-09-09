"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger, DESKTOP } from "@/lib/gsap";

/**
 * Pins its inner content while the rest of the row scrolls past.
 *
 * Renders the grid column itself plus one inner wrapper, and pins the WRAPPER.
 * ScrollTrigger inserts a pin-spacer as the pinned element's parent, so pinning
 * the `.col-*` directly would put an unclassed spacer into the `.row` flex
 * container and collapse the layout.
 *
 * Desktop only: pinning on a phone eats the whole viewport.
 */
export default function Pin({ className, children, offset = 24, ...rest }) {
  const col = useRef(null);
  const inner = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(DESKTOP, () => {
        const header = document.querySelector(".header");
        const top = (header ? header.offsetHeight : 0) + offset;
        const row = col.current.closest(".row");
        if (!row) return;

        const st = ScrollTrigger.create({
          trigger: inner.current,
          start: `top top+=${top}`,
          endTrigger: row,
          end: "bottom bottom",
          pin: inner.current,
          pinSpacing: false,
        });

        return () => st.kill();
      });

      return () => mm.revert();
    },
    { scope: col }
  );

  return (
    <div ref={col} className={className} {...rest}>
      <div ref={inner}>{children}</div>
    </div>
  );
}
