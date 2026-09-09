import { site } from "./site";

export function buildMetadata({ title, description, path = "/", type = "website", keywords = [] }) {
  const fullTitle = path === "/" ? `${site.name} | ${site.tagline}` : `${title} | ${site.name}`;
  return {
    title: { absolute: fullTitle },
    description,
    keywords: [
      ...keywords,
      "office plant rental Chennai",
      "indoor plant rental Chennai",
      "corporate plant rental Chennai",
      "office plants Chennai",
      "plant maintenance service Chennai",
      "landscaping Chennai",
    ],
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: site.name,
      title: fullTitle,
      description,
      locale: "en_IN",
      images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [site.ogImage],
    },
  };
}
