export interface MediaSlot {
  id: string;
  name: string;
  path: string;
  fallbackPoster?: string;
  alt: string;
  aspectRatio: string;
  recommendedResolution: string;
  intendedSubject: string;
  type: "image" | "video";
}

export const mediaSlots: Record<string, MediaSlot> = {
  heroCombo: {
    id: "hero_combo_thali",
    name: "Hero North + South Combo Spread",
    path: "/images/slots/hero-combo-thali.jpg",
    fallbackPoster: "/images/slots/hero-combo-thali.jpg",
    alt: "Steaming hot pure-veg North + South Indian combo meal with rice, phulka, Palak Kura Pappu, curries, curd rice, pachadi, fryums and sweet",
    aspectRatio: "16:9",
    recommendedResolution: "1920x1080",
    intendedSubject: "Rich complete 14-item North + South Indian office meal spread with authentic home style warmth",
    type: "image",
  },
  heroVideo: {
    id: "hero_combo_thali",
    name: "Hero North + South Combo Spread",
    path: "/images/slots/hero-combo-thali.jpg",
    fallbackPoster: "/images/slots/hero-combo-thali.jpg",
    alt: "Steaming hot pure-veg North + South Indian combo meal with rice, phulka, Palak Kura Pappu, curries, curd rice, pachadi, fryums and sweet",
    aspectRatio: "16:9",
    recommendedResolution: "1920x1080",
    intendedSubject: "Rich complete 14-item North + South Indian office meal spread with authentic home style warmth",
    type: "image",
  },
  thaliMonday: {
    id: "hero_combo_thali",
    name: "Daily Executive Combo Meal",
    path: "/images/slots/hero-combo-thali.jpg",
    fallbackPoster: "/images/slots/hero-combo-thali.jpg",
    alt: "North + South Indian Executive Combo Lunch Meal Spread",
    aspectRatio: "16:9",
    recommendedResolution: "1920x1080",
    intendedSubject: "North + South Indian daily executive combo meal",
    type: "image",
  },
  southCombo: {
    id: "south_combo_banner",
    name: "South Indian Pappu & Pachadi Feast",
    path: "/images/slots/south-combo-banner.jpg",
    fallbackPoster: "/images/slots/south-combo-banner.jpg",
    alt: "Authentic South Indian Hyderabad lunch spread with Palak Kura Pappu, tomato pachadi, curd rice and warm phulkas",
    aspectRatio: "16:9",
    recommendedResolution: "1920x1080",
    intendedSubject: "South Indian regional thali with aromatic lentils and freshly ground stone chutney",
    type: "image",
  },
  hyderabadOffice: {
    id: "hyderabad_office_lunch",
    name: "Hyderabad Tech Park Delivery",
    path: "/images/slots/hyderabad-office-lunch.jpg",
    fallbackPoster: "/images/slots/hyderabad-office-lunch.jpg",
    alt: "Corporate professionals in HITEC City Hyderabad enjoying wholesome Lunch Bag combo meal",
    aspectRatio: "16:9",
    recommendedResolution: "1920x1080",
    intendedSubject: "Office team enjoying hot homestyle meals together at work in Hyderabad",
    type: "image",
  },
  founderStory: {
    id: "story_founder",
    name: "Founder Photo Slot",
    path: "/images/slots/story-founder.jpg",
    alt: "Founder of Lunch Bag ensuring authentic spice balance and home kitchen hygiene in Hyderabad",
    aspectRatio: "1:1",
    recommendedResolution: "1000x1000",
    intendedSubject: "Founder in kitchen apron tasting traditional dal recipe",
    type: "image",
  },
  kitchenHygiene: {
    id: "story_kitchen",
    name: "Pure Veg Kitchen Hygiene Slot",
    path: "/images/slots/story-kitchen.jpg",
    alt: "Clean stainless steel 100% vegetarian central kitchen in Hyderabad with strict quality protocols",
    aspectRatio: "16:9",
    recommendedResolution: "1600x900",
    intendedSubject: "Clean hygienic kitchen with chefs wearing hairnets, gloves, cooking fresh rotis on iron tawa",
    type: "image",
  },
  corporateHero: {
    id: "corporate_hero",
    name: "Corporate Lunch Perk Slot",
    path: "/images/slots/hyderabad-office-lunch.jpg",
    fallbackPoster: "/images/slots/hyderabad-office-lunch.jpg",
    alt: "Corporate team enjoying wholesome Lunch Bag thalis together at their office in Hyderabad",
    aspectRatio: "16:9",
    recommendedResolution: "1600x900",
    intendedSubject: "Tech professionals in Hyderabad IT corridor enjoying wholesome Lunch Bag meals",
    type: "image",
  },
  officialBags: {
    id: "official_lunch_bags",
    name: "Official Lunch Bag Signature Packaging",
    path: "/images/slots/official-lunch-bags.jpg",
    fallbackPoster: "/images/slots/official-lunch-bags.jpg",
    alt: "Official branded Lunch Bag packaging featuring 5 stacked hot homestyle meal containers in insulated tote and craft carrier bags",
    aspectRatio: "3:2",
    recommendedResolution: "1024x682",
    intendedSubject: "Signature reusable fabric tote and kraft carry bag stacked with 5 fresh homestyle lunch containers",
    type: "image",
  },
  logo: {
    id: "official_logo",
    name: "Lunch Bag Official Brand Logo",
    path: "/images/logo.png",
    fallbackPoster: "/images/logo.png",
    alt: "Lunch Bag - Homemade Food Official Logo",
    aspectRatio: "1:1",
    recommendedResolution: "900x1024",
    intendedSubject: "Official Lunch Bag brand logo with cutlery, wheat sprig and homemade food tagline",
    type: "image",
  },
};
