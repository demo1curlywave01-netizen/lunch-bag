export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  subtext: string;
  speedTickerText: string;
  regularPrice: number;
  specialPrice: number;
  fssaiNumber: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  deliveryHubs: string[];
  deliverySlots: string[];
  whatsAppNumber: string;
  whatsAppDefaultMessage: string;
  navItems: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "Lunch Bag",
  tagline: "North + South Indian Homestyle Lunch. At Your Desk in 10 Minutes.",
  subtext:
    "Pure vegetarian, authentic North + South Indian combo meals delivered fresh and piping hot to your office across Hyderabad. No artificial colors, no palm oil, just pure homestyle goodness.",
  speedTickerText: "Hyderabad Office Express: Special ₹179 Lunch Offer (Reg. ₹219) • Despatched fresh from nearest staging hub in under 10 mins!",
  regularPrice: 219,
  specialPrice: 179,
  fssaiNumber: "",
  contactEmail: "hello@lunchbag.in",
  contactPhone: "+91 9985590101",
  address: "Central Cloud Kitchen & Staging Hubs, HITEC City & Madhapur, Hyderabad",
  deliveryHubs: [
    "HITEX Exhibition Centre",
    "Genome Valley, Biotech Park",
    "Nacharam Industrial Area / Habsiguda / HMT Nagar",
    "Jeedimetla Industrial Area",
    "Suchitra / Alwal / Quthbullapur / Kompally",
    "ASRao Nagar / Sainikpuri",
    "Madhapur / HITEC City",
    "Kukatpally / Balanagar",
    "Paradise / Begumpet / Ameerpet",
    "Rest of Hyderabad / Secunderabad",
  ],
  deliverySlots: [
    "12:00 – 1:00 PM",
    "1:00 – 2:00 PM",
    "2:00 – 3:00 PM",
  ],
  whatsAppNumber: "919985590101",
  whatsAppDefaultMessage: "Hi Lunch Bag team, I'd like to order the ₹179 Special North + South Indian Combo Lunch Meal to my office desk in Hyderabad!",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Lunch Passes", href: "/passes" },
    { label: "For Companies", href: "/companies" },
    { label: "Our Story", href: "/story" },
  ],
};
