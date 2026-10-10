import React from "react";
import { Metadata } from "next";
import { LunchPassPricing } from "@/components/passes/LunchPassPricing";
import { VegMark } from "@/components/ui/VegMark";
import { FinalCtaBand } from "@/components/home/FinalCtaBand";
import { Zap, Clock, ShieldCheck, Wallet } from "lucide-react";

export const metadata: Metadata = {
  title: "Hyderabad Lunch Passes & Daily Orders (6-Day ₹999 & 24-Day ₹3888)",
  description:
    "Automate your Hyderabad office lunch with a 6-Day Pass (₹999) or 24-Day Pass (₹3888), or order daily for ₹179. Under 10-minute desk delivery. Pause, skip, or manage wallet anytime.",
};

export default function PassesPage() {
  return (
    <div className="pt-28 md:pt-36 bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#FAF6EE] via-[#FDFBF7] to-white py-12 border-b border-[#EFE4D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF6F0] text-[#C85A27] text-xs font-bold uppercase tracking-wider border border-[#F5D6C4]">
              <Zap className="w-3.5 h-3.5 fill-[#C85A27]" />
              Automate Your Hyderabad Workday Meals
            </span>
            <VegMark size="sm" showLabel />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D140D] tracking-tight">
            A Frictionless Way to Automate <br className="hidden sm:inline" />
            <span className="text-[#C85A27]">Your Weekday Lunches.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#6B5249] max-w-2xl mx-auto leading-relaxed">
            Order a single daily meal for ₹179 (regular ₹219), or save more with a 6-Day Pass (₹999) or 24-Day Monthly Pass (₹3888). Get hot, pure-vegetarian North + South Indian combo meals delivered to your desk in under 10 minutes.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-[#6B5249] font-semibold">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C85A27]" />
              <span>Under 10 Mins to Desk</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Flexible Skip / Pause before 10:30 AM</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Wallet className="w-4 h-4 text-[#C85A27]" />
              <span>Direct Web App Wallet Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards, Stepper & FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LunchPassPricing />
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCtaBand />
    </div>
  );
}
