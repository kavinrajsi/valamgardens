"use client";

import { useRef } from "react";
import { gsap, useGSAP, SplitText, EASE, START, MOTION } from "@/lib/gsap";

/**
 * Reveals a heading line by line.
 *
 * The heading text is server-rendered as normal; SplitText only re-wraps it in
 * the browser, and its default `aria: "auto"` keeps an aria-label on the
 * element with the generated pieces hidden from assistive tech. Crawlers that
 * do not run JS see the plain heading.
 *
 * Splitting is deferred until `document.fonts.ready` — next/font uses
 * `display: swap`, so splitting earlier would measure lines against the
 * fallback face and re-split on swap. `autoSplit` handles later resizes.
 */
export default function SplitHeading({
  as: Tag = "h2",
  className,
  y = 28,
  each = 0.08,
  duration = 0.8,
  start = START,
  children,
  ...rest
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      let split;
      let cancelled = false;

      mm.add(MOTION, () => {
        document.fonts.ready.then(() => {
          if (cancelled || !ref.current) return;

          split = SplitText.create(ref.current, {
            type: "lines",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                y,
                autoAlpha: 0,
                duration,
                ease: EASE,
                stagger: each,
                scrollTrigger: { trigger: ref.current, start, once: true },
              }),
          });
        });

        return () => {
          cancelled = true;
          split?.revert();
          split = undefined;
        };
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
