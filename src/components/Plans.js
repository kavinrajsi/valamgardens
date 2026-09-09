import { plans } from "@/lib/rental";
import Button from "./Button";
import Checklist from "./Checklist";

/**
 * Plan tiers. Deliberately no prices and no plan field on the enquiry form —
 * the tier is discussed on the call, so every card links to the ordinary
 * contact page rather than implying the choice travels with the enquiry.
 */
export default function Plans() {
  return (
    <div className="row row--gy-lg">
      {plans.map((plan) => (
        <div className="col-12 col-md-4" key={plan.id}>
          <div className={`plan${plan.featured ? " plan--featured" : ""}`}>
            {plan.featured && <p className="plan__badge">Most taken</p>}
            <h3 className="plan__name">{plan.name}</h3>
            <p className="plan__cadence">{plan.cadence}</p>
            <p className="plan__price">Price on request</p>
            <p className="plan__best-for">{plan.bestFor}</p>
            <Checklist items={plan.includes} />
            <p className="plan__note">{plan.note}</p>
            <Button href="/contact" variant={plan.featured ? "primary" : "outline"}>
              Talk to us
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
