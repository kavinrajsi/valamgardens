import { site } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function MobileCtaBar() {
  return (
    <div className="mobile-bar" role="region" aria-label="Quick contact">
      <a href={site.phoneHref} className="mobile-bar__link mobile-bar__link--primary">
        <PhoneIcon />
        Call now
      </a>
      <a
        href={site.whatsappHref}
        className="mobile-bar__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
    </div>
  );
}
