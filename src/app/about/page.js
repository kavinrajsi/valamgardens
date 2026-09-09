import Image from "next/image";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import SplitHeading from "@/components/motion/SplitHeading";
import Pin from "@/components/motion/Pin";
import CountUp from "@/components/motion/CountUp";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { site, unsplash } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { graph, webPageSchema, breadcrumbSchema } from "@/lib/schema";

const title = "About";
const description =
  "Valam Gardens is a Chennai garden design, installation and maintenance company founded in 2025. Meet the team behind our vertical gardens, landscapes, terrace gardens and office plant plans.";

export const metadata = buildMetadata({ title, description, path: "/about" });

const values = [
  {
    title: "Plants first, then everything else",
    body: "We choose species that live in Chennai's climate before we choose pots, paving or lights. A garden that survives is the only garden worth paying for.",
  },
  {
    title: "Honest about what things cost",
    body: "Written estimates before work starts, itemised so you can trim scope. No surprise additions on the final bill.",
  },
  {
    title: "Still there after handover",
    body: "Most of our clients keep us on a maintenance plan. We would rather build fewer gardens and keep them all looking good.",
  },
];

const crumbs = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/about", title, description, type: "AboutPage", breadcrumb: true }),
          breadcrumbSchema("/about", crumbs)
        )}
      />

      <section className="page-hero" aria-labelledby="about-title">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <div className="row row--gy-lg row--align-center">
            <Reveal className="col-12 col-lg-6">
              <SplitHeading as="h1" id="about-title" className="page-hero__title page-hero__title--display">
                Grown in Chennai, for Chennai.
              </SplitHeading>
              <p className="page-hero__lead">
                {site.name} started in 2025 with one gardener, a van and a conviction: gardens in
                this city fail because they are designed for somewhere else. We design, build and
                look after gardens across Chennai with small-team attention, and we stay on after
                handover.
              </p>
              <div className="btn-group page-hero__actions">
                <Button href="/contact" size="lg">
                  Book a site visit
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  See our services
                </Button>
              </div>
            </Reveal>
            <Reveal className="col-12 col-lg-5 offset-lg-1 page-hero__media" delay={0.12}>
              <div className="media media--arch media--3x4">
                <Image
                  src={unsplash("1492496913980-501348b61469", 900, 1200)}
                  alt="Hands holding dark garden soil"
                  fill
                  preload
                  sizes="(min-width: 992px) 40vw, 92vw"
                  data-speed="auto"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tight section--line-top">
        <CountUp className="container">
          <Stagger select=".stat">
            <Stats />
          </Stagger>
        </CountUp>
      </section>

      <section className="section section--soft" aria-labelledby="story-title">
        <div className="container">
          <div className="row row--gy-lg">
            <Reveal className="col-12 col-lg-5">
              <SplitHeading id="story-title">What we believe about gardens here</SplitHeading>
            </Reveal>
            <Stagger className="col-12 col-lg-7 prose" select="p">
              <p className="answer">
                Chennai is hot for eight months, wet for two and humid all year. Bore water is
                hard, soil is often clay or builder’s fill, and terraces bake. A garden designed
                from a catalogue will look wonderful in February and be gone by June.
              </p>
              <p>
                So we start with the site, not the mood board. Which walls get afternoon sun. Where
                water pools after rain. How far the nearest tap is. The plant list follows: hardy
                natives and proven exotics, mulched beds, drip lines on timers. Then the design
                brings in the paths, seating and lighting that make the garden a place you actually
                use.
              </p>
              <p>
                Most of our work is residential: villas, independent houses and apartment
                associations. The rest is offices, cafés and schools that want green without a
                gardener on payroll, through our plant rental and maintenance plans.
              </p>
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <div className="row row--gy-lg">
            <Reveal className="col-12 col-lg-4">
              <SplitHeading id="values-title">How we work</SplitHeading>
            </Reveal>
            <Stagger className="col-12 col-lg-8" select=".feature">
              <Features items={values} />
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="area-title">
        <div className="container">
          <div className="row row--gy-lg row--align-center">
            <Reveal className="col-12 col-lg-5">
              <SplitHeading id="area-title" style={{ marginBottom: "1rem" }}>
                Where we work
              </SplitHeading>
              <p className="lead" style={{ marginBottom: "1.5rem" }}>
                All of Chennai, plus Kanchipuram, Chengalpattu and Tiruvallur districts for
                farmhouses and larger sites.
              </p>
              <ul className="tags" aria-label="Neighbourhoods served">
                {site.areasServed.map((a) => (
                  <li className="tags__item" key={a}>
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="col-12 col-lg-6 offset-lg-1" delay={0.1}>
              <div className="media media--4x3">
                <Image
                  src={unsplash("1598902108854-10e335adac99", 1000, 750)}
                  alt="Shaded garden with brick path, roses and potted plants"
                  fill
                  sizes="(min-width: 992px) 45vw, 92vw"
                  data-speed="auto"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="about-process-title">
        <div className="container">
          <div className="row row--gy-lg">
            <Pin className="col-12 col-lg-4">
              <SplitHeading id="about-process-title">Working with us</SplitHeading>
            </Pin>
            <Stagger className="col-12 col-lg-8" select=".step">
              <ProcessSteps />
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="about-testimonials-title">
        <div className="container">
          <h2 id="about-testimonials-title" className="visually-hidden">
            Client testimonials
          </h2>
          <Stagger select=".quote">
            <Testimonials />
          </Stagger>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
