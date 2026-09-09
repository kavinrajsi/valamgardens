import Link from "next/link";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import SplitHeading from "@/components/motion/SplitHeading";
import Pin from "@/components/motion/Pin";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { services, generalFaqs } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { graph, webPageSchema, breadcrumbSchema, servicesListSchema, faqSchema } from "@/lib/schema";

const title = "Garden services in Chennai";
const description =
  "Vertical gardens, landscaping, garden maintenance, terrace gardening, plant rental and bulk gift plants in Chennai. Indicative prices, what is included and how to book a site visit.";

export const metadata = buildMetadata({ title, description, path: "/services" });

const crumbs = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
];

const picker = [
  { need: "I have a blank wall or balcony and no floor space", pick: "vertical-garden" },
  { need: "I have a plot, yard or lawn to design or redo", pick: "landscaping" },
  { need: "I have a garden that needs regular care", pick: "garden-maintenance" },
  { need: "I have an empty terrace and want to grow food", pick: "terrace-gardening" },
  { need: "I want plants in my office without owning them", pick: "plant-rental" },
  { need: "I need 50 or more plants as gifts for an event", pick: "gift-plants" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/services", title, description, type: "CollectionPage", breadcrumb: true }),
          breadcrumbSchema("/services", crumbs),
          servicesListSchema(),
          faqSchema("/services", generalFaqs)
        )}
      />

      <section className="page-hero" aria-labelledby="services-title">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <div className="row">
            <Reveal className="col-12 col-lg-8">
              <SplitHeading as="h1" id="services-title" className="page-hero__title page-hero__title--display">
                Six services. One team.
              </SplitHeading>
              <p className="page-hero__lead">
                Everything below is designed, installed and maintained by {site.name} staff, not
                subcontracted. Prices are indicative; every job gets a written quote after a site
                visit.
              </p>
              <div className="btn-group page-hero__actions">
                <Button href="/contact" size="lg">
                  Book a site visit
                </Button>
                <Button href={site.phoneHref} variant="outline" size="lg">
                  Call {site.phoneDisplay}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--line-top" aria-label="Service list">
        <div className="container">
          <Stagger className="row row--gy-lg">
            {services.map((s) => (
              <div className="col-12 col-sm-6 col-lg-4" key={s.slug}>
                <ServiceCard service={s} headingLevel="h2" />
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="picker-title">
        <div className="container">
          <div className="row row--gy-lg">
            <Reveal className="col-12 col-lg-4">
              <SplitHeading id="picker-title" style={{ marginBottom: "1rem" }}>
                Not sure which one you need?
              </SplitHeading>
              <p className="lead">Find your situation. Or just call and describe the space; we will tell you.</p>
            </Reveal>
            <Stagger className="col-12 col-lg-8" select=".faq__item">
              <ul className="faq">
                {picker.map((row) => {
                  const s = services.find((x) => x.slug === row.pick);
                  return (
                    <li className="faq__item" key={row.pick}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="faq__question"
                        style={{ textDecoration: "none" }}
                      >
                        <span>
                          <span style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "var(--text-sm)", color: "var(--color-ink-70)", marginBottom: "0.2rem" }}>
                            {row.need}
                          </span>
                          {s.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="services-process-title">
        <div className="container">
          <div className="row row--gy-lg">
            <Pin className="col-12 col-lg-4">
              <SplitHeading id="services-process-title">How every project runs</SplitHeading>
            </Pin>
            <Stagger className="col-12 col-lg-8" select=".step">
              <ProcessSteps />
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="services-faq-title">
        <div className="container">
          <div className="row row--gy-lg">
            <Reveal className="col-12 col-lg-4">
              <SplitHeading id="services-faq-title">Common questions</SplitHeading>
            </Reveal>
            <Stagger className="col-12 col-lg-8" select=".faq__item">
              <Faq items={generalFaqs} />
            </Stagger>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
