export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  subtext: string;
  speedTickerText: string;
  fssaiNumber: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  deliveryHubs: string[];
  whatsAppNumber: string;
  whatsAppDefaultMessage: string;
  navItems: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "Lunch Bag",
  tagline: "Your Favorite Meals. At Your Desk in 10 Minutes.",
  subtext:
    "Pure vegetarian, hygienic, and incredibly pocket-friendly homemade lunch delivered fresh to your office. No artificial colors, no palm oil, just pure goodness.",
  speedTickerText: "Eat Fresh in 10 Mins: Grab your warm, healthy lunch from our nearest delivery rider.",
  // Client placeholders as per strict prompt rules (never invent fake numbers/licenses)
  fssaiNumber: "FSSAI Lic. No.: [to be added by client]",
  contactEmail: "hello@lunchbag.in [to be verified]",
  contactPhone: "+91 98XXX XXXXX [to be provided]",
  address: "Central Cloud Kitchen & Staging Hubs, Cyber City [Exact address to be added]",
  deliveryHubs: [
    "Cyber City Hub A (Building 8 & 10)",
    "Golf Course Road Hub (One Horizon area)",
    "Udyog Vihar Hub (Phase 2 & 3)",
    "Sector 44 Tech Park Hub",
  ],
  whatsAppNumber: "919999999999", // Placeholder WhatsApp
  whatsAppDefaultMessage: "Hi Lunch Bag team, I'd like to ask about daily homemade lunch delivery to my office desk!",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Lunch Passes", href: "/passes" },
    { label: "For Companies", href: "/companies" },
    { label: "Our Story", href: "/story" },
  ],
};
