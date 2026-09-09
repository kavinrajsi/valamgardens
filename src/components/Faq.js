"use client";

import { useId, useState } from "react";
import { ScrollTrigger } from "@/lib/gsap";

export default function Faq({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = open === i;
        const qId = `${baseId}-q-${i}`;
        const aId = `${baseId}-a-${i}`;
        return (
          <div className="faq__item" key={item.q}>
            <h3>
              <button
                type="button"
                id={qId}
                className="faq__question"
                aria-expanded={isOpen}
                aria-controls={aId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{item.q}</span>
                <span className="faq__icon" />
              </button>
            </h3>
            <div
              id={aId}
              role="region"
              aria-labelledby={qId}
              className={`faq__answer${isOpen ? " faq__answer--open" : ""}`}
              /* Opening an item changes document height, which moves every
                 trigger and pin below it. */
              onTransitionEnd={() => ScrollTrigger.refresh()}
            >
              <div className="faq__answer-inner">
                <p className="answer">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
