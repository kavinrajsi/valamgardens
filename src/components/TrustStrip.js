import { CheckIcon, ClockIcon, LeafIcon, PinIcon } from "./Icons";

const items = [
  { icon: PinIcon, text: "Serving all of Chennai and nearby districts" },
  { icon: ClockIcon, text: "Site visit within 48 hours, quote in 3 days" },
  { icon: LeafIcon, text: "Plants chosen for Chennai heat and water" },
  { icon: CheckIcon, text: "30-day plant cover, 1-year irrigation warranty" },
];

export default function TrustStrip() {
  return (
    <ul className="trust" aria-label="Why clients choose Valam Gardens">
      {items.map(({ icon: Icon, text }) => (
        <li className="trust__item" key={text}>
          <Icon />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}
