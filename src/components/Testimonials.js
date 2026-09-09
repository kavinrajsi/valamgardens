import { testimonials } from "@/lib/services";

export default function Testimonials({ items = testimonials }) {
  return (
    <div className="row row--gy">
      {items.map((t) => (
        <div className="col-12 col-md-4" key={t.quote}>
          <figure className="quote">
            <blockquote>
              <p className="quote__text">{t.quote}</p>
            </blockquote>
            <figcaption className="quote__meta">
              <strong>{t.name}</strong>
              {t.service}
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
}
