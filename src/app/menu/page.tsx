import React from "react";
import { Metadata } from "next";
import { WeeklyMenuCalendar } from "@/components/menu/WeeklyMenuCalendar";
import { VegMark } from "@/components/ui/VegMark";
import { FinalCtaBand } from "@/components/home/FinalCtaBand";
import { Sparkles, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Weekly Rotating Pure Veg Menu (Mon–Fri)",
  description:
    "Browse our daily rotating 100% pure vegetarian lunch menu. Homestyle paneer, dal makhani, soft phulkas, and fresh kachumber delivered to your desk in under 10 minutes.",
};

export default function MenuPage() {
  return (
    <div className="pt-28 md:pt-36">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-red-50/50 via-warm-canvas to-white py-12 border-b border-red-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider border border-red-100">
              <Sparkles className="w-3.5 h-3.5" />
              Cooked Fresh Every Morning
            </span>
            <VegMark size="sm" showLabel />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Browse Our Daily Rotating, <br className="hidden sm:inline" />
            <span className="text-brand-red">100% Vegetarian Menu.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Pure vegetarian, hygienic, and prepared fresh every morning in small batches with zero palm oil. Pre-order for today or schedule your entire week ahead.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 font-semibold">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-red" />
              <span>Delivered at 12:30 PM, 1:00 PM, or 1:30 PM</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span>Zero Palm Oil Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Weekly Calendar Interactive Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WeeklyMenuCalendar />
        </div>
      </section>

      {/* Final Red Call to Action */}
      <FinalCtaBand />
    </div>
  );
}
