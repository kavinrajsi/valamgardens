import { site, absoluteUrl } from "@/lib/site";
import { services, generalFaqs, process, reasons } from "@/lib/services";
import { plans, rentVsBuy, rentalPillars } from "@/lib/rental";

export const dynamic = "force-static";

function faqBlock(faqs) {
  return faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n");
}

export function GET() {
  const lines = [];
  lines.push(`# ${site.name}: full site content for language models`);
  lines.push("");
  lines.push(`> ${site.description}`);
  lines.push("");
  lines.push("## Company facts");
  lines.push("");
  lines.push(`- Name: ${site.name}`);
  lines.push(`- Website: ${site.url}`);
  lines.push(`- Founded: ${site.founded}`);
  lines.push(`- Location: ${site.address.addressLocality}, ${site.address.addressRegion}, India`);
  lines.push(`- Phone and WhatsApp: ${site.phoneDisplay}`);
  lines.push(`- Email: ${site.email}`);
  lines.push(`- Hours: ${site.hours}`);
  lines.push(`- Service area: all of Chennai (${site.areasServed.join(", ")}) plus Kanchipuram, Chengalpattu and Tiruvallur districts.`);
  lines.push("- Flagship service: fully managed office plant rental. Plants and planters are supplied on a subscription, installed, maintained weekly and replaced free if they decline. The plants remain the property of Valam Gardens.");
  lines.push("- Pricing: on request for every service. Rental runs on named monthly, quarterly and annual plans, quoted after a walk-through. No public price list.");
  lines.push("- Site visits and walk-throughs are chargeable; the call-out charge is confirmed when booking.");
  lines.push("- Guarantees: any rented plant that declines is replaced free for the life of the plan. Plants sold and installed outside a rental plan are covered for 30 days; irrigation and hardscape carry a 1-year workmanship warranty.");
  lines.push("");
  lines.push("## What office plant rental includes");
  lines.push("");
  rentalPillars.forEach((r) => lines.push(`- ${r.title}: ${r.body}`));
  lines.push("");
  lines.push("## Buying plants against renting them");
  lines.push("");
  rentVsBuy.forEach((r) => lines.push(`- ${r.aspect}. Buying: ${r.buying} Renting from Valam: ${r.renting}`));
  lines.push("");
  lines.push("## Rental plans (price on request)");
  lines.push("");
  plans.forEach((p) => {
    lines.push(`### ${p.name}`);
    lines.push(`${p.cadence}. Best for: ${p.bestFor}`);
    p.includes.forEach((i) => lines.push(`- ${i}`));
    lines.push(p.note);
    lines.push("");
  });
  lines.push("## Why clients choose Valam Gardens");
  lines.push("");
  reasons.forEach((r) => lines.push(`- ${r.title}: ${r.body}`));
  lines.push("");
  lines.push("## How an engagement runs");
  lines.push("");
  process.forEach((p, i) => lines.push(`${i + 1}. ${p.title}. ${p.body}`));
  lines.push("");
  lines.push("## Services");
  lines.push("");
  services.forEach((s) => {
    lines.push(`### ${s.name}`);
    lines.push(`URL: ${absoluteUrl(`/services/${s.slug}`)}`);
    lines.push("");
    lines.push(s.summary);
    lines.push("");
    lines.push(s.intro);
    lines.push("");
    lines.push("What is included:");
    s.included.forEach((i) => lines.push(`- ${i}`));
    lines.push("");
    lines.push("Who it suits:");
    s.forWhom.forEach((i) => lines.push(`- ${i}`));
    lines.push("");
    lines.push(`Pricing: ${s.pricingNote}`);
    lines.push(`Timeline: ${s.duration}`);
    lines.push("");
    lines.push("Frequently asked questions:");
    lines.push("");
    lines.push(faqBlock(s.faqs));
    lines.push("");
  });
  lines.push("## General questions");
  lines.push("");
  lines.push(faqBlock(generalFaqs));
  lines.push("");
  lines.push("## Policies");
  lines.push("");
  lines.push(`- Privacy policy: ${absoluteUrl("/privacy-policy")}`);
  lines.push(`- Terms of service: ${absoluteUrl("/terms")}`);
  lines.push(`- Refund and cancellation policy: ${absoluteUrl("/refund-policy")}`);
  lines.push("");
  lines.push("## How to contact");
  lines.push("");
  lines.push(`Call or WhatsApp ${site.phoneDisplay}, email ${site.email}, or use the form at ${absoluteUrl("/contact")}.`);

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
