import Link from "next/link";
import Button from "@/components/Button";
import { services } from "@/lib/services";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import SplitHeading from "@/components/motion/SplitHeading";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="not-found">
      <Reveal className="container">
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <SplitHeading as="h1" style={{ marginBottom: "1rem" }}>Nothing is planted here yet.</SplitHeading>
        <p className="lead" style={{ marginBottom: "2rem" }}>
          The page you asked for has moved or never existed. Try one of these instead.
        </p>
        <div className="btn-group" style={{ marginBottom: "2.5rem" }}>
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="outline">
            Contact us
          </Button>
        </div>
        <Stagger as="ul" className="tags" each={0.05} y={12}>
          {services.map((s) => (
            <li key={s.slug}>
              <Link className="tags__item" href={`/services/${s.slug}`} style={{ display: "inline-block", textDecoration: "none", color: "inherit" }}>
                {s.name}
              </Link>
            </li>
          ))}
        </Stagger>
      </Reveal>
    </section>
  );
}
