export interface ComboMealInclusion {
  name: string;
  category: "Rice" | "Breads" | "Dal & Pappu" | "Curries" | "Curd & Sides" | "Sweet" | "Accompaniments";
  description: string;
  badge?: string;
  image: string;
}

export interface SingleMenuData {
  title: string;
  subtitle: string;
  description: string;
  cuisineTag: string;
  regularPrice: number;
  specialPrice: number;
  regularPriceFormatted: string;
  specialPriceFormatted: string;
  discountPercentage: string;
  priceNote: string;
  variationNote: string;
  caloriesApprox: number;
  proteinApprox: string;
  highlights: string[];
  inclusions: ComboMealInclusion[];
  items: ComboMealInclusion[];
}

const baseInclusions: ComboMealInclusion[] = [
  {
    name: "Steamed Rice",
    category: "Rice",
    description: "Aged long-grain basmati rice, steamed fluffy & light on digestion.",
    badge: "Basmati",
    image: "/images/inclusions/steamed-rice.jpg",
  },
  {
    name: "Chapati / Phulka / Lachha Paratha",
    category: "Breads",
    description: "100% whole-wheat chakki fresh atta, hand-rolled and puffed soft on open iron flame.",
    badge: "Fresh Baked",
    image: "/images/inclusions/phulkas-rotis.jpg",
  },
  {
    name: "Dal (Palak Kura / Gongura / Chukkakura / Bachali Kura Pappu / Dal Fry)",
    category: "Dal & Pappu",
    description: "Slow-simmered homestyle dal prepared with traditional leafy greens & desi ghee tadka.",
    badge: "Varies Daily",
    image: "/images/inclusions/dal-pappu.jpg",
  },
  {
    name: "Dry Veg Curry (South Indian / North Indian Style)",
    category: "Curries",
    description: "Seasoned seasonal vegetable poriyal / dry sabzi tossed with cumin, curry leaves & spices.",
    badge: "Daily Special",
    image: "/images/inclusions/dry-veg-curry.jpg",
  },
  {
    name: "Wet Veg Curry (South Indian / North Indian Style)",
    category: "Curries",
    description: "Rich gravy curry (such as Paneer butter masala, Malai kofta, or Veg kurma) cooked with zero artificial coloring.",
    badge: "Daily Special",
    image: "/images/inclusions/wet-veg-curry.jpg",
  },
  {
    name: "Amul Curd / Raita / Curd Rice",
    category: "Curd & Sides",
    description: "Cooling fresh Amul dahi, cucumber-boondi raita, or South Indian temple-style curd rice with mustard tempering.",
    badge: "Cooling",
    image: "/images/inclusions/curd-rice.jpg",
  },
  {
    name: "Chutney / Pachadi",
    category: "Curd & Sides",
    description: "Freshly ground South Indian stone-ground pachadi (tomato, gongura, or peanut-coconut).",
    badge: "Authentic",
    image: "/images/inclusions/pachadi-chutney.jpg",
  },
  {
    name: "Fryums",
    category: "Accompaniments",
    description: "Crispy, crunchy fryums/papads packed separately to retain crunch.",
    badge: "Crunchy",
    image: "/images/inclusions/fryums-papad.jpg",
  },
  {
    name: "Sweet (Gulab Jamun / Rasgulla)",
    category: "Sweet",
    description: "Warm melt-in-mouth khoya gulab jamun or delicate spongy Kolkata rasgulla.",
    badge: "Dessert",
    image: "/images/inclusions/sweet-gulab-jamun.jpg",
  },
  {
    name: "Pickle Sachet",
    category: "Accompaniments",
    description: "Tangy homestyle mango/lime pickle sachet.",
    image: "/images/inclusions/pickle-sachet.jpg",
  },
  {
    name: "Salt Sachet",
    category: "Accompaniments",
    description: "Iodized salt sachet for custom seasoning.",
    image: "/images/inclusions/salt-sachet.jpg",
  },
  {
    name: "Bisleri Water Bottle (200 ml)",
    category: "Accompaniments",
    description: "Sealed, hygienic 200 ml Bisleri packaged drinking water.",
    badge: "Packaged Water",
    image: "/images/inclusions/bisleri-water.jpg",
  },
  {
    name: "Spoon / Fork & Napkin Set",
    category: "Accompaniments",
    description: "Biodegradable eco cutlery and absorbent 2-ply soft paper napkin.",
    badge: "Hygienic Kit",
    image: "/images/inclusions/cutlery-napkin.jpg",
  },
  {
    name: "Mouth Freshener Sachet",
    category: "Accompaniments",
    description: "Sweet fennel & cardamom mukhwas sachet for the perfect post-lunch refresher.",
    image: "/images/inclusions/mouth-freshener.jpg",
  },
];

export const singleComboMenu: SingleMenuData = {
  title: "Special North + South Indian Combo Lunch Meal",
  subtitle: "Authentic, wholesome homestyle comfort cooked fresh every morning in cold-pressed oils & pure desi ghee",
  description: "Authentic, wholesome homestyle comfort cooked fresh every morning in cold-pressed oils & pure desi ghee",
  cuisineTag: "North + South Indian Pure Veg Combo",
  regularPrice: 219,
  specialPrice: 179,
  regularPriceFormatted: "₹219",
  specialPriceFormatted: "₹179",
  discountPercentage: "Save 18% (₹40 OFF)",
  priceNote: "Special price if ordered via WhatsApp or website (Regular: ₹219)",
  variationNote: "Veg curry and dal options vary on different days.",
  caloriesApprox: 620,
  proteinApprox: "24g plant protein",
  highlights: [
    "North + South Fusion",
    "100% Pure Veg Facility",
    "Zero Palm Oil Guarantee",
    "Bisleri Water (200ml) Included",
    "Official 5-Tier Bag Delivery",
  ],
  inclusions: baseInclusions,
  items: baseInclusions,
};

// Backward compatible export for legacy calendar widgets
export interface MenuItem {
  name: string;
  category: string;
  portion: string;
  description: string;
}

export interface DayThali {
  dayId: string;
  dayName: string;
  tagline: string;
  thaliTitle: string;
  description: string;
  items: ComboMealInclusion[];
  highlight: string;
  priceFormatted: string;
  priceNote: string;
  accentColor: string;
  specialSweet: string;
}

export const weeklyMenu: DayThali[] = [
  {
    dayId: "single-daily-combo",
    dayName: "Daily Meal",
    tagline: "North + South Fusion",
    thaliTitle: singleComboMenu.title,
    description: singleComboMenu.subtitle,
    items: baseInclusions,
    highlight: "14 Inclusions",
    priceFormatted: "₹179",
    priceNote: "Regular: ₹219",
    accentColor: "#C85A27",
    specialSweet: "Gulab Jamun / Rasgulla",
  },
];
