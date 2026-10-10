import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site-config";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { CartDrawer } from "@/components/layout/CartDrawer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Lunch Bag — Pure Veg Homemade Lunch at Your Desk in 10 Mins (Hyderabad)",
    template: "%s | Lunch Bag",
  },
  description:
    "Pure vegetarian, hygienic, and incredibly pocket-friendly North + South Indian combo meal delivered fresh to your office desk in under 10 minutes across Hyderabad. Zero palm oil, no artificial colors, pure goodness.",
  keywords: [
    "Hyderabad office lunch delivery",
    "HITEC City lunch thali",
    "Madhapur lunch box delivery",
    "pure vegetarian lunch Hyderabad",
    "North South Indian combo meal",
    "healthy corporate lunch Hyderabad",
    "monthly lunch pass Hyderabad",
    "zero palm oil food",
  ],
  authors: [{ name: "Lunch Bag Team" }],
  creator: "Lunch Bag",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://lunchbag.in"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/lunch-bag-icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://lunchbag.in",
    title: "Lunch Bag — Pure Veg Homemade Lunch at Your Desk in 10 Mins",
    description:
      "Pure vegetarian, hygienic, and pocket-friendly North + South Indian combo lunch delivered fresh to your office desk in under 10 minutes across Hyderabad tech hubs.",
    siteName: "Lunch Bag",
    images: [
      {
        url: "/images/slots/hero-combo-thali.jpg",
        width: 1200,
        height: 800,
        alt: "Steaming hot pure vegetarian North and South Indian combo meal from Lunch Bag",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunch Bag — Pure Veg Homemade Lunch at Your Desk in 10 Mins",
    description:
      "Skip the 45-minute wait. Hot homemade pure-veg lunch delivered to your Hyderabad office desk in under 10 minutes.",
    images: ["/images/slots/hero-combo-thali.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: siteConfig.name,
    description: siteConfig.subtext,
    servesCuisine: "Indian Vegetarian",
    priceRange: "₹₹",
    hasMenu: "https://lunchbag.in/menu",
    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://lunchbag.in/menu",
        inLanguage: "en-IN",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
    },
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-neutral-900 selection:bg-[#C85A27]/20 selection:text-[#C85A27]">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppFloat />
        </CartProvider>
      </body>
    </html>
  );
}
