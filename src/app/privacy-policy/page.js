import PolicyPage from "@/components/PolicyPage";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const title = "Privacy policy";
const description = `How ${site.name} collects, uses and protects the personal information you share when you enquire, request a proposal or use valamgardens.com.`;

export const metadata = buildMetadata({ title, description, path: "/privacy-policy" });

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage path="/privacy-policy" title={title} description={description} updated="8 September 2026">
      <h2>Who we are</h2>
      <p>
        {site.name} (“we”, “us”) provides garden design, installation, maintenance, plant rental and
        gift plant services in Chennai, Tamil Nadu, India. This policy explains what personal
        information we collect through {site.domain}, by phone, WhatsApp and email, and how we use
        it. Contact us at <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phoneDisplay}.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>Contact details you give us: name, phone number, email address and location in Chennai.</li>
        <li>Details about your project: the service you are interested in, the space, photos you send and your message.</li>
        <li>Walk-through and plan records: measurements, proposals, invoices and maintenance visit reports.</li>
        <li>Technical data when you visit the website: IP address, browser, pages viewed and referring site, collected through server logs and privacy-respecting analytics.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to your enquiry, arrange a walk-through and send you a proposal.</li>
        <li>To deliver and invoice the services you order and to schedule maintenance visits.</li>
        <li>To send occasional updates about seasonal care or offers, only if you ask for them. You can opt out at any time.</li>
        <li>To keep the website secure and understand which pages are useful.</li>
      </ul>

      <h2>Legal basis and consent</h2>
      <p>
        We process your information under the Digital Personal Data Protection Act, 2023 on the
        basis of your consent when you contact us, and to perform the contract when you hire us. You
        may withdraw consent for marketing at any time by emailing us.
      </p>

      <h2>Who we share it with</h2>
      <p>
        We do not sell personal data. We share it only with service providers who help us run the
        business: our email delivery provider for enquiry notifications, our accounting software for
        invoicing, and our hosting provider. Each is bound by contract to protect your data. We may
        disclose information if required by law.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Enquiries that do not lead to a project are deleted after 12 months. Project and invoice
        records are kept for 8 years to meet tax and accounting requirements. Maintenance plan records
        are kept for the life of the plan plus 2 years.
      </p>

      <h2>Cookies</h2>
      <p>
        The website uses only cookies that are strictly necessary for it to work and, where enabled,
        anonymous analytics. If we run advertising campaigns, landing pages may carry advertising
        measurement tags from Google or Meta; these are disclosed on those pages and you can opt out
        through your browser or the provider’s settings.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask for a copy of the personal data we hold about you, ask us to correct it, or ask us
        to delete it where we have no legal duty to keep it. Write to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. We respond within 30 days. If you are not
        satisfied, you may complain to the Data Protection Board of India.
      </p>

      <h2>Changes</h2>
      <p>
        We update this policy when our practices change and show the date at the top of the page.
        Continued use of the website after a change means you accept the updated policy.
      </p>
    </PolicyPage>
  );
}
