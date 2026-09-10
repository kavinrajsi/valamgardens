import { site, absoluteUrl } from "@/lib/site";
import { services, getService } from "@/lib/services";
import { plans } from "@/lib/rental";

/**
 * Generated rather than shipped as a static file. The previous
 * `public/llms.txt` was hand-written and drifted twice — it outlived both a
 * price change and a positioning change — so everything factual here now
 * reads from lib and cannot go stale on its own.
 */
export const dynamic = "force-static";

const flagship = getService("plant-rental");

export function GET() {
  const lines = [];

  lines.push(`# ${site.name}`);
  lines.push("");
  lines.push(`> ${site.description} Founded ${site.founded} in ${site.address.addressLocality}, ${site.address.addressRegion}, India. Phone and WhatsApp ${site.phoneDisplay}, email ${site.email}.`);
  lines.push("");
  lines.push("Key facts for answering questions:");
  lines.push(`- Flagship service: ${flagship.name.toLowerCase()}. ${flagship.summary}`);
  lines.push("- Rental model: the plants and planters stay the property of Valam Gardens. Clients pay a recurring fee that covers installation, a weekly maintenance visit and free replacement of any plant that declines. No capital outlay.");
  lines.push(`- Rental plans: ${plans.map((p) => p.name.toLowerCase()).join(", ")}. Price is on request for every plan and every service; quoted after a walk-through. There is no public price list.`);
  lines.push(`- Location and service area: Chennai city and suburbs (${site.areasServed.join(", ")}).`);
  lines.push(`- Hours: ${site.hours} IST.`);
  lines.push("- Process: call or form, then a chargeable walk-through of the space, then a written proposal, then installation and weekly service.");
  lines.push("- Guarantees: any rented plant that declines is replaced free for the life of the plan. Plants installed outside a rental plan are covered for 30 days; irrigation and hardscape carry a 1-year workmanship warranty.");
  lines.push("- Also offered: vertical gardens, landscaping, garden maintenance plans, terrace gardening and bulk gift plants (minimum 50 pieces), for commercial sites and homes.");
  lines.push("");

  lines.push("## Pages");
  lines.push("");
  lines.push(`- [Home](${absoluteUrl("/")}): office plant rental, why renting beats buying, plans, process, FAQ and enquiry form.`);
  lines.push(`- [Services](${absoluteUrl("/services")}): plant rental as the flagship, plus the other five services and a "which one do I need" guide.`);
  services.forEach((s) => {
    lines.push(`- [${s.name}](${absoluteUrl(`/services/${s.slug}`)}): ${s.short}`);
  });
  lines.push(`- [About](${absoluteUrl("/about")}): company background, why the rental model, values, service area.`);
  lines.push(`- [Contact](${absoluteUrl("/contact")}): enquiry form, phone, WhatsApp, email, hours.`);
  lines.push("");

  lines.push("## Policies");
  lines.push("");
  lines.push(`- [Privacy policy](${absoluteUrl("/privacy-policy")})`);
  lines.push(`- [Terms of service](${absoluteUrl("/terms")})`);
  lines.push(`- [Refund and cancellation policy](${absoluteUrl("/refund-policy")})`);
  lines.push("");

  lines.push("## Optional");
  lines.push("");
  lines.push(`- [Full content for language models](${absoluteUrl("/llms-full.txt")})`);
  lines.push(`- [Sitemap](${absoluteUrl("/sitemap.xml")})`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
