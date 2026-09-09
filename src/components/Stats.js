import { stats } from "@/lib/services";

export default function Stats({ items = stats }) {
  return (
    <div className="row row--gy">
      {items.map((s) => (
        <div className="col-12 col-sm-4" key={s.label}>
          <div className="stat">
            <p className="stat__value">{s.value}</p>
            <p className="stat__label">{s.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
