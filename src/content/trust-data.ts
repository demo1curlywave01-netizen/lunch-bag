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
  { id: "partner-1", name: "[Hyderabad Tech Park Partner 1]", note: "To be supplied by client: e.g. HITEC City Tech Park or IT campus" },
  { id: "partner-2", name: "[Genome Valley Biotech Firm 2]", note: "To be supplied by client: e.g. Pharma or Biotech campus" },
  { id: "partner-3", name: "[Hyderabad Coworking Space 3]", note: "To be supplied by client: e.g. WeWork / Awfis / Innov8 Madhapur" },
  { id: "partner-4", name: "[Industrial Area Client 4]", note: "To be supplied by client: e.g. Nacharam or Jeedimetla office" },
];

export const reviewSlots: ReviewSlot[] = [
  {
    id: "rev-1",
    clientRole: "Senior Software Engineer [Client to provide real name]",
    officeArea: "Madhapur / HITEC City",
    reviewQuote:
      "“[Client to provide verified review quote: The North + South Indian combo is pure genius. Having hot phulkas with authentic Gongura Pappu and paneer subzi delivered straight to my desk in 10 minutes saves my workday.]”",
    isPlaceholder: true,
  },
  {
    id: "rev-2",
    clientRole: "HR Director, 120-member Tech Team [Client to provide real name]",
    officeArea: "Genome Valley Biotech Park",
    reviewQuote:
      "“[Client to provide verified review quote: We started Lunch Bag monthly passes for our team. The zero palm oil cooking and hygienic separate vegetarian setup keeps afternoon energy high and post-lunch drowsiness away.]”",
    isPlaceholder: true,
  },
  {
    id: "rev-3",
    clientRole: "Operations Lead [Client to provide real name]",
    officeArea: "HITEX Exhibition Centre / Kondapur",
    reviewQuote:
      "“[Client to provide verified review quote: The ₹179 special price for a full 14-item thali with Bisleri water is unbeatable in Hyderabad. Skip-meal flexibility in the web account is super convenient.]”",
    isPlaceholder: true,
  },
];
