import { CheckIcon, ClockIcon, LeafIcon, PinIcon } from "./Icons";

const items = [
  { icon: LeafIcon, text: "No capital outlay, one monthly plan" },
  { icon: ClockIcon, text: "Weekly maintenance visits, included" },
  { icon: CheckIcon, text: "Free replacement of any plant that declines" },
  { icon: PinIcon, text: "Serving all of Chennai and nearby districts" },
];

export default function TrustStrip() {
  return (
    <ul className="trust" aria-label="Why offices choose Valam Gardens">
      {items.map(({ icon: Icon, text }) => (
        <li className="trust__item" key={text}>
          <Icon />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}
