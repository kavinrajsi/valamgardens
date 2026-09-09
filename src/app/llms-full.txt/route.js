import { site, absoluteUrl } from "@/lib/site";
import { services, generalFaqs, process, reasons } from "@/lib/services";

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
  lines.push("- Site visit: across Chennai, usually within 48 hours. Written quote within 3 working days.");
  lines.push("- Guarantees: 30-day plant replacement after installation; plants covered for the full term of a maintenance plan; 1-year workmanship warranty on irrigation and hardscape.");
  lines.push("");
  lines.push("## Why clients choose Valam Gardens");
  lines.push("");
  reasons.forEach((r) => lines.push(`- ${r.title}: ${r.body}`));
  lines.push("");
  lines.push("## How a project runs");
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
