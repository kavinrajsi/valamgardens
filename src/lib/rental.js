/**
 * Office plant rental — the flagship offering.
 *
 * Kept apart from `services.js`, which models the six service pages. This
 * module holds the rental story: plans, the buy-vs-rent argument, who it is
 * for, and why plants belong in a workplace.
 *
 * `rentalPillars` and `plantBenefits` are shaped `{ title, body }` so the
 * existing `Features` component renders them with no changes.
 */

/**
 * Named tiers, no figures. Nothing here carries a `price` field, so no
 * downstream template can render a number we have not agreed.
 *
 * DRAFT — the cadences come from the brief, but what separates the tiers is
 * my reading of it. Confirm before this goes live.
 */
export const plans = [
  {
    id: "monthly",
    name: "Monthly",
    cadence: "Billed every month",
    bestFor: "Trying rental on one floor, or a space that changes often.",
    includes: [
      "Plants, planters and installation",
      "Weekly maintenance visit",
      "Free replacement of any plant that declines",
      "Swap plants or planters with a month's notice",
    ],
    note: "Cancel or resize with 30 days' notice.",
  },
  {
    id: "quarterly",
    name: "Quarterly",
    cadence: "Billed every three months",
    bestFor: "Settled offices that want fewer invoices and a seasonal refresh.",
    includes: [
      "Everything in Monthly",
      "Priority scheduling for moves and reconfigurations",
    ],
    note: "Our most-taken plan for single-office clients.",
    featured: true,
  },
  {
    id: "annual",
    name: "Annual",
    cadence: "Billed yearly",
    bestFor: "Campuses, multi-floor offices and anyone standardising across sites.",
    includes: [
      "Everything in Quarterly",
      "Design review with a named account manager",
      "Multi-site rollout on one contract and one invoice",
      "Planter refresh once during the year",
    ],
    note: "Best rate per plant. Scales from one floor to a full campus.",
  },
];

/** The core argument, as a table. Five rows, buying against renting. */
export const rentVsBuy = [
  {
    aspect: "Upfront cost",
    buying: "You pay for every plant and planter before anything is placed.",
    renting: "No capital outlay. One predictable fee that starts when the plants do.",
  },
  {
    aspect: "Maintenance",
    buying: "Your facilities team waters and feeds them, or you hire someone who does.",
    renting: "A trained team visits weekly. Watering, pruning, feeding and cleaning are included.",
  },
  {
    aspect: "When a plant dies",
    buying: "You buy a replacement, and you notice too late.",
    renting: "We spot it first and replace it free. You never pay for a plant twice.",
  },
  {
    aspect: "On the books",
    buying: "A capital purchase that depreciates and needs tracking as an asset.",
    renting: "An operating expense on a single monthly invoice.",
  },
];

/** The four offerings from the brief. `{ title, body }` for `Features`. */
export const rentalPillars = [
  {
    title: "Rental and installation",
    body: "We plan the palette against your light and layout, then deliver, place and style every plant. Planters are matched to your interiors and stay ours.",
  },
  {
    title: "Weekly maintenance",
    body: "A trained team visits every week to water, prune, feed, clean leaves and rotate plants toward the light. Nobody on your staff has to remember anything.",
  },
  {
    title: "Free damage replacement",
    body: "Plants decline. When one does, we replace it at the next visit at no cost, because it is our plant, not yours. Replacement is built into the plan.",
  },
  {
    title: "Customisation and styling",
    body: "Reception, cabins, workstations and breakout areas each get a different treatment. Planters, heights and densities are chosen to match your brand, not a catalogue.",
  },
];

/** Why plants belong at work. Lives on the rental page only. */
export const plantBenefits = [
  {
    title: "Cleaner air indoors",
    body: "Indoor plants take up carbon dioxide and help settle dust and volatile compounds from carpets, paint and printers, in spaces that stay sealed and air-conditioned all day.",
  },
  {
    title: "Lower stress",
    body: "Greenery in the line of sight is one of the simplest ways to soften a working day. Staff report feeling calmer in planted offices than in bare ones.",
  },
  {
    title: "Better focus",
    body: "A planted workspace reads as cared for. Attention holds longer in rooms that feel alive than in rooms that feel like storage.",
  },
  {
    title: "A space that says something",
    body: "Clients and candidates form a view of your company in the first thirty seconds of the reception. Plants do more for that view than most furniture.",
  },
  {
    title: "Sound and light, softened",
    body: "Grouped planting breaks up open-plan noise and hard reflections, and screens workstations without building a wall.",
  },
];

/**
 * Who this is for. `primary` leads the page; `secondary` runs as a compact
 * strip so the list does not turn into its own section.
 */
export const audienceSegments = {
  primary: [
    {
      title: "Corporate offices",
      body: "Reception, boardrooms, cabins and breakout areas, planted to one standard across floors.",
    },
    {
      title: "IT companies",
      body: "Large open floors where greenery has to survive full air conditioning and rare direct light.",
    },
    {
      title: "Banks and NBFCs",
      body: "Customer-facing branches where the space has to look composed every single day.",
    },
    {
      title: "Start-ups",
      body: "Offices that change shape every few months. Rent, resize, move, without owning anything.",
    },
  ],
  secondary: [
    "Co-working spaces",
    "Hotels and restaurants",
    "Hospitals and clinics",
    "Schools and colleges",
    "Showrooms and retail",
    "Events and launches",
  ],
};
