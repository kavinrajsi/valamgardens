/* Canonical host. Everything absolute on this site derives from it: canonical
   tags, the sitemap, robots, schema @ids and the llms.txt routes all resolve
   through `site.url` or `absoluteUrl()`. Changing it here changes all of them. */
const url = "https://www.valamgardens.com";

export const site = {
  name: "Valam Gardens",
  legalName: "Valam Gardens",
  domain: "valamgardens.com",
  url,
  /* Share image for every page. Absolute because scrapers do not all resolve
     relative URLs, and several cache by URL. */
  ogImage: `${url}/og-image.png`,
  tagline: "Office plant rental in Chennai, fully managed",
  description:
    "Valam Gardens rents indoor plants to offices across Chennai on a fully managed plan: installation, weekly maintenance and free replacement, with no capital outlay. We also design and build vertical gardens, landscapes, terrace gardens and bulk gift plants.",
  email: "hello@valamgardens.com",
  phone: "+91 9025083535",
  phoneHref: "tel:+919025083535",
  phoneDisplay: "+91 90250 83535",
  whatsappHref:
    "https://wa.me/919025083535?text=Hi%20Valam%20Gardens%2C%20I%27d%20like%20a%20quote%20for%20office%20plant%20rental.",
  address: {
    streetAddress: "Chennai",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600001",
    addressCountry: "IN",
  },
  geo: { latitude: 13.0827, longitude: 80.2707 },
  hours: "Monday to Saturday, 9:00 am to 7:00 pm",
  openingHours: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  areasServed: [
    "Adyar",
    "Anna Nagar",
    "Besant Nagar",
    "ECR",
    "Guindy",
    "Kilpauk",
    "Kotturpuram",
    "Mylapore",
    "Nungambakkam",
    "OMR",
    "Perungudi",
    "Porur",
    "Sholinganallur",
    "T. Nagar",
    "Tambaram",
    "Velachery",
  ],
  social: {
    instagram: "https://www.instagram.com/valamgardens",
    facebook: "https://www.facebook.com/valamgardens",
  },
  founded: "2025",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const policyLinks = [
  { href: "/privacy-policy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of service" },
  { href: "/refund-policy", label: "Refund and cancellation" },
];

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export function unsplash(id, w = 1200, h, extra = "") {
  const size = h ? `w=${w}&h=${h}&fit=crop` : `w=${w}`;
  return `https://images.unsplash.com/photo-${id}?auto=format&${size}&q=75${extra}`;
}
