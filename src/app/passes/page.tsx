import React from "react";
import { Metadata } from "next";
import { LunchPassPricing } from "@/components/passes/LunchPassPricing";
import { VegMark } from "@/components/ui/VegMark";
import { FinalCtaBand } from "@/components/home/FinalCtaBand";
import { Zap, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Lunch Passes & Pricing (5-Day & 20-Day Plans)",
  description:
    "Automate your weekday office lunch with a 5-Day Weekly Pass or 20-Day Monthly Pass. Guaranteed under 10-minute delivery to your desk. Pause or skip anytime.",
};

export default function PassesPage() {
  return (
    <div className="pt-28 md:pt-36">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-red-50/50 via-warm-canvas to-white py-12 border-b border-red-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider border border-red-100">
              <Zap className="w-3.5 h-3.5 fill-brand-red" />
              Automate Your Workday Meals
            </span>
            <VegMark size="sm" showLabel />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            A Frictionless Way to Automate <br className="hidden sm:inline" />
            <span className="text-brand-red">Your Weekday Lunches.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Choose a 5-Day Weekly Pass or our popular 20-Day Monthly Pass. Skip the daily ordering headache and get hot, pure-vegetarian meals delivered straight to your desk in under 10 minutes.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 font-semibold">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-red" />
              <span>Under 10 Mins to Desk</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span>Flexible Pause / Skip before 10:30 AM</span>
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
