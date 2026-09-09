import { unsplash } from "./site";

export const services = [
  {
    slug: "vertical-garden",
    name: "Vertical Garden",
    short: "Living green walls for compound walls, balconies, lobbies and office facades.",
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
      "Apartment balconies and compound walls",
      "Office receptions, lobbies and cafés",
      "Restaurants and retail facades that want a signature look",
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
    short: "Complete garden design and build for villas, apartments and commercial spaces.",
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
      "Independent houses and villas with front or back yards",
      "Apartment associations redoing common gardens",
      "Farmhouses and weekend homes around Chennai",
      "Offices, schools and hospitals with open ground",
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
    slug: "garden-maintenance",
    name: "Garden Maintenance",
    short: "Scheduled visits that keep lawns, beds and pots healthy all year.",
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
      "Irrigation check and repair, pot and planter care",
      "Replacement of failed plants under the plan",
    ],
    forWhom: [
      "Homeowners who want a good garden without the weekend work",
      "Apartment associations with common gardens and lawns",
      "Offices, showrooms and clinics with planted frontages",
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
      "Independent houses with open terraces",
      "Penthouse and top-floor apartments",
      "Apartment associations creating a shared rooftop garden",
      "Schools and offices that want a green roof for staff",
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
    slug: "plant-rental",
    name: "Plant Rental",
    short: "Indoor plants on monthly rental for offices, hotels and events, maintained by us.",
    summary:
      "Healthy plants in matching planters, delivered, placed and cared for on a monthly plan. If a plant declines, we replace it. You never buy a plant that dies on you.",
    image: unsplash("1592150621744-aca64f48394a", 1200, 1500),
    imageAlt: "A collection of indoor plants in white pots beneath pendant lights",
    heroLine: "Green, on subscription.",
    intro:
      "Offices want plants; nobody wants to water them. Plant rental gives you a curated set of indoor plants in coordinated planters with fortnightly care visits, so the space always looks fresh and the cost sits in operating budget, not capital.",
    included: [
      "Space walk-through and plant plan matched to light and layout",
      "Plants and planters supplied, placed and styled",
      "Fortnightly care visit: watering, cleaning, feeding, rotation",
      "Free replacement of any plant that declines",
      "Seasonal refresh and swaps on request",
      "Short-term rental for events, launches and exhibitions",
    ],
    forWhom: [
      "Offices, co-working spaces and reception areas",
      "Hotels, restaurants and cafés",
      "Hospitals, clinics and showrooms",
      "Events, weddings, launches and exhibitions",
    ],
    pricingNote:
      "Rental is billed monthly per plant, including planter and care. Desk plants start at ₹150 a month, floor plants from ₹450 a month. Minimum plan is 10 plants for three months. Event rentals are quoted per day.",
    duration: "Setup within a week of confirmation, minimum three-month plan",
    faqs: [
      {
        q: "What happens if a plant dies?",
        a: "We replace it at the next visit at no cost. Replacement is built into the rental price.",
      },
      {
        q: "Do you supply the planters?",
        a: "Yes. Choose from fibre, ceramic or metal planters in a finish that suits your interiors. Planters remain ours and are replaced if damaged.",
      },
      {
        q: "Is there a minimum order?",
        a: "Ten plants for three months for offices. For events there is no minimum, and pricing is per day.",
      },
      {
        q: "Can we buy the plants later?",
        a: "Yes. Any plant on rental can be purchased at a depreciated price after six months.",
      },
    ],
    related: ["gift-plants", "vertical-garden", "garden-maintenance"],
  },
  {
    slug: "gift-plants",
    name: "Gift Plants",
    short: "Bulk potted plants for corporate gifting, weddings and events. Minimum 50 pieces.",
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
        a: "We deliver across Chennai and to Kanchipuram, Chengalpattu and Tiruvallur districts. For other cities we ship boxed succulents by courier.",
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
    q: "Which areas of Chennai do you serve?",
    a: "All of Chennai and its suburbs, including Adyar, Anna Nagar, OMR, ECR, Porur, Tambaram and Velachery. For farmhouses and larger projects we travel across Kanchipuram, Chengalpattu and Tiruvallur districts.",
  },
  {
    q: "What happens at the site visit?",
    a: "A gardener visits, measures and checks light, water and drainage, then you receive a written estimate within three working days. The visit is a paid call-out; we confirm the charge when you book.",
  },
  {
    q: "How quickly can you start?",
    a: "Maintenance and plant rental can start within a week. Vertical gardens and terrace gardens usually start within two weeks. Landscaping starts after the design is approved.",
  },
  {
    q: "Do you offer a guarantee?",
    a: "Plants we install are covered for 30 days, and for the full duration of any maintenance plan. Irrigation systems carry a one-year workmanship warranty.",
  },
  {
    q: "How do I get a quote?",
    a: "Call or WhatsApp +91 90250 83535, or send the form on our contact page with your location and what you have in mind. We reply the same working day.",
  },
];

export const testimonials = [
  {
    quote:
      "Our compound wall in Adyar was the ugliest part of the house. Now it is the first thing guests photograph. The irrigation just works.",
    name: "Homeowner, Adyar",
    service: "Vertical garden",
  },
  {
    quote:
      "They kept the terrace dry, which was my only worry. We have picked brinjal, chilli and spinach every week since October.",
    name: "Penthouse owner, Anna Nagar",
    service: "Terrace garden",
  },
  {
    quote:
      "Sixty plants for our office on OMR on a rental plan. Since the first month, not one has looked tired for more than a fortnight.",
    name: "Facilities lead, IT company, OMR",
    service: "Plant rental",
  },
];

export const process = [
  {
    title: "Call or send the form",
    body: "Tell us the location and what you have in mind. We reply the same working day and fix a time.",
  },
  {
    title: "Site visit and quote",
    body: "A gardener measures, checks light, water and drainage, and sends a written estimate within three days.",
  },
  {
    title: "We build, then we care",
    body: "Installation on the agreed dates, a handover walk-through and a maintenance plan if you want one.",
  },
];

export const reasons = [
  {
    title: "Built for Chennai heat",
    body: "Every plant list is drawn from what survives our summers and our hard water. No imported palettes that die in May.",
  },
  {
    title: "One team, start to finish",
    body: "Design, installation, irrigation and maintenance by the same people. No handovers between contractors.",
  },
  {
    title: "Fixed quotes, photo reports",
    body: "Written estimates before work starts. A short photo report after every maintenance visit.",
  },
];

export const stats = [
  { value: "2025", label: "founded in Chennai" },
  { value: "6", label: "services, one team" },
  { value: "48h", label: "typical time to a site visit" },
];
