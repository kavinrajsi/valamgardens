import PolicyPage from "@/components/PolicyPage";
import Link from "next/link";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const title = "Terms of service";
const description = `The terms on which ${site.name} provides office plant rental, garden design, installation, maintenance and gift plant services in Chennai.`;

export const metadata = buildMetadata({ title, description, path: "/terms" });

export default function TermsPage() {
  return (
    <PolicyPage path="/terms" title={title} description={description} updated="8 September 2026">
      <h2>Scope</h2>
      <p>
        These terms apply to all quotes, orders and services provided by {site.name} in Chennai and
        surrounding districts, including office plant rental, vertical gardens, landscaping, garden
        maintenance, terrace gardening and gift plants. A signed quote, a countersigned rental plan
        or a written confirmation by email or WhatsApp forms the contract between you and us.
      </p>

      <h2>Walk-throughs and quotes</h2>
      <ul>
        <li>Site visits and rental walk-throughs are chargeable. The call-out charge is confirmed when you book, and visits beyond 40 km from the city centre may carry an additional travel charge, agreed in advance.</li>
        <li>Rental is quoted on request. Plans are priced after a walk-through, against the number of plants, the planters chosen and the size of the space. We do not publish a price list.</li>
        <li>Quotes are valid for 30 days. Plant prices are subject to seasonal availability; substitutes of equal value are proposed if a listed plant is unavailable.</li>
        <li>Design fees, where charged, are adjusted against the project value if you proceed within 60 days.</li>
      </ul>

      <h2>Payment</h2>
      <ul>
        <li>Installation projects: 50% advance to schedule, 40% on delivery of materials and plants, 10% on handover.</li>
        <li>Plant rental plans: billed in advance for the plan cycle you choose — monthly, quarterly or annual. The first invoice is raised on installation.</li>
        <li>Maintenance plans: billed monthly in advance, minimum three-month term.</li>
        <li>Gift plant orders: 50% advance to confirm the order, balance before dispatch. Minimum order 50 pieces.</li>
        <li>Payments are accepted by UPI, bank transfer, card or cash. GST is charged as applicable.</li>
      </ul>

      <h2>Your responsibilities</h2>
      <ul>
        <li>Provide access to the site, a water point and a power point where irrigation timers are installed.</li>
        <li>Tell us about underground utilities, waterproofing history and structural limits you are aware of.</li>
        <li>Water and care for plants between our visits as briefed at handover, unless you are on a maintenance plan.</li>
      </ul>

      <h2>Plant and workmanship cover</h2>
      <ul>
        <li>Plants we install are replaced free if they fail within 30 days of handover for reasons other than neglect, pests introduced from elsewhere, extreme weather or damage by others.</li>
        <li>Plants under an active maintenance plan are replaced free for the duration of the plan.</li>
        <li>Irrigation systems carry a one-year workmanship warranty. Hardscape carries a one-year warranty on workmanship; material warranties are as provided by the manufacturer.</li>
      </ul>

      <h2>Plant rental plans</h2>
      <ul>
        <li>Plants and planters supplied on rental remain our property throughout the plan and are returned to us when it ends. You agree not to move them off-site, re-pot them or apply treatments to them.</li>
        <li>Term. A monthly plan runs month to month. Quarterly and annual plans run for their cycle and renew automatically unless either party gives notice.</li>
        <li>Notice. Either party may end a plan with 30 days’ written notice, effective at the end of the current cycle. Fees for the notice period are payable.</li>
        <li>Replacement. Any plant that declines in normal indoor use is replaced free, for the life of the plan, at the next scheduled visit. This is our cost, not yours.</li>
        <li>What replacement does not cover: plants damaged by building work, pest infestations introduced from elsewhere, loss of power or air conditioning for extended periods, water damage, relocation by anyone other than us, theft, vandalism or deliberate damage. In those cases the plant is charged at replacement cost.</li>
        <li>Access. We need access to the plants during your working hours on the agreed weekly slot. Visits we cannot complete because access was not available are treated as delivered.</li>
        <li>Changes. Adding, removing or swapping plants takes effect from the next cycle and is re-quoted on the same basis as the original plan.</li>
        <li>End of term. We collect the plants and planters within 7 working days of the plan ending. Items not returned in a condition consistent with normal wear are charged at replacement cost.</li>
      </ul>

      <h2>Cancellation and refunds</h2>
      <p>
        See our <Link href="/refund-policy">refund and cancellation policy</Link>.
      </p>

      <h2>Liability</h2>
      <p>
        We carry out work with reasonable skill and care. Our liability for any claim is limited to
        the value of the contract. We are not liable for indirect loss, for pre-existing defects in
        waterproofing or structure that were not disclosed, or for delays caused by weather,
        regulatory restrictions or events outside our control.
      </p>

      <h2>Photography</h2>
      <p>
        We may photograph completed work for our portfolio and website. We do not publish your name
        or exact address, and we will not publish photographs if you ask us not to.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of India. Disputes are subject to the jurisdiction of
        the courts in Chennai, Tamil Nadu.
      </p>

      <h2>Contact</h2>
      <p>
        {site.name}, Chennai. <a href={`mailto:${site.email}`}>{site.email}</a>, {site.phoneDisplay}.
      </p>
    </PolicyPage>
  );
}
