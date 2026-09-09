import { site, absoluteUrl } from "./site";
import { services } from "./services";

export const ORG_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;

export function organizationSchema() {
  return {
    "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: absoluteUrl("/logo.svg"),
    image: absoluteUrl("/opengraph-image"),
    description: site.description,
    telephone: site.phone,
    email: site.email,
    foundingDate: site.founded,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank transfer, Credit card",
    address: { "@type": "PostalAddress", ...site.address },
    geo: { "@type": "GeoCoordinates", ...site.geo },
    areaServed: [
      { "@type": "City", name: "Chennai" },
      ...site.areasServed.map((name) => ({ "@type": "Place", name: `${name}, Chennai` })),
    ],
    openingHoursSpecification: site.openingHours,
    sameAs: Object.values(site.social),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        email: site.email,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "ta"],
      },
    ],
    knowsAbout: services.map((s) => s.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Office plant rental and garden services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", "@id": `${absoluteUrl(`/services/${s.slug}`)}#service`, name: s.name },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

export function webPageSchema({ path, title, description, type = "WebPage", breadcrumb }) {
  const url = absoluteUrl(path);
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-IN",
    ...(breadcrumb ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".hero__lead", ".answer"],
    },
  };
}

export function breadcrumbSchema(path, items) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqSchema(path, faqs) {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(service) {
  const url = absoluteUrl(`/services/${service.slug}`);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.summary,
    url,
    image: service.image,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "City", name: "Chennai" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contact"),
      servicePhone: site.phone,
    },
    /* Price is on request across the board, so no priceSpecification is
       emitted. `pricingNote` is prose about how quoting works, not a figure,
       and publishing it as a price would misrepresent it. */
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url,
    },
    termsOfService: absoluteUrl("/terms"),
  };
}

export function servicesListSchema() {
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl("/services")}#list`,
    name: "Office plant rental and garden services in Chennai by Valam Gardens",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/services/${s.slug}`),
      name: s.name,
    })),
  };
}

export function graph(...nodes) {
  return { "@context": "https://schema.org", "@graph": nodes.filter(Boolean) };
}
