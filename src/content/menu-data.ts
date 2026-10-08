export interface ThaliItem {
  name: string;
  category: "Mains" | "Dal" | "Breads" | "Rice" | "Sides" | "Sweet";
  description: string;
}

export interface DailyMenu {
  dayId: "mon" | "tue" | "wed" | "thu" | "fri";
  dayName: string;
  isAvailable: boolean;
  thaliTitle: string;
  thaliSubtitle: string;
  description: string;
  priceFormatted: string;
  priceNote: string;
  caloriesApprox: number;
  proteinApprox: string;
  mediaSlotKey: string;
  items: ThaliItem[];
  highlights: string[];
}

export const weeklyMenu: DailyMenu[] = [
  {
    dayId: "mon",
    dayName: "Monday",
    isAvailable: true,
    thaliTitle: "Shahi Paneer & Tadka Thali",
    thaliSubtitle: "Rich comfort to power through the Monday sprint",
    description:
      "Tender malai paneer simmered in velvety cashew-tomato gravy, accompanied by homestyle yellow dal tadka, 3 hand-rolled phulkas, fragrant jeera rice, and a melt-in-mouth gulab jamun.",
    priceFormatted: "₹149",
    priceNote: "[price to be confirmed by client]",
    caloriesApprox: 580,
    proteinApprox: "22g protein",
    mediaSlotKey: "thaliMonday",
    highlights: ["Fresh Malai Paneer", "Cold-Pressed Ghee", "Zero Preservatives"],
    items: [
      { name: "Shahi Paneer", category: "Mains", description: "Soft cubes in a delicate cashew-tomato gravy with zero artificial color" },
      { name: "Homestyle Dal Tadka", category: "Dal", description: "Yellow arhar dal tempered with cumin, garlic & desi ghee" },
      { name: "3 Whole Wheat Phulkas", category: "Breads", description: "100% chakki fresh wheat, puffed on open flame" },
      { name: "Steamed Jeera Basmati Rice", category: "Rice", description: "Aged long-grain basmati with roasted cumin" },
      { name: "Crisp Kachumber Salad", category: "Sides", description: "Cucumber, carrot, radish with fresh lemon dressing" },
      { name: "Warm Gulab Jamun", category: "Sweet", description: "Traditional khoya sweet lightly flavored with cardamom" },
    ],
  },
  {
    dayId: "tue",
    dayName: "Tuesday",
    isAvailable: true,
    thaliTitle: "Amritsari Rajma & Aloo Gobhi Thali",
    thaliSubtitle: "Pure nostalgia just like maa makes at home",
    description:
      "Slow-cooked Kashmiri rajma cooked overnight with ginger, roasted cumin, and tomato broth, served with homestyle adraki aloo gobhi, 3 hot rotis, steamed rice, and chilled kheer.",
    priceFormatted: "₹149",
    priceNote: "[price to be confirmed by client]",
    caloriesApprox: 560,
    proteinApprox: "24g protein",
    mediaSlotKey: "thaliTuesday",
    highlights: ["Overnight Slow Cooked", "High Dietary Fiber", "Zero Palm Oil"],
    items: [
      { name: "Amritsari Rajma Masala", category: "Mains", description: "Simmered 6+ hours with ginger-tomato reduction" },
      { name: "Adraki Aloo Gobhi", category: "Sides", description: "Tender cauliflower florets spiced with julienned ginger" },
      { name: "3 Soft Wheat Phulkas", category: "Breads", description: "Made fresh 15 mins before dispatch" },
      { name: "Steamed Basmati Rice", category: "Rice", description: "Fluffy steamed rice — best friend to rajma" },
      { name: "Mint & Boondi Raita", category: "Sides", description: "Fresh curd infused with roasted cumin & mint leaves" },
      { name: "Rice Kheer", category: "Sweet", description: "Slow-reduced milk with crushed rice & almonds" },
    ],
  },
  {
    dayId: "wed",
    dayName: "Wednesday",
    isAvailable: true,
    thaliTitle: "Dal Makhani & Kadhai Paneer Deluxe",
    thaliSubtitle: "Midweek energy booster with authentic Punjabi flavors",
    description:
      "Silky dal makhani simmered for 12 hours with dollops of fresh white butter (makkhan), alongside wok-tossed kadhai paneer with bell peppers, 3 hot rotis, peas pulao, and moong dal halwa.",
    priceFormatted: "₹159",
    priceNote: "[price to be confirmed by client]",
    caloriesApprox: 620,
    proteinApprox: "25g protein",
    mediaSlotKey: "thaliWednesday",
    highlights: ["12-Hr Slow Cooked", "Fresh Bell Peppers", "Desi Makkhan"],
    items: [
      { name: "Kadhai Paneer Masala", category: "Mains", description: "Crisp bell peppers and fresh cottage cheese in pounded spices" },
      { name: "Signature Dal Makhani", category: "Dal", description: "Black urad dal slow-cooked overnight with white butter" },
      { name: "3 Ghee-Glazed Phulkas", category: "Breads", description: "Lightly touched with pure cow ghee" },
      { name: "Green Peas Pulao", category: "Rice", description: "Fragrant basmati rice tossed with sweet green peas" },
      { name: "Spiced Onion & Lemon Salad", category: "Sides", description: "Sliced red onions with chat masala & green chili" },
      { name: "Moong Dal Halwa", category: "Sweet", description: "Rich slow-roasted yellow lentil pudding" },
    ],
  },
  {
    dayId: "thu",
    dayName: "Thursday",
    isAvailable: true,
    thaliTitle: "Methi Malai Paneer & Panchmel Dal",
    thaliSubtitle: "Aromatic herbs and wholesome nutrition in every bite",
    description:
      "Fresh fenugreek leaves (methi) and creamy paneer in a mildly spiced almond-onion gravy, paired with Rajasthan-style panchmel dal (5 lentils), 3 soft phulkas, jeera rice, and sweet boondi.",
    priceFormatted: "₹149",
    priceNote: "[price to be confirmed by client]",
    caloriesApprox: 575,
    proteinApprox: "23g protein",
    mediaSlotKey: "thaliThursday",
    highlights: ["5-Lentil Protein Mix", "Fresh Green Methi", "Light On Stomach"],
    items: [
      { name: "Methi Malai Paneer", category: "Mains", description: "Fresh fenugreek leaves cooked with paneer in a delicate gravy" },
      { name: "Panchmel Dal", category: "Dal", description: "Wholesome blend of 5 protein-packed lentils" },
      { name: "3 Whole Wheat Phulkas", category: "Breads", description: "100% whole grain chakki atta" },
      { name: "Jeera Basmati Rice", category: "Rice", description: "Fluffy rice with roasted cumin seeds" },
      { name: "Cucumber Carrot Crunch", category: "Sides", description: "Freshly chopped seasonal vegetables" },
      { name: "Sweet Kesari Boondi", category: "Sweet", description: "Saffron-infused crispy droplets" },
    ],
  },
  {
    dayId: "fri",
    dayName: "Friday",
    isAvailable: true,
    thaliTitle: "Paneer Tikka Masala & Pindi Chhole",
    thaliSubtitle: "The celebratory Friday office feast",
    description:
      "Tandoori-spiced paneer chunks in a robust tomato gravy, paired with tangy Rawalpindi-style black chhole, 3 soft phulkas, vegetable biryani rice, boondi raita, and spongy rasgulla.",
    priceFormatted: "₹159",
    priceNote: "[price to be confirmed by client]",
    caloriesApprox: 630,
    proteinApprox: "26g protein",
    mediaSlotKey: "thaliFriday",
    highlights: ["Friday Celebration", "Pindi Spiced Chhole", "Spongy Rasgulla"],
    items: [
      { name: "Paneer Tikka Masala", category: "Mains", description: "Smoked paneer cubes tossed in onion-tomato masala" },
      { name: "Authentic Pindi Chhole", category: "Dal", description: "Dark spiced chickpeas brewed with tea leaves and anardana" },
      { name: "3 Soft Phulkas", category: "Breads", description: "Steaming hot phulkas wrapped in butter paper" },
      { name: "Vegetable Biryani Rice", category: "Rice", description: "Long-grain rice layered with carrots, beans & mint" },
      { name: "Chilled Boondi Raita", category: "Sides", description: "Spiced thick yogurt with crispy chickpea pearls" },
      { name: "Kolkata Rasgulla", category: "Sweet", description: "Delicate cottage cheese sphere soaked in light syrup" },
    ],
  },
];
