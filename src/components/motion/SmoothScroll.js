"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger, ScrollSmoother, MOTION } from "@/lib/gsap";

/* useLayoutEffect warns during SSR; this component renders on the server too. */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Extra breathing room under the fixed header when jumping to an anchor. */
const ANCHOR_GAP = 16;

function headerOffset() {
  const header = document.querySelector(".header");
  return (header ? header.offsetHeight : 0) + ANCHOR_GAP;
}

/**
 * Scroll position that puts `target` `offset` px below the viewport top.
 *
 * Both rects carry the same ScrollSmoother transform, so their difference is
 * the target's distance from the top of the content box — i.e. the absolute
 * scroll position — regardless of where the smoother currently is or whether
 * it is mid-tween. Verified: scrollTo(this value) puts the target exactly
 * `offset` px from the top.
 */
function scrollPositionFor(target, offset) {
  const content = document.getElementById("smooth-content");
  if (!content) return target.getBoundingClientRect().top + window.scrollY - offset;
  return (
    target.getBoundingClientRect().top -
    content.getBoundingClientRect().top -
    offset
  );
}

/**
 * Wraps the scrollable page content and owns the single ScrollSmoother
 * instance. Fixed chrome (Header, MobileCtaBar, skip-link) must stay OUTSIDE
 * this component or it gets transformed along with the content.
 *
 * The smoother is deliberately NOT created inside useGSAP/gsap.context: the
 * context's revert on cleanup restores the inline styles ScrollSmoother sets
 * on #smooth-wrapper and #smooth-content, which under StrictMode's
 * double-invoke leaves a live-but-broken instance. It is torn down explicitly
 * instead.
 *
 * The refs below are read inside effects only, never during render, so this
 * stays safe under the React Compiler (`reactCompiler: true`).
 */
export default function SmoothScroll({ children }) {
  const smoother = useRef(null);
  /* Set while we move focus ourselves, so ScrollSmoother's focus handling does
     not also scroll. Keyboard Tab focus is left alone. */
  const ownFocusMove = useRef(false);
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    /* Same predicate direction as every motion primitive. */
    const query = window.matchMedia(MOTION);

    const start = () => {
      if (!query.matches) return;
      smoother.current =
        ScrollSmoother.get() ||
        ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.2,
          effects: true, // enables data-speed / data-lag attributes
          smoothTouch: 0, // keep native momentum scrolling on touch
          ignoreMobileResize: true,
          /* Returning false suppresses ScrollSmoother's "scroll the focused
             element to centre" behaviour. We only suppress it for focus moves
             we make ourselves after an anchor jump — otherwise it would fight
             the scroll we just started and leave the target under the header.
             Tabbing still scrolls off-screen elements into view. */
          onFocusIn: () => (ownFocusMove.current ? false : undefined),
        });
    };

    const stop = () => {
      smoother.current?.kill();
      smoother.current = null;
    };

    /* Reduce Motion can be toggled while the page is open. */
    const onChange = () => {
      stop();
      start();
    };

    start();
    query.addEventListener("change", onChange);

    return () => {
      query.removeEventListener("change", onChange);
      stop();
    };
  }, []);

  /* Positions are measured from layout, so re-measure after anything that
     changes document height: font swap (next/font uses display:swap) and
     late-loading images. */
  useEffect(() => {
    let cancelled = false;
    const refresh = () => {
      if (!cancelled) ScrollTrigger.refresh();
    };

    document.fonts?.ready.then(refresh);

    if (document.readyState === "complete") {
      refresh();
    } else {
      window.addEventListener("load", refresh, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", refresh);
    };
  }, []);

  /* Native #hash scrolling does not work once ScrollSmoother fakes the scroll
     position, so intercept it and move focus explicitly for keyboard users. */
  useEffect(() => {
    const scrollToTarget = (target, smooth) => {
      const offset = headerOffset();

      /* Focus BEFORE scrolling. ScrollSmoother listens for focusin and, if the
         focused element is off-screen, jumps it to "center center" — which
         would override a scroll started first and land the target under the
         fixed header. */
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      ownFocusMove.current = true;
      target.focus({ preventScroll: true });
      ownFocusMove.current = false;

      if (smoother.current) {
        smoother.current.scrollTo(scrollPositionFor(target, offset), smooth);
      } else {
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: smooth ? "smooth" : "auto" });
      }
    };

    const onClick = (event) => {
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = event.target.closest?.('a[href*="#"]');
      if (!link) return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname) return; // let Next route it
      if (!url.hash || url.hash === "#") return;

      const target = document.querySelector(url.hash);
      if (!target) return;

      /* Capture phase + stopPropagation: next/link prevents default on its own
         anchors, which would otherwise make this handler bail, and its soft
         navigation relies on native hash scrolling that ScrollSmoother breaks. */
      event.preventDefault();
      event.stopPropagation();
      history.pushState(null, "", url.hash);
      scrollToTarget(target, true);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  /* Client-side navigation swaps #smooth-content wholesale: every trigger was
     measured against the previous page's height, and the smoother's internal
     position does not follow Next's scroll reset. */
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    smoother.current?.scrollTo(0, false);
    ScrollTrigger.refresh();
  }, [pathname]);

  /* A hash present on first load (e.g. /services/x#enquire) needs to wait for
     triggers and images to settle before it can land accurately. */
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;

    const id = window.setTimeout(() => {
      ScrollTrigger.refresh();
      const offset = headerOffset();
      if (smoother.current) {
        smoother.current.scrollTo(scrollPositionFor(target, offset), false);
      } else {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - offset,
          behavior: "auto",
        });
      }
    }, 120);

    return () => window.clearTimeout(id);
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
