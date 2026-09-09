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
  "Valam Gardens rents and maintains indoor plants for offices across Chennai, and designs and builds gardens. Founded in 2025. Valam is Tamil for to thrive — that is the whole idea.";

export const metadata = buildMetadata({ title, description, path: "/about" });

const values = [
  {
    title: "Thriving, not just installed",
    body: "Valam is Tamil for to thrive. A plant that arrives beautiful and dies in a month has failed, so we are judged on how the space looks in month six, not on delivery day.",
  },
  {
    title: "The upkeep is ours, not yours",
    body: "Nobody on your team should be watering anything. We keep the plants ours, visit every week and replace what fails at our cost, because that is the only version of this that actually works.",
  },
  {
    title: "Honest about what things cost",
    body: "Plans are quoted after we have seen the space, itemised so you can trim scope. No surprise additions, and no price that assumes an office we have not walked.",
  },
  {
    title: "Styled for the room it is in",
    body: "A bank branch, a start-up floor and a hospital lobby need three different answers. We choose species and planters for the space and the brand, not from a standing catalogue.",
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
                Valam means to thrive.
              </SplitHeading>
              <p className="page-hero__lead">
                Every office wants plants. Almost none wants to own them. So since 2025 we have
                rented them instead — installed, maintained, replaced.
              </p>
              <div className="btn-group page-hero__actions">
                <Button href="/contact" size="lg">
                  Get a proposal
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
              <SplitHeading id="story-title">Why we rent instead of sell</SplitHeading>
            </Reveal>
            <Stagger className="col-12 col-lg-7 prose" select="p">
              <p className="answer">
                We kept seeing the same thing in Chennai offices. Plants arrive for a launch or a
                refit, look wonderful for six weeks, and then somebody goes on leave. By the third
                month half of them are brown, and the company has paid full price for every one.
              </p>
              <p>
                Selling plants to an office puts the risk in the wrong place. Renting them puts it
                back on us. The plants stay ours, so we visit every week, and when one declines we
                swap it at our cost rather than sending an invoice. There is no capital outlay, no
                depreciating asset on your books and nothing for your facilities team to schedule.
              </p>
              <p>
                Everything else we do follows the same logic. Vertical gardens, landscapes, terrace
                gardens and maintenance plans, for offices and campuses and for homes across the
                city — planned around Chennai’s heat, hard water and monsoon drainage, then kept
                that way. Valam is Tamil for to thrive, which is the part most plant companies
                leave to you.
              </p>
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <div className="row row--gy-lg">
            <Reveal className="col-12 col-lg-4">
              <SplitHeading id="values-title">What we stand for</SplitHeading>
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
