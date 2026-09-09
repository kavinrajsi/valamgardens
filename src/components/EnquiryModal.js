"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ScrollSmoother } from "@/lib/gsap";
import ContactForm from "./ContactForm";

/**
 * The enquiry form as a modal, opened by any link carrying `data-enquiry`.
 *
 * Mounted once in layout.js alongside the other fixed chrome, OUTSIDE the
 * smoother. A native <dialog> is used deliberately: showModal() gives the
 * focus trap, Escape, inertness of the page behind and top-layer painting for
 * free, and the top layer escapes ScrollSmoother's transform, which a plain
 * fixed-position overlay inside #smooth-content would not.
 *
 * Progressive enhancement: the triggers stay real links to /contact. If this
 * component never runs, every one of them still navigates to the contact page.
 */
export default function EnquiryModal() {
  const ref = useRef(null);
  const [source, setSource] = useState("modal");
  /* Remounts ContactForm on each open, so a previous submission's success
     state does not greet the next person who opens it. */
  const [instance, setInstance] = useState(0);
  const pathname = usePathname();

  const close = useCallback(() => ref.current?.close(), []);

  /* Intercept on the capture phase: next/link calls preventDefault on its own
     anchors, so a bubble-phase listener would never see these clicks. */
  useEffect(() => {
    const onClick = (e) => {
      const trigger = e.target.closest?.("a[data-enquiry], button[data-enquiry]");
      if (!trigger) return;
      /* Let modified clicks do what the user asked: new tab, download, etc. */
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      const dialog = ref.current;
      if (!dialog || typeof dialog.showModal !== "function") return;

      e.preventDefault();
      e.stopPropagation();
      setSource(trigger.dataset.enquiry || "modal");
      setInstance((n) => n + 1);
      dialog.showModal();
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  /* Close on navigation, so a route change never leaves the dialog stranded. */
  useEffect(() => {
    ref.current?.close();
  }, [pathname]);

  /* Hold the page still while the dialog is up. ScrollSmoother scrolls by
     transform and ignores overflow, so it has to be paused; without a smoother
     (reduced motion, or before it initialises) overflow is the lever instead. */
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    const lock = () => {
      const smoother = ScrollSmoother.get();
      if (smoother) smoother.paused(true);
      else document.documentElement.style.overflow = "hidden";
    };
    const unlock = () => {
      const smoother = ScrollSmoother.get();
      if (smoother) smoother.paused(false);
      else document.documentElement.style.overflow = "";
    };

    /* `close` fires for Escape and for the backdrop-click path below alike. */
    dialog.addEventListener("close", unlock);
    const observer = new MutationObserver(() => (dialog.open ? lock() : unlock()));
    observer.observe(dialog, { attributes: true, attributeFilter: ["open"] });

    return () => {
      dialog.removeEventListener("close", unlock);
      observer.disconnect();
      unlock();
    };
  }, []);

  /* A dialog's backdrop is part of the dialog element, so a click landing on
     the element itself rather than on its contents is a backdrop click. */
  const onDialogClick = (e) => {
    if (e.target === ref.current) close();
  };

  return (
    <dialog ref={ref} className="enquiry" aria-labelledby="enquiry-title" onClick={onDialogClick}>
      <div className="enquiry__inner">
        <span className="enquiry__grabber" aria-hidden="true" />
        <button type="button" className="enquiry__close" onClick={close} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden="true" focusable="false">
            <path d="M6 6 18 18M18 6 6 18" />
          </svg>
        </button>
        <h2 id="enquiry-title" className="enquiry__title">Get a proposal</h2>
        <p className="enquiry__lead">
          Tell us how much of your space you want planted. We reply the same working day.
        </p>
        <ContactForm key={instance} compact source={source} />
      </div>
    </dialog>
  );
}
