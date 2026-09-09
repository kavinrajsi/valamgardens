"use client";

import { useActionState, useEffect, useId, useRef } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import { readAttribution } from "@/lib/attribution";
import { submitContact } from "@/app/actions/contact";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const initialState = { status: "idle", message: "", errors: {} };

export default function ContactForm({ defaultService = "", compact = false, source = "contact" }) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const id = useId();
  /* When this form became visible to a real person. Set in an effect, never
     during render: these pages are statically prerendered, so a render-time
     Date.now() would freeze at build time and the server would end up
     comparing every submission against the last deploy. */
  const readyAt = useRef(0);
  const errors = state.errors || {};
  const submitted = state.status === "ok";

  /* The success block is far shorter than the form. On a service page this
     form sits inside a pinned aside, so the pin end must be re-measured. */
  useEffect(() => {
    if (submitted) ScrollTrigger.refresh();
  }, [submitted]);

  useEffect(() => {
    readyAt.current = Date.now();
  }, []);

  /* Attribution and the elapsed time are read at submit, not render: neither
     exists during SSR, and reading storage in render would mismatch
     hydration. Wrapping the action keeps all four render sites in step. */
  function action(formData) {
    formData.append("attribution", JSON.stringify(readAttribution()));
    formData.append("elapsed", readyAt.current ? String(Date.now() - readyAt.current) : "");
    return formAction(formData);
  }

  if (submitted) {
    return (
      <div className="form__status form__status--ok" role="status">
        <strong>Thanks, we have your details.</strong> We reply the same working day, usually within a
        few hours. Need it faster? Call{" "}
        <a href={site.phoneHref}>{site.phoneDisplay}</a>.
      </div>
    );
  }

  return (
    <form className="form" action={action} noValidate>
      <input type="hidden" name="source" value={source} />
      {/* Two decoys, not one: bots that have learned to skip a field named
          "company" often still fill a field named "website". Hidden off-screen
          rather than with display:none, which many bots ignore. */}
      <div className="form__honey" aria-hidden="true">
        <label htmlFor={`${id}-company`}>Company</label>
        <input id={`${id}-company`} type="text" name="company" tabIndex={-1} autoComplete="off" />
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form__row form__row--2">
        <div className="form__field">
          <label className="form__label" htmlFor={`${id}-name`}>
            Your name
          </label>
          <input
            className="form__input"
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={errors.name ? "true" : undefined}
            aria-describedby={errors.name ? `${id}-name-err` : undefined}
          />
          {errors.name && (
            <span className="form__hint" id={`${id}-name-err`} style={{ color: "var(--color-primary)" }}>
              {errors.name}
            </span>
          )}
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor={`${id}-phone`}>
            Phone or WhatsApp
          </label>
          <input
            className="form__input"
            id={`${id}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91"
            required
            aria-invalid={errors.phone ? "true" : undefined}
            aria-describedby={errors.phone ? `${id}-phone-err` : undefined}
          />
          {errors.phone && (
            <span className="form__hint" id={`${id}-phone-err`} style={{ color: "var(--color-primary)" }}>
              {errors.phone}
            </span>
          )}
        </div>
      </div>

      <div className="form__row form__row--2">
        <div className="form__field">
          <label className="form__label" htmlFor={`${id}-service`}>
            What do you need?
          </label>
          <select className="form__select" id={`${id}-service`} name="service" defaultValue={defaultService}>
            <option value="">Not sure yet</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor={`${id}-area`}>
            Area in Chennai <small>(optional)</small>
          </label>
          <input
            className="form__input"
            id={`${id}-area`}
            name="area"
            type="text"
            autoComplete="address-level2"
            placeholder="Adyar, OMR, Anna Nagar"
          />
        </div>
      </div>

      {!compact && (
        <div className="form__field">
          <label className="form__label" htmlFor={`${id}-email`}>
            Email <small>(optional)</small>
          </label>
          <input className="form__input" id={`${id}-email`} name="email" type="email" autoComplete="email" />
        </div>
      )}

      <div className="form__field">
        <label className="form__label" htmlFor={`${id}-message`}>
          Tell us about the space <small>(optional)</small>
        </label>
        <textarea
          className="form__textarea"
          id={`${id}-message`}
          name="message"
          rows={compact ? 3 : 5}
          placeholder="Balcony, terrace, compound wall, office floor. Rough size helps."
        />
      </div>

      {state.status === "error" && state.message && (
        <div className="form__status form__status--error" role="alert">
          {state.message}
        </div>
      )}

      <button type="submit" className="btn btn--primary btn--lg" disabled={pending}>
        {pending ? "Sending" : "Send enquiry"}
      </button>
      <p className="form__hint">
        We reply the same working day. Your details are used only to contact you about your enquiry.
      </p>
    </form>
  );
}
