import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import SplitHeading from "@/components/motion/SplitHeading";
import { graph, webPageSchema, breadcrumbSchema } from "@/lib/schema";

export default function PolicyPage({ path, title, description, updated, children }) {
  const crumbs = [
    { href: "/", label: "Home" },
    { href: path, label: title },
  ];
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path, title, description, breadcrumb: true }), breadcrumbSchema(path, crumbs))} />
      <section className="page-hero">
        <Reveal className="container">
          <Breadcrumbs items={crumbs} />
          <SplitHeading as="h1" className="page-hero__title">{title}</SplitHeading>
          <p className="policy__updated">Last updated {updated}</p>
        </Reveal>
      </section>
      <section className="section section--tight section--line-top">
        <div className="container">
          <Stagger className="policy" each={0.05} y={16}>
            {children}
          </Stagger>
        </div>
      </section>
    </>
  );
}
