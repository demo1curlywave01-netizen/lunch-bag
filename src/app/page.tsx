import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { HealthChecklist } from "@/components/home/HealthChecklist";
import { SpeedComparison } from "@/components/home/SpeedComparison";
import { HealthPocketSection } from "@/components/home/HealthPocketSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { OfficialBagShowcase } from "@/components/home/OfficialBagShowcase";
import { TeaserSections } from "@/components/home/TeaserSections";
import { TrustSection } from "@/components/home/TrustSection";
import { FinalCtaBand } from "@/components/home/FinalCtaBand";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Zero-Compromise Health Badge Checklist */}
      <HealthChecklist />

      {/* 3. Speed Promise: 45-min vs 10-min Visual Comparison */}
      <SpeedComparison />

      {/* 4. Health & Pocket Sustainability */}
      <HealthPocketSection />

      {/* 5. How It Works in 3 Steps */}
      <HowItWorks />

      {/* 5b. The Official Lunch Bag Packaging Showcase */}
      <OfficialBagShowcase />

      {/* 6. Dynamic Teasers for Menu, Passes, Corporate, and Story */}
      <TeaserSections />

      {/* 7. Trust & Compliance Section */}
      <TrustSection />

      {/* 8. Final Red CTA Band */}
      <FinalCtaBand />
    </>
  );
}
