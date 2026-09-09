import SplitHeading from "./motion/SplitHeading";

/**
 * `id` is forwarded onto the heading so the `aria-labelledby` on the wrapping
 * <section> resolves. The heading itself is a SplitHeading, which reveals it
 * line by line and otherwise renders exactly the tag given by `as`.
 */
export default function SectionHeading({ title, lead, action, as: Tag = "h2", id, row = false }) {
  return (
    <div className={`section-heading${row ? " section-heading--row" : ""}`}>
      <div>
        <SplitHeading as={Tag} id={id} className="section-heading__title">
          {title}
        </SplitHeading>
        {lead && <p className="section-heading__lead">{lead}</p>}
      </div>
      {action}
    </div>
  );
}
