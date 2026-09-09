import Link from "next/link";
import Image from "next/image";

export default function ServiceCard({ service, headingLevel = "h3" }) {
  const Tag = headingLevel;
  return (
    <Link href={`/services/${service.slug}`} className="service-card">
      <div className="media media--4x3 service-card__media">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 992px) 30vw, (min-width: 576px) 45vw, 92vw"
        />
      </div>
      <Tag className="service-card__title">{service.name}</Tag>
      <p className="service-card__text">{service.short}</p>
      {service.note && <p className="service-card__note">{service.note}</p>}
    </Link>
  );
}
