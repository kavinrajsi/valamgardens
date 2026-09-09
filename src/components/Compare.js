import { rentVsBuy } from "@/lib/rental";
import { CheckIcon, CrossIcon } from "./Icons";

/**
 * Buying against renting, one card per aspect.
 *
 * This was a real <table> and read like a spec sheet. The pairing is the
 * argument, so each aspect keeps both halves together rather than splitting
 * into a buying column and a renting column the reader has to align by eye.
 * Cards stack on mobile with no scroll container, which the table needed.
 */
export default function Compare() {
  return (
    <ul className="compare">
      {rentVsBuy.map((row) => (
        <li className="compare__item" key={row.aspect}>
          <h3 className="compare__aspect">{row.aspect}</h3>
          <div className="compare__pair">
            <div className="compare__side">
              <p className="compare__label">
                <CrossIcon className="compare__icon" />
                Buying plants
              </p>
              <p className="compare__text">{row.buying}</p>
            </div>
            <div className="compare__side compare__side--ours">
              <p className="compare__label">
                <CheckIcon className="compare__icon" />
                Renting from Valam
              </p>
              <p className="compare__text">{row.renting}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
