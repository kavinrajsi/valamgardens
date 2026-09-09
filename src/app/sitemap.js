import { absoluteUrl } from "@/lib/site";
import { services } from "@/lib/services";

export default function sitemap() {
  const lastModified = new Date("2026-09-08");
  const statics = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
    { path: "/refund-policy", priority: 0.2, changeFrequency: "yearly" },
  ];

  return [
    ...statics.map((s) => ({ url: absoluteUrl(s.path), lastModified, changeFrequency: s.changeFrequency, priority: s.priority })),
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified,
      changeFrequency: "monthly",
      /* Plant rental is the flagship, so it outranks the other five. */
      priority: s.slug === "plant-rental" ? 0.95 : 0.8,
      images: [s.image],
    })),
  ];
}
