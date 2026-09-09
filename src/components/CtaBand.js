import { site } from "@/lib/site";
import Button from "./Button";
import { PhoneIcon } from "./Icons";
import Reveal from "./motion/Reveal";

export default function CtaBand({
  title = "Start with a site visit.",
  text = "A gardener comes to you, measures and listens, and you get a written quote within three working days.",
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
            <Button href="/contact" variant="secondary" size="lg">
              Book a site visit
            </Button>
            <Button href={site.phoneHref} variant="outline" size="lg">
              <PhoneIcon className="btn__icon" />
              Call {site.phoneDisplay}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
