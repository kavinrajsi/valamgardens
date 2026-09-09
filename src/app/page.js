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
import { services, generalFaqs, reasons } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";
import { graph, webPageSchema, faqSchema, servicesListSchema } from "@/lib/schema";

const description =
  "Valam Gardens builds and maintains gardens in Chennai: vertical gardens, landscaping, terrace gardens, maintenance plans, office plant rental and bulk gift plants. Site visit within 48 hours, written quote in 3 days.";

export const metadata = buildMetadata({
  title: site.name,
  description,
  path: "/",
  keywords: ["garden design Chennai", "gardener near me Chennai", "green wall Chennai"],
});

const projects = [
  { id: "1557429287-b2e26467fc2b", alt: "Cottage-style garden with flowering beds in front of a house", caption: "Front garden, independent house" },
  { id: "1558904541-efa843a96f01", alt: "Freshly laid lawn beside a modern building", caption: "Lawn and edging, apartment common area" },
  { id: "1598902108854-10e335adac99", alt: "Shaded garden path with potted plants and roses", caption: "Shade garden, villa backyard" },
  { id: "1591857177580-dc82b9ac4e1e", alt: "Raised timber beds planted with vegetables on a rooftop", caption: "Kitchen garden, terrace" },
];

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
                Gardens that survive Chennai summers.
              </SplitHeading>
              <p className="hero__lead">
                Vertical gardens, landscaping, terrace gardens and maintenance plans, designed for
                this city’s heat and hard water. One team from the first sketch to the monthly visit.
              </p>
              <div className="hero__actions">
                <Button href="/contact" size="lg">
                  Book a site visit
                </Button>
                <Button href={site.phoneHref} variant="outline" size="lg">
                  <PhoneIcon className="btn__icon" />
                  {site.phoneDisplay}
                </Button>
              </div>
              <p className="hero__note">
                Written quote within 3 working days. Or <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">message us on WhatsApp</a>.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <div className="hero__visual">
                <div className="hero__ground" aria-hidden="true" data-speed="1.06" />
                <div className="hero__media">
                  <Image
                    src={unsplash("1585320806297-9794b3e4eeae", 1000, 1333)}
                    alt="Brick garden path lined with clipped hedges and roses, designed and planted by Valam Gardens"
                    fill
                    preload
                    fetchPriority="high"
                    sizes="(min-width: 992px) 45vw, 92vw"
                    data-speed="auto"
                  />
                </div>
                <p className="hero__caption">Founded in Chennai, 2025. Site visit in 48 hours, written quote in 3 days</p>
              </div>
            </div>
          </HeroIntro>
        </div>
      </section>

      <Stagger className="container" select=".trust__item" each={0.06}>
        <TrustStrip />
      </Stagger>

      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <SectionHeading
            id="services-title"
            title="Six things we do well"
            lead="Every service is designed, installed and maintained by the same team, so nothing is lost between contractors."
            row
            action={
              <Link href="/services" className="btn btn--ghost">
                See all services and prices
              </Link>
            }
          />
          <Stagger className="row row--gy-lg">
            {services.map((s) => (
              <div className="col-12 col-sm-6 col-lg-4" key={s.slug}>
                <ServiceCard service={s} />
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="why-title">
        <div className="container">
          <div className="row row--gy-lg row--align-center">
            <Reveal className="col-12 col-lg-5">
              <SplitHeading id="why-title" style={{ marginBottom: "1rem" }}>
                Why homeowners and offices in Chennai call us
              </SplitHeading>
              <p className="lead">
                {site.name} is a Chennai garden company. We plan for 40-degree Mays, salty bore
                water and monsoon drainage, then stay on to keep the garden the way it looked on
                handover day.
              </p>
            </Reveal>
            <Stagger className="col-12 col-lg-7" select=".feature">
              <Features items={reasons} />
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="container">
          <div className="row row--gy-lg">
            <Reveal className="col-12 col-lg-5">
              <SplitHeading id="process-title" style={{ marginBottom: "1rem" }}>
                From first call to finished garden
              </SplitHeading>
              <p className="lead" style={{ marginBottom: "2rem" }}>
                Three steps, from the first call to handover.
              </p>
              <ProcessSteps />
            </Reveal>
            <Pin className="col-12 col-lg-6 offset-lg-1">
              <div className="media media--3x4">
                <Image
                  src={unsplash("1530836369250-ef72a3f5cda8", 900, 1200)}
                  alt="Gardener planting seedlings into a tray of soil"
                  fill
                  sizes="(min-width: 992px) 45vw, 92vw"
                />
              </div>
            </Pin>
          </div>
        </div>
      </section>

      <section className="section section--line-top" aria-labelledby="projects-title">
        <div className="container">
          <SectionHeading
            id="projects-title"
            title="Recent work"
            lead="Front yards, apartment lawns, shaded backyards and rooftops across the city."
          />
          <Stagger className="row row--gy">
            {projects.map((p) => (
              <div className="col-6 col-lg-3" key={p.id}>
                <figure className="gallery">
                  <div className="media media--1x1">
                    <Image src={unsplash(p.id, 700, 700)} alt={p.alt} fill sizes="(min-width: 992px) 22vw, 45vw" data-speed="auto" />
                  </div>
                  <figcaption className="gallery__caption">{p.caption}</figcaption>
                </figure>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="testimonials-title">
        <div className="container">
          <SectionHeading id="testimonials-title" title="What clients say" />
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
                A balcony, a compound wall, a rooftop, an office floor. Send a few details and we
                will call to fix a site visit.
              </p>
            </Reveal>
            <Reveal className="col-12 col-lg-7" delay={0.1}>
              <ContactForm source="home" />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
