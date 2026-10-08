export interface HealthBadge {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: "leaf" | "home" | "droplet" | "shield-check";
}

export const healthBadges: HealthBadge[] = [
  {
    id: "pure-veg",
    title: "100% Pure Veg",
    subtitle: "Strictly Vegetarian",
    description: "Completely separate, strictly vegetarian kitchen setup. Zero cross-contamination, pure peace of mind.",
    iconName: "leaf",
  },
  {
    id: "truly-homemade",
    title: "Truly Homemade",
    subtitle: "Mother's Kitchen Recipes",
    description: "Prepared with love using authentic, traditional Indian home recipes cooked in small batches.",
    iconName: "home",
  },
  {
    id: "zero-palm-oil",
    title: "Zero Palm Oil",
    subtitle: "Heart-Healthy Cookery",
    description: "Cooked only in cold-pressed mustard, sunflower, and pure desi ghee. Absolutely zero cheap commercial palm oil.",
    iconName: "droplet",
  },
  {
    id: "no-artificial",
    title: "No Artificial Stuff",
    subtitle: "Clean & Wholesome",
    description: "Absolutely no synthetic food coloring, artificial enhancers, or MSG. Real food you can enjoy every single day.",
    iconName: "shield-check",
  },
];
