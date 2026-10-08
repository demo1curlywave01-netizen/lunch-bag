import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { HealthChecklist } from "@/components/home/HealthChecklist";
import { HowItWorks } from "@/components/home/HowItWorks";
import { OfficialBagShowcase } from "@/components/home/OfficialBagShowcase";
import { FinalCtaBand } from "@/components/home/FinalCtaBand";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Zero-Compromise Health Badge Checklist */}
      <HealthChecklist />

      {/* 3. How It Works in 3 Steps */}
      <HowItWorks />

      {/* 4. The Official Lunch Bag Packaging Showcase */}
      <OfficialBagShowcase />

      {/* 5. Final Red CTA Band */}
      <FinalCtaBand />
    </>
  );
}

