export interface PartnerSlot {
  id: string;
  name: string;
  note: string;
}

export interface ReviewSlot {
  id: string;
  clientRole: string;
  officeArea: string;
  reviewQuote: string;
  isPlaceholder: boolean;
}

export const partnerLogoSlots: PartnerSlot[] = [
  { id: "partner-1", name: "[Client Corporate Partner Logo 1]", note: "To be supplied by client: e.g. Tech park or corporate client" },
  { id: "partner-2", name: "[Client Corporate Partner Logo 2]", note: "To be supplied by client: e.g. Consulting firm or agency" },
  { id: "partner-3", name: "[Client Corporate Partner Logo 3]", note: "To be supplied by client: e.g. Coworking space partner" },
  { id: "partner-4", name: "[Client Corporate Partner Logo 4]", note: "To be supplied by client: e.g. Startup hub" },
];

export const reviewSlots: ReviewSlot[] = [
  {
    id: "rev-1",
    clientRole: "Senior Product Designer [Client to provide real name]",
    officeArea: "Cyber City, DLF Phase 2",
    reviewQuote:
      "“[Client to provide verified review quote: The 10-minute delivery is genuinely a lifesaver during tight release weeks. The paneer and dal taste exactly like home, not commercial hotel food.]”",
    isPlaceholder: true,
  },
  {
    id: "rev-2",
    clientRole: "HR Director, 80-member Tech Team [Client to provide real name]",
    officeArea: "Golf Course Road Hub",
    reviewQuote:
      "“[Client to provide verified review quote: We started Lunch Bag passes as a workplace perk for our engineers. Afternoon energy is noticeably better with zero palm oil food.]”",
    isPlaceholder: true,
  },
  {
    id: "rev-3",
    clientRole: "Finance Associate [Client to provide real name]",
    officeArea: "Udyog Vihar Phase 3",
    reviewQuote:
      "“[Client to provide verified review quote: Pocket-friendly, piping hot, and 100% pure veg. The skip-day flexibility on the 20-day pass makes it unbeatable.]”",
    isPlaceholder: true,
  },
];
