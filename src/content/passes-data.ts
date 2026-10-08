export interface PassPlan {
  id: "pass-5-day" | "pass-20-day";
  name: string;
  badge?: string;
  tagline: string;
  pricePerMeal: string;
  totalPriceFormatted: string;
  priceNote: string;
  validityDays: number;
  isPopular?: boolean;
  savings: string;
  features: string[];
  termsSnippet: string;
}

export interface PassFaq {
  question: string;
  answer: string;
}

export const lunchPassPlans: PassPlan[] = [
  {
    id: "pass-5-day",
    name: "5-Day Weekly Pass",
    tagline: "Ideal for a busy work week or testing the Lunch Bag experience",
    pricePerMeal: "₹145 / meal",
    totalPriceFormatted: "₹725",
    priceNote: "[price to be confirmed by client]",
    validityDays: 5,
    isPopular: false,
    savings: "Save ~₹100 vs single orders",
    features: [
      "5 hot, pure-vegetarian rotating thalis (Mon–Fri)",
      "Guaranteed under-10-minute delivery to your desk/hub",
      "Skip or pause any day before 10:30 AM with zero penalty",
      "Free meal rollover to the next week",
      "Eco-friendly insulated hot pouch packaging",
    ],
    termsSnippet: "Valid across any 5 weekdays within 14 calendar days from start date.",
  },
  {
    id: "pass-20-day",
    name: "20-Day Monthly Pass",
    badge: "Best Value • Most Popular",
    tagline: "Automate your entire month's office lunch with zero daily ordering hassle",
    pricePerMeal: "₹130 / meal",
    totalPriceFormatted: "₹2,599",
    priceNote: "[price to be confirmed by client]",
    validityDays: 20,
    isPopular: true,
    savings: "Save ~₹600 + free sweet upgrades",
    features: [
      "20 hot, pure-veg home-style thalis across the month",
      "Priority 10-minute dispatch slot at your chosen time",
      "Pause anytime for leaves/WFH days via WhatsApp or portal",
      "Zero delivery fee or platform surge charges forever",
      "Complimentary chef-special dessert on every Friday",
      "Dedicated WhatsApp concierge for meal scheduling",
    ],
    termsSnippet: "Valid across any 20 weekdays within 45 calendar days. Complete flexibility.",
  },
];

export const passFaqs: PassFaq[] = [
  {
    question: "How does the under 10-minute delivery work?",
    answer:
      "We prepare our fresh meals in our central kitchen and dispatch hot, insulated temperature-controlled batches to pre-staged hubs right outside major office towers (like Cyber City, Udyog Vihar, and Golf Course Road). When your scheduled lunch hour arrives, your assigned runner brings it straight up to your desk or reception in under 10 minutes.",
  },
  {
    question: "What if I take leave or have WFH on a scheduled day?",
    answer:
      "Simply pause or skip that day via WhatsApp before 10:30 AM! Your pass balance never expires prematurely; unused meals roll over automatically to your future workdays.",
  },
  {
    question: "Is the kitchen 100% vegetarian?",
    answer:
      "Yes, absolutely. Lunch Bag operates an exclusively pure-vegetarian, separate kitchen. We never touch non-vegetarian ingredients, egg items, or cheap industrial palm oils. Everything is cooked strictly in heart-healthy oils and pure desi ghee.",
  },
  {
    question: "Can I choose my daily lunch time slot?",
    answer:
      "Yes. During pass checkout, select your preferred delivery window: 12:30 PM, 1:00 PM, or 1:30 PM. You can also modify your slot for upcoming days with quick notice.",
  },
];
