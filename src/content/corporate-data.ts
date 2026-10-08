export interface CorporateBenefit {
  title: string;
  description: string;
  iconName: "building" | "dollar-sign" | "smile" | "clock" | "heart" | "award";
}

export const corporateBenefits: CorporateBenefit[] = [
  {
    title: "Zero Food Court Chaos",
    description: "Eliminate the 45-minute daily scramble down to crowded mall food courts. Wholesome hot food arrives right at your office cafeteria.",
    iconName: "clock",
  },
  {
    title: "Productive, Post-Lunch Energy",
    description: "Traditional heavy restaurant food loaded with palm oil causes intense 2 PM afternoon slumps. Our light homestyle meals keep employees energized.",
    iconName: "heart",
  },
  {
    title: "Flexible Subsidy Models",
    description: "100% company-sponsored, 50-50 co-pay, or fully employee-paid with consolidated corporate tax-deductible GST invoicing.",
    iconName: "dollar-sign",
  },
  {
    title: "Strict Pure Veg & Hygiene Assurance",
    description: "Separate pure-vegetarian facility with daily temperature checks, premium cold-pressed oils, and zero synthetic food coloring.",
    iconName: "award",
  },
  {
    title: "Dedicated Office Hub Coordinator",
    description: "A single point of contact runner stationed at your building ensuring hot, synchronized deliveries for all teams every single noon.",
    iconName: "building",
  },
  {
    title: "Delighted Team Retention",
    description: "Consistently rated one of the most loved everyday employee perks. Fresh mother's-kitchen food shows your team you genuinely care.",
    iconName: "smile",
  },
];

export const corporateSteps = [
  {
    step: "01",
    title: "Tell Us Your Team Size",
    desc: "Share your office location, headcount, and preferred meal schedule (daily, weekly team sync days, or monthly pass perks).",
  },
  {
    step: "02",
    title: "Enjoy a Free Office Tasting Session",
    desc: "We deliver full sample hot thalis to your HR and leadership team to taste the home-cooked quality firsthand.",
  },
  {
    step: "03",
    title: "Seamless Daily Hub Staging",
    desc: "We set up an insulated staging drop at your lobby or pantry. Meals arrive in under 10 minutes at the exact team lunchtime.",
  },
];
