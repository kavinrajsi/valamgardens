import { rentVsBuy } from "@/lib/rental";

/**
 * Buying against renting. A real <table> with a caption and scoped headers,
 * inside an overflow container so it scrolls on narrow screens instead of
 * forcing the whole page wide.
 */
export default function CompareTable() {
  return (
    <div className="compare" role="region" aria-labelledby="compare-caption" tabIndex={0}>
      <table className="compare__table">
        <caption id="compare-caption" className="compare__caption">
          What changes when you rent instead of buy
        </caption>
        <thead>
          <tr>
            <th scope="col" className="compare__aspect">
              <span className="visually-hidden">Aspect</span>
            </th>
            <th scope="col">Buying plants</th>
            <th scope="col" className="compare__col--ours">Renting from Valam</th>
          </tr>
        </thead>
        <tbody>
          {rentVsBuy.map((row) => (
            <tr key={row.aspect}>
              <th scope="row" className="compare__aspect">{row.aspect}</th>
              <td>{row.buying}</td>
              <td className="compare__col--ours">{row.renting}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
