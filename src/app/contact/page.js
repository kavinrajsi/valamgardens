import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import SplitHeading from "@/components/motion/SplitHeading";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { generalFaqs } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { graph, webPageSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

const title = "Contact";
const description = `Get a proposal for office plant rental in Chennai. Call or WhatsApp ${site.phoneDisplay}, email ${site.email}, or send the form. We reply the same working day.`;

export const metadata = buildMetadata({ title, description, path: "/contact" });

const crumbs = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/contact", title, description, type: "ContactPage", breadcrumb: true }),
          breadcrumbSchema("/contact", crumbs)
        )}
      />

      <section className="page-hero" aria-labelledby="contact-title">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <div className="row">
            <Reveal className="col-12 col-lg-8">
              <SplitHeading as="h1" id="contact-title" className="page-hero__title page-hero__title--display">
                Let’s look at your space.
              </SplitHeading>
              <p className="page-hero__lead">
                Tell us how much of your office you want planted — one floor, a reception, a whole
                campus — and we will arrange a walk-through and send a proposal with your plan
                priced out. Home gardens are welcome here too.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--line-top">
        <div className="container">
          <div className="row row--gy-lg">
            <Reveal className="col-12 col-lg-7">
              <h2 className="visually-hidden">Enquiry form</h2>
              <ContactForm source="contact" />
            </Reveal>
            <Stagger className="col-12 col-lg-4 offset-lg-1" select=".contact-list__item">
              <div className="contact-list">
                <div className="contact-list__item">
                  <p className="contact-list__label">Call or WhatsApp</p>
                  <a className="contact-list__value" href={site.phoneHref}>
                    {site.phoneDisplay}
                  </a>
                </div>
                <div className="contact-list__item">
                  <p className="contact-list__label">Email</p>
                  <a className="contact-list__value" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </div>
                <div className="contact-list__item">
                  <p className="contact-list__label">Hours</p>
                  <p className="contact-list__value">{site.hours}</p>
                </div>
                <div className="contact-list__item">
                  <p className="contact-list__label">Service area</p>
                  <p className="contact-list__value">Chennai and nearby districts</p>
                  <p className="form__hint" style={{ marginTop: "0.5rem" }}>
                    {site.areasServed.slice(0, 8).join(", ")} and every other neighbourhood in the
                    city.
                  </p>
                </div>
                <div className="contact-list__item">
                  <a
                    className="btn btn--secondary btn--block"
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
              </div>
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="contact-faq-title">
        <div className="container">
          <div className="row row--gy-lg">
            <Reveal className="col-12 col-lg-4">
              <SplitHeading id="contact-faq-title">Before you call</SplitHeading>
            </Reveal>
            <Stagger className="col-12 col-lg-8" select=".faq__item">
              <Faq items={generalFaqs} />
            </Stagger>
          </div>
        </div>
      </section>
    </>
  );
}
