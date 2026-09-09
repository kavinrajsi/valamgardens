import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TrustStrip from "@/components/TrustStrip";
import Features from "@/components/Features";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import SplitHeading from "@/components/motion/SplitHeading";
import Pin from "@/components/motion/Pin";
import HeroIntro from "@/components/motion/HeroIntro";
import { PhoneIcon } from "@/components/Icons";
import { site, unsplash } from "@/lib/site";
import { services, generalFaqs } from "@/lib/services";
import { audienceSegments, rentalPillars } from "@/lib/rental";
import Plans from "@/components/Plans";
import CompareTable from "@/components/CompareTable";
import { buildMetadata } from "@/lib/seo";
import { graph, webPageSchema, faqSchema, servicesListSchema } from "@/lib/schema";

const description =
  "Rent indoor plants for your Chennai office on a fully managed plan: installation, weekly maintenance and free replacement of any plant that dies, with no capital outlay. Monthly, quarterly and annual plans.";

export const metadata = buildMetadata({
  title: site.name,
  description,
  path: "/",
  keywords: ["office plant rental Chennai", "indoor plants for office Chennai", "plant rental services Chennai"],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/", title: `${site.name} | ${site.tagline}`, description }),
          faqSchema("/", generalFaqs),
          servicesListSchema()
        )}
      />

      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <HeroIntro className="row hero__grid">
            <div className="col-12 col-lg-6 hero__copy">
              <SplitHeading as="h1" id="hero-title" className="hero__title">
                Grow your space.
              </SplitHeading>
              <p className="hero__lead">
                Office plant rental in Chennai, fully managed. We install the plants, maintain them
                every week and replace anything that dies, free. You never buy a plant, and nobody
                on your team has to water one.
              </p>
              <div className="hero__actions">
                <Button href="/contact" size="lg">
                  Get a proposal
                </Button>
                <Button href={site.phoneHref} variant="outline" size="lg">
                  <PhoneIcon className="btn__icon" />
                  {site.phoneDisplay}
                </Button>
              </div>
              <p className="hero__note">
                Monthly, quarterly and annual plans, priced after a walk-through. Or{" "}
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">message us on WhatsApp</a>.
              </p>
              <ul className="audience" aria-label="Who we plant for">
                {audienceSegments.secondary.map((item) => (
                  <li className="audience__item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-lg-6">
              <div className="hero__visual">
                <div className="hero__ground" aria-hidden="true" data-speed="1.06" />
                <div className="hero__media">
                  <Image
                    src={unsplash("1592150621744-aca64f48394a", 1000, 1333)}
                    alt="Indoor plants in white planters lit by pendant lights in an office interior"
                    fill
                    preload
                    fetchPriority="high"
                    sizes="(min-width: 992px) 45vw, 92vw"
                    data-speed="auto"
                  />
                </div>
                <p className="hero__caption">Founded in Chennai, 2025. Plants installed, maintained weekly and replaced free</p>
              </div>
            </div>
          </HeroIntro>
        </div>
      </section>

      <Stagger className="container" select=".trust__item" each={0.06}>
        <TrustStrip />
      </Stagger>

      <section className="section" aria-labelledby="compare-title">
        <div className="container">
          <SectionHeading
            id="compare-title"
            title="Why rent instead of buy"
            lead="Owning office plants means capital, upkeep and the cost of replacing whatever dies. Renting moves all three onto us."
            row
            action={
              <Link href="/services/plant-rental" className="btn btn--ghost">
                How rental works
              </Link>
            }
          />
          <Reveal>
            <CompareTable />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="included-title">
        <div className="container">
          <div className="row row--gy-lg row--align-center">
            <Reveal className="col-12 col-lg-4">
              <SplitHeading id="included-title" style={{ marginBottom: "1rem" }}>
                What every plan covers
              </SplitHeading>
              <p className="lead">
                One team handles the whole thing, from the first walk-through to the plant we swap
                out next Tuesday. There is nothing for your facilities team to schedule.
              </p>
            </Reveal>
            <Stagger className="col-12 col-lg-8" select=".feature">
              <Features items={rentalPillars} />
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="plans-title">
        <div className="container">
          <SectionHeading
            id="plans-title"
            title="Plans"
            lead="Pick the cadence that suits your office. Every plan includes installation, weekly maintenance and free replacement — the difference is the billing cycle and how far the styling and account support go."
          />
          <Stagger select=".plan">
            <Plans />
          </Stagger>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="container">
          <div className="row row--gy-lg">
            <Reveal className="col-12 col-lg-5">
              <SplitHeading id="process-title" style={{ marginBottom: "1rem" }}>
                From first call to planted floor
              </SplitHeading>
              <p className="lead" style={{ marginBottom: "2rem" }}>
                Three steps, and the third one never really ends.
              </p>
              <ProcessSteps />
            </Reveal>
            <Pin className="col-12 col-lg-6 offset-lg-1">
              <div className="media media--3x4">
                <Image
                  src={unsplash("1530836369250-ef72a3f5cda8", 900, 1200)}
                  alt="Hands potting a young plant into fresh soil"
                  fill
                  sizes="(min-width: 992px) 45vw, 92vw"
                />
              </div>
            </Pin>
          </div>
        </div>
      </section>

      <section className="section section--line-top" aria-labelledby="beyond-title">
        <div className="container">
          <SectionHeading
            id="beyond-title"
            title="Beyond rental"
            lead="The same team designs and builds green walls, landscapes, terrace gardens and maintenance plans — for offices and campuses, and for homes across Chennai."
            row
            action={
              <Link href="/services" className="btn btn--ghost">
                See all services and prices
              </Link>
            }
          />
          <Stagger className="row row--gy-lg">
            {services
              .filter((s) => s.slug !== "plant-rental")
              .map((s) => (
                <div className="col-12 col-sm-6 col-lg-4" key={s.slug}>
                  <ServiceCard service={s} />
                </div>
              ))}
          </Stagger>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="testimonials-title">
        <div className="container">
          <SectionHeading id="testimonials-title" title="What clients say" lead="Placeholder quotes pending real client sign-off." />
          <Stagger select=".quote">
            <Testimonials />
          </Stagger>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="container">
          <div className="row row--gy-lg">
            <Reveal className="col-12 col-lg-4">
              <SplitHeading id="faq-title" style={{ marginBottom: "1rem" }}>
                Questions we hear every week
              </SplitHeading>
              <p className="lead">
                Anything else? Call <a href={site.phoneHref}>{site.phoneDisplay}</a> or email{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </Reveal>
            <Stagger className="col-12 col-lg-8" select=".faq__item">
              <Faq items={generalFaqs} />
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="home-form-title">
        <div className="container">
          <div className="row row--gy-lg">
            <Reveal className="col-12 col-lg-5">
              <SplitHeading id="home-form-title" style={{ marginBottom: "1rem" }}>
                Tell us about your space
              </SplitHeading>
              <p className="lead">
                One floor, a reception, a whole campus — or a home. Send a few details and we will
                call the same working day to arrange a walk-through.
              </p>
            </Reveal>
            <Reveal className="col-12 col-lg-7" delay={0.1}>
              <ContactForm source="home" />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand title="Ready to plant your office?" />
    </>
  );
}
