import { site } from "@/lib/site";
import Button from "./Button";
import { PhoneIcon } from "./Icons";
import Reveal from "./motion/Reveal";

export default function CtaBand({
  title = "Grow your space.",
  text = "Tell us how much of your office you want planted. We walk the floor, plan it against your light and layout, and send a proposal with your plan priced out.",
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-band-title">
      <div className="cta-band__leaf" aria-hidden="true" data-lag="0.4" />
      <div className="container">
        <Reveal className="cta-band__inner">
          <h2 id="cta-band-title" className="cta-band__title">
            {title}
          </h2>
          <p className="cta-band__text">{text}</p>
          <div className="btn-group" style={{ justifyContent: "center" }}>
            <Button href="/contact" variant="secondary" size="lg" data-enquiry="cta-band">
              Get a proposal
            </Button>
            <Button href={site.phoneHref} variant="outline" size="lg" className="hide-with-bar">
              <PhoneIcon className="btn__icon" />
              Call {site.phoneDisplay}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
