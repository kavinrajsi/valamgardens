import { process } from "@/lib/services";

export default function ProcessSteps({ items = process }) {
  return (
    <ol className="steps">
      {items.map((step) => (
        <li className="step" key={step.title}>
          <span className="step__num" aria-hidden="true" />
          <div>
            <h3 className="step__title">{step.title}</h3>
            <p className="step__text">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
