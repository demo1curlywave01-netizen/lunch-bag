export interface PassPlan {
  id: "pass-daily" | "pass-6-day" | "pass-24-day";
  name: string;
  badge?: string;
  tagline: string;
  pricePerMeal: string;
  regularPricePerMeal?: string;
  totalPriceFormatted: string;
  regularTotalPriceFormatted?: string;
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
    id: "pass-daily",
    name: "Order Daily / Single Meal",
    badge: "Special Web/WhatsApp Offer",
    tagline: "Order today's hot North + South Indian combo lunch without a commitment",
    pricePerMeal: "₹179 special price",
    regularPricePerMeal: "₹219 regular",
    totalPriceFormatted: "₹179",
    regularTotalPriceFormatted: "₹219",
    priceNote: "Special price via website or WhatsApp (Save ₹40 today)",
    validityDays: 1,
    isPopular: false,
    savings: "Save ₹40 off regular ₹219",
    features: [
      "Full 14-item North + South Indian combo meal",
      "Piping hot delivery in our official 5-tier Lunch Bag",
      "Bisleri water (200ml) + sweet + spoon & napkin set included",
      "Guaranteed under-10-minute dispatch from local Hyderabad hub",
      "Free desk delivery with zero platform surge fees",
    ],
    termsSnippet: "Order by 10:45 AM for lunch slot dispatch. Delivered to your office desk.",
  },
  {
    id: "pass-6-day",
    name: "6 Days Lunch Pass",
    badge: "Great Weekly Trial",
    tagline: "Automate your full 6-day work week with authentic homestyle meals",
    pricePerMeal: "₹166.50 / meal",
    regularPricePerMeal: "₹219 regular",
    totalPriceFormatted: "₹999",
    regularTotalPriceFormatted: "₹1,314",
    priceNote: "₹999 total for 6 meals (Save ₹315 vs regular price)",
    validityDays: 6,
    isPopular: false,
    savings: "Save ₹315 vs regular ₹219",
    features: [
      "6 hot North + South Indian rotating combo meals",
      "Guaranteed under-10-minute desk delivery to your Hyderabad office",
      "Skip or pause any meal before 10:30 AM with automatic credit rollover",
      "Direct app access: manage meal days & wallet anytime",
      "Signature 5-tier thermal spill-proof packaging included",
    ],
    termsSnippet: "Valid across any 6 workdays within 18 calendar days. Complete flexibility.",
  },
  {
    id: "pass-24-day",
    name: "24 Days Monthly Pass",
    badge: "Best Value • Most Popular",
    tagline: "Automate your entire month's office lunch with maximum savings & VIP flexibility",
    pricePerMeal: "₹162 / meal",
    regularPricePerMeal: "₹219 regular",
    totalPriceFormatted: "₹3888",
    regularTotalPriceFormatted: "₹5,256",
    priceNote: "₹3,888 total for 24 meals (Save ₹1,368 vs regular price)",
    validityDays: 24,
    isPopular: true,
    savings: "Save ₹1,368 vs regular ₹219",
    features: [
      "24 wholesome North + South Indian combo meals across the month",
      "Priority 10-minute desk dispatch at your chosen slot",
      "Skip any meal before 10:30 AM with 100% wallet credit refund",
      "Control meal schedule & wallet balance directly on web app",
      "Zero delivery fee or platform surge charges forever",
      "Complimentary special dessert upgrade on every Friday",
      "Dedicated WhatsApp concierge for meal scheduling & preferences",
    ],
    termsSnippet: "Valid across any 24 weekdays within 50 calendar days. Unused meals never expire early.",
  },
];

export const passFaqs: PassFaq[] = [
  {
    question: "How does the under 10-minute desk delivery work in Hyderabad?",
    answer:
      "We prepare our fresh North + South combo meals in our central hygienic kitchen and dispatch hot, temperature-controlled batches to pre-staged staging hubs right outside major Hyderabad corporate clusters (like HITEC City, Madhapur, HITEX, Genome Valley, Begumpet, and Jeedimetla). When your chosen lunch slot arrives, our floor runner brings it directly up to your desk or reception in under 10 minutes.",
  },
  {
    question: "What if I take leave, have WFH, or want to skip a meal?",
    answer:
      "Simply skip or pause your meal via your Web Account or WhatsApp before 10:30 AM! Your pass balance never expires prematurely; skipped meals roll over automatically to your future workdays or stay in your wallet.",
  },
  {
    question: "Can I manage my meal days and wallet balance online?",
    answer:
      "Yes! Every Lunch Pass holder gets full app/web access to 'My Pass / Account' where you can control your meal calendar, toggle which days you want food, skip upcoming meals, view transaction history, and recharge your wallet balance anytime.",
  },
  {
    question: "What are the available delivery time slots?",
    answer:
      "We deliver in three convenient time slots: 12:00 – 1:00 PM, 1:00 – 2:00 PM, and 2:00 – 3:00 PM. You can choose your preferred slot when ordering and change it whenever needed.",
  },
  {
    question: "What is included in each combo meal?",
    answer:
      "Each meal is a complete 14-item North + South Indian feast: Steamed Rice, Chapati/Phulka/Lachha Paratha, flavorful Dal (Palak Kura Pappu, Gongura Pappu, etc.), Dry Veg Curry, Wet Veg Curry, Amul Curd / Raita / Curd Rice, Chutney / Pachadi, Fryums, Sweet (Gulab Jamun / Rasgulla), Pickle sachet, Salt sachet, Bisleri water bottle (200 ml), Spoon/fork & napkin set, and Mouth freshener sachet.",
  },
];
