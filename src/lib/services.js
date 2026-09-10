import { site, unsplash } from "./site";

export const services = [
  {
    slug: "plant-rental",
    name: "Office Plant Rental",
    short:
      "Indoor plants for your workplace on a monthly plan. We install them, maintain them weekly and replace anything that dies.",
    summary:
      "A fully managed subscription that puts healthy plants in your office and keeps them that way. No capital outlay, no maintenance staff, no dead plants on your invoice.",
    image: unsplash("1592150621744-aca64f48394a", 1200, 1500),
    imageAlt: "A collection of indoor plants in white pots beneath pendant lights",
    heroLine: "Grow your space.",
    intro:
      "Every office wants plants. Almost none wants to own them. Buying means capital tied up in something that needs watering on a Friday evening and quietly dies over a long weekend. Renting means the plants arrive styled and placed, a trained team looks after them every week, and anything that fails is our problem to replace.",
    included: [
      "Walk-through of your floor, mapped against light, layout and footfall",
      "Plants and planters supplied, delivered, placed and styled",
      "Weekly maintenance visit: watering, pruning, feeding, leaf cleaning, rotation",
      "Free replacement of any plant that declines, at the next visit",
      "Swaps and seasonal refreshes as the office changes",
      "One monthly invoice, on a plan you can resize or pause",
    ],
    forWhom: [
      "Corporate offices, from a single floor to a full campus",
      "IT companies, banks, NBFCs and start-ups",
      "Co-working spaces, hotels, hospitals and showrooms",
      "Homes and apartments that want the same managed care",
    ],
    pricingNote:
      "Rental runs on named plans \u2014 monthly, quarterly or annual \u2014 priced by the number of plants, the planters you choose and the size of the space. Price is on request: we quote after a walk-through so the number reflects your floor, not an average.",
    duration: "Installed within a week of confirmation, then a visit every week",
    note: "From one floor to a full campus",
    faqs: [
      {
        q: "What is actually included in a plan?",
        a: "The plants, the planters, delivery and installation, a weekly maintenance visit and free replacement of anything that declines. There is nothing to buy and nothing for your team to do.",
      },
      {
        q: "What happens when a plant dies?",
        a: "We replace it at no cost, usually before you have noticed. The plants stay ours throughout the rental, so replacing them is our responsibility rather than a line on your invoice.",
      },
      {
        q: "What happens on the weekly visit?",
        a: "Watering to the right level for each species, pruning, feeding, cleaning dust off the leaves and rotating plants toward the light. Anything struggling is flagged or swapped.",
      },
      {
        q: "Can we change the plan later?",
        a: "Yes. Add plants when you take another floor, reduce them when you consolidate, or swap the styling when the interiors change. Changes take effect from the next cycle.",
      },
      {
        q: "Is there a minimum term?",
        a: "The monthly plan runs month to month with 30 days' notice. Quarterly and annual plans commit for their cycle in exchange for a better rate per plant.",
      },
      {
        q: "Can you cover more than one office?",
        a: "Yes. Multi-site clients run on a single annual contract with one invoice and one point of contact, with the same standard applied at every location.",
      },
    ],
    related: ["garden-maintenance", "vertical-garden", "gift-plants"],
  },
  {
    slug: "garden-maintenance",
    name: "Garden Maintenance",
    short: "Scheduled visits that keep planted frontages, lawns and beds healthy all year.",
    summary:
      "Weekly, fortnightly or monthly care by trained gardeners: pruning, feeding, pest control, lawn care and replacements, on a plan you can see and track.",
    image: unsplash("1605117882932-f9e32b03fea9", 1200, 1500),
    imageAlt: "Gardener in green shirt edging a lawn beside a paved path",
    heroLine: "Kept, not just cut.",
    intro:
      "A garden is never finished. Plants outgrow, pests arrive, lawns thin out in the heat. Our maintenance plans put a trained gardener on a fixed schedule so the garden looks the way it did the day it was handed over.",
    included: [
      "Pruning, deadheading, shaping of hedges and shrubs",
      "Lawn mowing, edging, weeding and seasonal top dressing",
      "Organic feeding schedule and soil conditioning",
      "Pest and disease monitoring with treatment",
      "Replacement of failed plants under the plan",
    ],
    forWhom: [
      "Offices, campuses, showrooms and clinics with planted frontages",
      "Apartment associations with common gardens and lawns",
      "Homeowners who want a good garden without the weekend work",
      "Gardens we built, and gardens built by others",
    ],
    pricingNote:
      "Plans are priced per visit and by garden size. Monthly plans for a typical house garden start at ₹2,500; weekly plans for larger gardens and apartments are quoted after a visit. Materials such as manure and replacement plants are billed transparently.",
    duration: "Weekly, fortnightly or monthly visits, minimum three-month plan",
    faqs: [
      {
        q: "Do you maintain gardens you did not build?",
        a: "Yes. We start with a health assessment, fix what needs fixing and then move to a regular schedule.",
      },
      {
        q: "What does a visit include?",
        a: "Each visit covers pruning, weeding, feeding, lawn care, pest checks and irrigation checks. You receive a short report with photos after every visit.",
      },
      {
        q: "Is the same gardener sent each time?",
        a: "Yes, wherever possible. A supervisor reviews the garden every month and steps in for holidays.",
      },
      {
        q: "Can I pause the plan when I travel?",
        a: "Plans can be paused with a week's notice. Most clients keep visits running while travelling since that is when gardens suffer most.",
      },
    ],
    related: ["landscaping", "terrace-gardening", "plant-rental"],
  },
  {
    slug: "vertical-garden",
    name: "Vertical Garden",
    short: "Living green walls for office lobbies, reception walls, facades and balconies.",
    summary:
      "A vertical garden turns a blank wall into a planted surface. We build modular green walls with drip irrigation, so they stay lush with almost no daily effort from you.",
    image: unsplash("1497250681960-ef046c08a56e", 1200, 1500),
    imageAlt: "Dense fern foliage covering a wall, the texture of a living green wall",
    heroLine: "Walls that breathe.",
    intro:
      "Chennai homes rarely have spare ground. Walls, though, are everywhere. A vertical garden gives you a full planted garden on a surface you already own, indoors or out, without giving up floor space.",
    included: [
      "Site survey: sunlight, wall load, water point and drainage check",
      "Modular planter system or felt-pocket system, chosen for your wall",
      "Plant palette suited to Chennai heat and your light conditions",
      "Automated drip irrigation with timer, plus overflow handling",
      "Installation, first-month settling care and a maintenance plan",
    ],
    forWhom: [
      "Office receptions, lobbies, cafeterias and breakout walls",
      "Restaurants and retail facades that want a signature look",
      "Apartment balconies and compound walls",
      "Villas with hard boundary walls that need softening",
    ],
    pricingNote:
      "Green walls are priced per square foot and depend on the system, plant density and irrigation. Most residential walls fall between ₹850 and ₹1,800 per sq ft installed. You get a fixed quote after a site visit.",
    duration: "Installation in 2 to 5 working days for most walls",
    faqs: [
      {
        q: "Will a vertical garden damage my wall?",
        a: "No. The frame is mounted on a waterproof backing with a small air gap, so moisture never touches your wall. Every system we install includes a collection tray and overflow outlet.",
      },
      {
        q: "How much water and electricity does it use?",
        a: "A typical 100 sq ft wall uses about 20 to 30 litres a day through drip irrigation on a timer. The timer runs on a standard plug point and draws less power than a phone charger.",
      },
      {
        q: "Which plants work on a green wall in Chennai?",
        a: "For full sun we use Wedelia, Syngonium, Duranta, Alternanthera and Portulaca. For shade and indoors we lean on ferns, Philodendron, Pothos, Peperomia and Aglaonema. We mix textures so the wall reads as one surface.",
      },
      {
        q: "What maintenance does it need?",
        a: "A monthly visit for trimming, replacing the odd plant and checking the irrigation is enough for most walls. We offer this as a fixed monthly plan.",
      },
    ],
    related: ["terrace-gardening", "garden-maintenance", "plant-rental"],
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    short: "Complete grounds design and build for campuses, commercial sites and homes.",
    summary:
      "From a bare plot or a tired lawn to a finished garden: layout, planting, paths, lighting and irrigation, all designed and built by one team.",
    image: unsplash("1585320806297-9794b3e4eeae", 1200, 1500),
    imageAlt: "Brick garden path lined with clipped hedges and roses leading to a bench",
    heroLine: "Ground plans that grow.",
    intro:
      "Good landscaping is decided on paper before a single plant goes in. We start with how you will actually use the space: morning coffee, kids playing, evening walks, parking. The design follows the life, not the other way round.",
    included: [
      "Site measurement, soil test and sun mapping",
      "Concept layout with plant list, hardscape and lighting plan",
      "Lawn preparation, turfing or ground covers",
      "Planting of trees, shrubs, hedges and seasonal beds",
      "Paths, edging, seating, pergolas and water features on request",
      "Drip or sprinkler irrigation and three months of settling care",
    ],
    forWhom: [
      "Offices, schools, hotels and hospitals with open ground",
      "Apartment associations redoing common gardens",
      "Independent houses and villas with front or back yards",
      "Farmhouses and weekend homes around Chennai",
    ],
    pricingNote:
      "Landscaping is quoted per project. Small front yards start around ₹60,000; full villa gardens with hardscape and irrigation typically run ₹2.5 to ₹8 lakh. You receive an itemised estimate after the site visit and a fixed quote once the design is approved.",
    duration: "Design in 1 to 2 weeks, build in 2 to 6 weeks depending on scope",
    faqs: [
      {
        q: "Do you provide a design before we commit?",
        a: "Yes. After the site visit we prepare a concept layout and estimate. The design fee is adjusted against the project if you go ahead with us.",
      },
      {
        q: "Can you work with Chennai's clay soil and water?",
        a: "Yes. We amend beds with compost and cocopeat, raise levels where drainage is poor and choose plants that tolerate hard water. Rainwater harvesting can be linked to the irrigation.",
      },
      {
        q: "Will the garden survive summer?",
        a: "We plant for Chennai's climate: drought-tolerant natives and proven exotics, mulching to hold moisture and drip irrigation on a timer. Summer is when a well-built garden shows its value.",
      },
      {
        q: "Do you do hardscape like paving and pergolas?",
        a: "Yes. Paths, edging, seating walls, pergolas, decking and lighting are all part of our scope and are coordinated with the planting plan.",
      },
    ],
    related: ["garden-maintenance", "vertical-garden", "terrace-gardening"],
  },
  {
    slug: "terrace-gardening",
    name: "Terrace Gardening",
    short: "Rooftop kitchen gardens and green terraces built to protect your slab.",
    summary:
      "We convert unused terraces into productive, cool, usable gardens: raised beds, grow bags, seating and shade, with waterproofing and drainage done right.",
    image: unsplash("1591857177580-dc82b9ac4e1e", 1200, 1500),
    imageAlt: "Raised timber beds on a rooftop planted with vegetables and herbs",
    heroLine: "Your roof, harvested.",
    intro:
      "A Chennai terrace gets sun all day and sits empty all year. A terrace garden cools the floor below by several degrees, gives you vegetables and greens and adds a room to the house. The trick is doing it without damaging the slab.",
    included: [
      "Load and waterproofing assessment of the terrace slab",
      "Drainage layer, protection sheet and raised bed or grow-bag layout",
      "Lightweight growing medium mixed for Chennai heat",
      "Vegetable, herb, fruit and ornamental planting plan",
      "Drip irrigation, shade net or pergola where needed",
      "Seating, lighting and a first-season planting calendar",
    ],
    forWhom: [
      "Offices and schools that want a green roof for staff",
      "Apartment associations creating a shared rooftop garden",
      "Independent houses with open terraces",
      "Penthouse and top-floor apartments",
    ],
    pricingNote:
      "Terrace gardens are quoted by area and system. Grow-bag kitchen gardens start around ₹35,000 for a 200 sq ft terrace; full raised-bed terraces with pergola and seating typically run ₹1.5 to ₹4 lakh.",
    duration: "Installation in 1 to 3 weeks",
    faqs: [
      {
        q: "Will a terrace garden cause leaks?",
        a: "Not when built correctly. We inspect existing waterproofing, add a protection layer and drainage mat under every bed and keep all planting off the slab itself so water runs to the existing outlets.",
      },
      {
        q: "How much weight does it add?",
        a: "We use lightweight media and containers so a fully planted bed stays well under 60 kg per sq m saturated, within the design load of a standard RCC roof. Heavier features are placed over beams.",
      },
      {
        q: "What can I grow on a Chennai terrace?",
        a: "Tomato, brinjal, chilli, okra, gourds, spinach, amaranth, curry leaf, mint, coriander, lemon, guava and papaya all do well. We plan by season so something is always ready to pick.",
      },
      {
        q: "How much time does it take to look after?",
        a: "With drip irrigation on a timer, 15 to 20 minutes a day for harvesting and checking is enough. We also offer a maintenance plan if you prefer to only harvest.",
      },
    ],
    related: ["vertical-garden", "garden-maintenance", "landscaping"],
  },
  {
    slug: "gift-plants",
    name: "Gift Plants",
    short: "Bulk potted plants for corporate gifting, onboarding and events. Minimum 50 pieces.",
    summary:
      "Succulents, air plants, money plants and flowering plants in branded or handmade pots, packed and delivered on your date. Minimum order is 50 pieces.",
    image: unsplash("1509423350716-97f9360b4e09", 1200, 1500),
    imageAlt: "Aloe plant in a white ceramic pot on a plain background",
    heroLine: "Gifts that keep growing.",
    intro:
      "A plant is the rare gift that is still on someone's desk a year later. We prepare bulk orders of healthy, rooted plants in pots you choose, with your branding, message card and care instructions, delivered anywhere in Chennai.",
    included: [
      "Plant selection by budget, occasion and survivability",
      "Terracotta, ceramic, jute-wrapped or branded pots",
      "Custom tag, message card and simple care guide",
      "Logo printing or engraving on pots",
      "Individual packaging and boxed delivery",
      "Delivery to one venue or multiple offices in Chennai",
    ],
    forWhom: [
      "Corporate gifting: onboarding, Diwali, anniversaries, client thank-yous",
      "Wedding return gifts and engagement favours",
      "Conference, seminar and launch giveaways",
      "Housewarming, school and CSR events",
    ],
    pricingNote:
      "Gift plants are priced per piece from ₹120 (money plant in a jute-wrapped pot) to ₹650 (succulent trio in a branded ceramic pot). Minimum order is 50 pieces. Branding and delivery are itemised in the quote.",
    duration: "Lead time 7 to 10 days for orders up to 500 pieces",
    note: "Minimum order 50 pieces",
    faqs: [
      {
        q: "What is the minimum order?",
        a: "Fifty pieces. Below that, we recommend a local nursery. Above 500 pieces, allow two to three weeks.",
      },
      {
        q: "Can you print our logo on the pots?",
        a: "Yes. Screen printing on ceramic and terracotta, engraving on wood, and printed tags for jute-wrapped pots.",
      },
      {
        q: "Which plants travel and last best?",
        a: "Succulents, Sansevieria, Zamioculcas, money plant and Peace lily. All are hard to kill and suit an office desk.",
      },
      {
        q: "Do you deliver outside Chennai?",
        a: "We deliver across Chennai. For other cities we ship boxed succulents by courier.",
      },
    ],
    related: ["plant-rental", "vertical-garden", "terrace-gardening"],
  },
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}

export function getRelated(service) {
  return service.related.map(getService).filter(Boolean);
}

export const generalFaqs = [
  {
    q: "What does an office plant rental plan include?",
    a: "The plants, the planters, delivery and installation, a weekly maintenance visit and free replacement of anything that declines. Nothing is bought, and nobody on your team has to look after them.",
  },
  {
    q: "Why rent plants instead of buying them?",
    a: "Buying ties up capital in an asset that depreciates and still needs someone to water it. Renting turns the whole thing into one operating expense, with maintenance and replacement included. If a plant dies, it is our cost, not yours.",
  },
  {
    q: "What happens on the weekly visit?",
    a: "Watering to the right level for each species, pruning, feeding, cleaning dust off the leaves and rotating plants toward the light. Anything struggling is flagged or swapped on the spot.",
  },
  {
    q: "Is there a minimum term?",
    a: "The monthly plan runs month to month with 30 days' notice. Quarterly and annual plans commit for their cycle in exchange for a better rate per plant, and can be resized as your office grows.",
  },
  {
    q: "Can you cover several offices or cities?",
    a: "Across Chennai and its suburbs, yes, on a single contract with one invoice and one point of contact.",
  },
  {
    q: "Do you still design and build gardens?",
    a: "Yes. Landscaping, vertical gardens, terrace gardens, maintenance plans and bulk gift plants all continue, for commercial sites and homes alike. Rental is what most offices start with.",
  },
  {
    q: "How do I get a quote?",
    a: `Call or WhatsApp ${site.phoneDisplay}, or send the form on our contact page with your location and roughly how much space you want planted. We reply the same working day.`,
  },
];

export const testimonials = [
  {
    quote:
      "Sixty plants across two floors on OMR, and not one has looked tired for more than a week. The team comes every Tuesday and we have stopped thinking about it.",
    name: "Facilities lead, IT company, OMR",
    service: "Office plant rental",
  },
  {
    quote:
      "We move desks every quarter. Renting means the greenery moves with us instead of becoming furniture we own and cannot place.",
    name: "Operations manager, start-up, Guindy",
    service: "Office plant rental",
  },
  {
    quote:
      "The reception is the first thing our customers see. It has looked composed every single day since the plants went in, which is exactly what we were paying for.",
    name: "Branch head, NBFC, T. Nagar",
    service: "Office plant rental",
  },
];

export const process = [
  {
    title: "Tell us about the space",
    body: "Call, WhatsApp or send the form with your location and roughly how many floors or areas you want planted. We reply the same working day.",
  },
  {
    title: "Walk-through and proposal",
    body: "We walk the floor, map the light and layout, and send a plan with a plant palette, planter options and your plan tier priced out.",
  },
  {
    title: "We install, then we maintain",
    body: "Plants arrive placed and styled on the agreed date. After that a trained team visits every week, and anything that declines is replaced free.",
  },
];

export const reasons = [
  {
    title: "Fully managed, start to finish",
    body: "Design, delivery, installation, weekly care and replacement by one team. Nobody on your staff picks up a watering can.",
  },
  {
    title: "No capital outlay",
    body: "Plants and planters stay ours. You pay a predictable fee on one invoice, as an operating expense rather than a depreciating asset.",
  },
  {
    title: "Replacement is our problem",
    body: "If a plant declines, we spot it on the weekly visit and swap it at no cost. You never pay twice for the same corner of the office.",
  },
  {
    title: "Chosen for Chennai interiors",
    body: "Species picked for full air conditioning, low natural light and hard water. No imported palettes that give up in the first month.",
  },
  {
    title: "Scales with you",
    body: "Start with one floor, extend to the whole building, add another site. Plans resize from the next cycle without renegotiating anything.",
  },
  {
    title: "Styled, not just supplied",
    body: "Reception, cabins and breakout areas each get their own treatment, with planters matched to your interiors and your brand.",
  },
];

export const stats = [
  { value: "2024", label: "founded in Chennai" },
  { value: "Weekly", label: "maintenance visits, included" },
  { value: "Zero", label: "cost to replace a plant that dies" },
];
