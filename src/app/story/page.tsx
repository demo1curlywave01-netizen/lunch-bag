import React from "react";
import { Metadata } from "next";
import { OurStoryContent } from "@/components/story/OurStoryContent";
import { VegMark } from "@/components/ui/VegMark";
import { FinalCtaBand } from "@/components/home/FinalCtaBand";
import { Heart, Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story — Why We Started Lunch Bag",
  description:
    "We missed home, so we built Lunch Bag to bring the taste of a mother's kitchen to your cubicle. Read about our 100% pure vegetarian culinary facility and zero-palm-oil kitchen philosophy.",
};

export default function StoryPage() {
  return (
    <div className="pt-28 md:pt-36">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-red-50/50 via-warm-canvas to-white py-12 border-b border-red-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider border border-red-100">
              <Heart className="w-3.5 h-3.5 fill-brand-red" />
              Our Culinary Philosophy
            </span>
            <VegMark size="sm" showLabel />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Bringing the Warmth of a Mother&apos;s Kitchen <br className="hidden sm:inline" />
            <span className="text-brand-red">Straight to Your Cubicle.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            We started with a simple belief: workplace food should nurture your health, keep your afternoon sharp, and never break your budget.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 font-semibold">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Small-batch cooking every morning</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span>Strictly 100% Pure Vegetarian Facility</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Story Content: Founder story, Kitchen hygiene & 4 Health Badges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OurStoryContent />
        </div>
      </section>

      {/* Final Red Call to Action */}
      <FinalCtaBand />
    </div>
  );
}
