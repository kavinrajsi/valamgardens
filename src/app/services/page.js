import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import SplitHeading from "@/components/motion/SplitHeading";
import Pin from "@/components/motion/Pin";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import Checklist from "@/components/Checklist";
import ProcessSteps from "@/components/ProcessSteps";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { services, generalFaqs, getService } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { graph, webPageSchema, breadcrumbSchema, servicesListSchema, faqSchema } from "@/lib/schema";

const title = "Office plant rental and garden services in Chennai";
const description =
  "Fully managed office plant rental in Chennai, plus vertical gardens, landscaping, garden maintenance, terrace gardening and bulk gift plants. What each service includes and how to get a proposal.";

export const metadata = buildMetadata({ title, description, path: "/services" });

const flagship = getService("plant-rental");
const others = services.filter((s) => s.slug !== flagship.slug);

const crumbs = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
];

const picker = [
  { need: "I want plants in my office without owning or watering them", pick: "plant-rental" },
  { need: "I have planted areas that need someone on a regular schedule", pick: "garden-maintenance" },
  { need: "I have a blank wall or lobby and no floor space", pick: "vertical-garden" },
  { need: "I have grounds, a yard or a lawn to design or redo", pick: "landscaping" },
  { need: "I have an empty terrace and want to use it", pick: "terrace-gardening" },
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
                Rental first. Everything else too.
              </SplitHeading>
              <p className="page-hero__lead">
                Rental is where most clients start. Everything here is installed and maintained by
                {" "}{site.name} staff, not subcontracted.
              </p>
              <div className="btn-group page-hero__actions">
                <Button href="/contact" size="lg" data-enquiry="services-hero">
                  Get a proposal
                </Button>
                <Button href={site.phoneHref} variant="outline" size="lg" className="hide-with-bar">
                  Call {site.phoneDisplay}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--line-top" aria-labelledby="flagship-title">
        <div className="container">
          <div className="row row--gy-lg row--align-center">
            <Reveal className="col-12 col-lg-6">
              <p className="eyebrow">Our flagship service</p>
              <SplitHeading as="h2" id="flagship-title" style={{ marginBottom: "1rem" }}>
                {flagship.name}
              </SplitHeading>
              <p className="lead" style={{ marginBottom: "1.5rem" }}>
                {flagship.summary}
              </p>
              <Checklist items={flagship.included.slice(0, 4)} />
              <div className="btn-group" style={{ marginTop: "2rem" }}>
                <Button href={`/services/${flagship.slug}`}>How rental works</Button>
                <Button href="/contact" variant="outline" data-enquiry="services-flagship">
                  Get a proposal
                </Button>
              </div>
            </Reveal>
            <Reveal className="col-12 col-lg-6" delay={0.1}>
              <div className="media media--4x3">
                <Image
                  src={flagship.image}
                  alt={flagship.imageAlt}
                  fill
                  sizes="(min-width: 992px) 45vw, 92vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="others-title">
        <div className="container">
          <SectionHeading
            id="others-title"
            title="The rest of what we do"
            lead="Design and build work for offices, campuses and homes across Chennai."
          />
          <Stagger className="row row--gy-lg">
            {others.map((s) => (
              <div className="col-12 col-sm-6 col-lg-4" key={s.slug}>
                <ServiceCard service={s} headingLevel="h3" />
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
              <SplitHeading id="services-process-title">How every engagement runs</SplitHeading>
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
