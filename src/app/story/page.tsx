import React from "react";
import { Metadata } from "next";
import { OurStoryContent } from "@/components/story/OurStoryContent";
import { VegMark } from "@/components/ui/VegMark";
import { FinalCtaBand } from "@/components/home/FinalCtaBand";
import { Heart, Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story — Why We Started Lunch Bag in Hyderabad",
  description:
    "We built Lunch Bag in Hyderabad to bring the taste of honest home cooking to office cubicles. Read about our 100% pure vegetarian kitchen, cold-pressed oils, and zero-compromise culinary philosophy.",
};

export default function StoryPage() {
  return (
    <div className="pt-28 md:pt-36 bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#FAF6EE] via-[#FDFBF7] to-white py-12 border-b border-[#EFE4D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF6F0] text-[#C85A27] text-xs font-bold uppercase tracking-wider border border-[#F5D6C4]">
              <Heart className="w-3.5 h-3.5 fill-[#C85A27]" />
              Our Culinary Philosophy
            </span>
            <VegMark size="sm" showLabel />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D140D] tracking-tight">
            Bringing the Warmth of a Mother&apos;s Kitchen <br className="hidden sm:inline" />
            <span className="text-[#C85A27]">Straight to Your Cubicle.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#6B5249] max-w-2xl mx-auto leading-relaxed">
            We started with a simple belief: workplace food in Hyderabad should nurture your health, keep your afternoon sharp, and never break your budget.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-[#6B5249] font-semibold">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#D48D48]" />
              <span>Small-batch cooking every morning</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
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

      {/* Final Call to Action */}
      <FinalCtaBand />
    </div>
  );
}
