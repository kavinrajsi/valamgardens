import Image from "next/image";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import SplitHeading from "@/components/motion/SplitHeading";
import Pin from "@/components/motion/Pin";
import StickyAside from "@/components/motion/StickyAside";
import Checklist from "@/components/Checklist";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import Features from "@/components/Features";
import Plans from "@/components/Plans";
import CompareTable from "@/components/CompareTable";
import SectionHeading from "@/components/SectionHeading";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { PhoneIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import { services, getService, getRelated, reasons } from "@/lib/services";
import { plantBenefits } from "@/lib/rental";
import { buildMetadata } from "@/lib/seo";
import { graph, webPageSchema, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: `${service.name} in Chennai`,
    description: `${service.summary} ${service.duration}.`,
    path: `/services/${service.slug}`,
    image: service.image,
    keywords: [`${service.name.toLowerCase()} Chennai`, `${service.name.toLowerCase()} cost Chennai`],
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const crumbs = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: path, label: service.name },
  ];
  const related = getRelated(service);
  const title = `${service.name} in Chennai`;
  /* The rental page carries the plan tiers, the buy-vs-rent argument and the
     case for plants at work. Every other service page is unchanged. */
  const isRental = service.slug === "plant-rental";

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, title, description: service.summary, breadcrumb: true }),
          breadcrumbSchema(path, crumbs),
          serviceSchema(service),
          faqSchema(path, service.faqs)
        )}
      />

      <section className="page-hero" aria-labelledby="service-title">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <div className="row row--gy-lg row--align-center">
            <Reveal className="col-12 col-lg-6">
              <SplitHeading as="h1" id="service-title" className="page-hero__title">
                <span className="service-hero__line">{service.heroLine}</span>
                {service.name} in Chennai
              </SplitHeading>
              <p className="page-hero__lead answer">{service.summary}</p>
              <div className="btn-group page-hero__actions">
                <Button href="#enquire" size="lg">
                  Get a quote
                </Button>
                <Button href={site.phoneHref} variant="outline" size="lg" className="hide-with-bar">
                  <PhoneIcon className="btn__icon" />
                  {site.phoneDisplay}
                </Button>
              </div>
            </Reveal>
            <Reveal className="col-12 col-lg-5 offset-lg-1 page-hero__media" delay={0.12}>
              <div className="media media--arch media--3x4">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  preload
                  fetchPriority="high"
                  sizes="(min-width: 992px) 40vw, 92vw"
                  data-speed="auto"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--line-top">
        <div className="container">
          <div className="row row--gy-lg">
            <Reveal className="col-12 col-lg-7">
              <div className="prose">
                <h2>About this service</h2>
                <p className="answer">{service.intro}</p>

                <h3>What is included</h3>
                <Checklist items={service.included} />

                <h3>Who it suits</h3>
                <Checklist items={service.forWhom} />

                <h3>What it costs</h3>
                <p className="answer">{service.pricingNote}</p>
              </div>
            </Reveal>
            <div className="col-12 col-lg-4 offset-lg-1">
              <StickyAside className="aside-card" id="enquire">
                <h2 className="aside-card__title">Get a quote</h2>
                <p className="aside-card__text">
                  Share your number and we call back the same working day to arrange a walk-through.
                </p>
                <ContactForm defaultService={service.name} compact source={`service:${service.slug}`} />
              </StickyAside>
            </div>
          </div>
        </div>
      </section>

      {isRental && (
        <section className="section" aria-labelledby="rental-compare-title">
          <div className="container">
            <SectionHeading
              id="rental-compare-title"
              title="Buying against renting"
              lead="The same plants, on very different terms."
            />
            <Reveal>
              <CompareTable />
            </Reveal>
          </div>
        </section>
      )}

      {isRental && (
        <section className="section section--line-top" aria-labelledby="rental-plans-title">
          <div className="container">
            <SectionHeading
              id="rental-plans-title"
              title="Plans"
              lead="Every plan includes installation, weekly maintenance and free replacement. The cycle you pick decides the rate and how far the styling and account support go."
            />
            <Stagger select=".plan">
              <Plans />
            </Stagger>
          </div>
        </section>
      )}

      {isRental && (
        <section className="section" aria-labelledby="rental-benefits-title">
          <div className="container">
            <SectionHeading
              id="rental-benefits-title"
              title="Why plants belong at work"
              lead="Offices are sealed, air-conditioned and lit from above. Plants are one of the few things that make that bearable."
            />
            <Stagger select=".feature">
              <Features items={plantBenefits} />
            </Stagger>
          </div>
        </section>
      )}

      <section className="section section--soft" aria-labelledby="service-why-title">
        <div className="container">
          <div className="row row--gy-lg">
            <Reveal className="col-12 col-lg-4">
              <SplitHeading id="service-why-title">Why Valam for {service.name.toLowerCase()}</SplitHeading>
            </Reveal>
            <Stagger className="col-12 col-lg-8" select=".feature">
              <Features items={reasons} />
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="service-process-title">
        <div className="container">
          <div className="row row--gy-lg">
            <Pin className="col-12 col-lg-4">
              <SplitHeading id="service-process-title">How it works</SplitHeading>
            </Pin>
            <Stagger className="col-12 col-lg-8" select=".step">
              <ProcessSteps />
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="service-faq-title">
        <div className="container">
          <div className="row row--gy-lg">
            <Reveal className="col-12 col-lg-4">
              <SplitHeading id="service-faq-title">{service.name} questions</SplitHeading>
            </Reveal>
            <Stagger className="col-12 col-lg-8" select=".faq__item">
              <Faq items={service.faqs} />
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="related-title">
        <div className="container">
          <SplitHeading id="related-title" style={{ marginBottom: "2rem" }}>
            Often combined with
          </SplitHeading>
          <Stagger className="row row--gy-lg">
            {related.map((s) => (
              <div className="col-12 col-sm-6 col-lg-4" key={s.slug}>
                <ServiceCard service={s} />
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand title={isRental ? "Ready to plant your office?" : `Ready for ${service.name.toLowerCase()}?`} />
    </>
  );
}
