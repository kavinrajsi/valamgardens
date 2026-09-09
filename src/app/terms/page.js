import PolicyPage from "@/components/PolicyPage";
import Link from "next/link";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const title = "Terms of service";
const description = `The terms on which ${site.name} provides garden design, installation, maintenance, plant rental and gift plant services in Chennai.`;

export const metadata = buildMetadata({ title, description, path: "/terms" });

export default function TermsPage() {
  return (
    <PolicyPage path="/terms" title={title} description={description} updated="8 September 2026">
      <h2>Scope</h2>
      <p>
        These terms apply to all quotes, orders and services provided by {site.name} in Chennai and
        surrounding districts, including vertical gardens, landscaping, garden maintenance, terrace
        gardening, plant rental and gift plants. A signed quote or a written confirmation by email or
        WhatsApp forms the contract between you and us.
      </p>

      <h2>Site visits and quotes</h2>
      <ul>
        <li>Site visits are chargeable. The call-out charge is confirmed when you book, and visits beyond 40 km from the city centre may carry an additional travel charge, agreed in advance.</li>
        <li>Quotes are valid for 30 days. Plant prices are subject to seasonal availability; substitutes of equal value are proposed if a listed plant is unavailable.</li>
        <li>Design fees, where charged, are adjusted against the project value if you proceed within 60 days.</li>
      </ul>

      <h2>Payment</h2>
      <ul>
        <li>Installation projects: 50% advance to schedule, 40% on delivery of materials and plants, 10% on handover.</li>
        <li>Maintenance and plant rental plans: billed monthly in advance, minimum three-month term.</li>
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

      <h2>Plant rental</h2>
      <p>
        Plants and planters on rental remain our property. You agree not to move them off-site or
        re-pot them. Damage beyond normal wear is charged at replacement cost. Either party may end a
        plan after the minimum term with 30 days’ written notice.
      </p>

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
