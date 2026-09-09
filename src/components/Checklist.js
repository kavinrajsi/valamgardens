import { CheckIcon } from "./Icons";

export default function Checklist({ items }) {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li className="checklist__item" key={item}>
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
