import PolicyPage from "@/components/PolicyPage";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const title = "Refund and cancellation policy";
const description = `How cancellations, rescheduling and refunds work for ${site.name} office plant rental plans, garden installations, maintenance plans and gift plant orders in Chennai.`;

export const metadata = buildMetadata({ title, description, path: "/refund-policy" });

export default function RefundPolicyPage() {
  return (
    <PolicyPage path="/refund-policy" title={title} description={description} updated="8 September 2026">
      <h2>Office plant rental plans</h2>
      <ul>
        <li>A monthly plan runs month to month. Quarterly and annual plans run for their cycle and renew unless notice is given.</li>
        <li>Cancel with 30 days’ written notice, effective at the end of the current cycle. Fees for the notice period are payable; any cycle paid in advance beyond that is refunded pro rata.</li>
        <li>We collect the plants and planters within 7 working days of the plan ending. Items not returned in a condition consistent with normal wear are charged at replacement cost.</li>
        <li>Plants that decline in normal indoor use are replaced free. Replacement is not a refund event, and no credit is issued for a replaced plant.</li>
        <li>A missed maintenance visit by us is made up within 7 days or credited to the next invoice. A visit we cannot complete because access was not available is treated as delivered.</li>
        <li>Event and short-term rentals cancelled more than 72 hours before the event are refunded in full. Within 72 hours, 50% is charged.</li>
      </ul>

      <h2>Installation projects</h2>
      <p>Applies to vertical gardens, landscaping and terrace gardens.</p>
      <ul>
        <li>Cancel more than 7 days before the scheduled start: full refund of the advance, less any custom materials already ordered for your site.</li>
        <li>Cancel within 7 days of the start: plants and materials already procured are charged at cost; the balance of the advance is refunded.</li>
        <li>Cancel after work has started: you pay for work completed and materials on site; any remaining advance is refunded.</li>
        <li>Rescheduling with 48 hours’ notice is free. We may reschedule for heavy rain or safety reasons at no cost to you.</li>
      </ul>

      <h2>Garden maintenance plans</h2>
      <ul>
        <li>Plans have a three-month minimum. After that, cancel with 30 days’ written notice.</li>
        <li>Fees for the notice period are payable. Any month paid in advance beyond the notice period is refunded.</li>
        <li>A missed visit by us is made up within 7 days or credited to the next invoice.</li>
        <li>A visit cancelled by you with less than 24 hours’ notice is charged.</li>
      </ul>

      <h2>Gift plant orders</h2>
      <ul>
        <li>Orders are confirmed with a 50% advance. Cancel before plants are potted or pots are branded: full refund.</li>
        <li>After branding or potting has started: the advance is retained to cover plants, pots and printing; any unspent balance is refunded.</li>
        <li>Plants damaged in transit are replaced or refunded if reported with photos within 24 hours of delivery.</li>
        <li>Because plants are living goods, we do not accept returns of healthy plants after delivery.</li>
      </ul>

      <h2>How refunds are paid</h2>
      <p>
        Approved refunds are made to the original payment method within 7 working days of the
        cancellation being agreed in writing. Bank charges, if any, are borne by us.
      </p>

      <h2>Questions</h2>
      <p>
        Email <a href={`mailto:${site.email}`}>{site.email}</a> or call {site.phoneDisplay}. We aim
        to resolve any refund question within two working days.
      </p>
    </PolicyPage>
  );
}
