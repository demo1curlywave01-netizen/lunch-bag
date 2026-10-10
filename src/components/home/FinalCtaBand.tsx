"use client";

import React from "react";
import { VegMark } from "@/components/ui/VegMark";
import { Clock, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";

export function FinalCtaBand() {
  return (
    <section className="bg-[#C85A27] text-white py-16 sm:py-20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#2D140D] opacity-35 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#D48D48] opacity-30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/25">
          <Clock className="w-3.5 h-3.5" />
          Pre-staged Across 10 Hyderabad Tech Hubs
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white max-w-3xl mx-auto leading-tight mb-6">
          Ready for Hot, Pure-Veg Homemade Lunch at Your Desk?
        </h2>

        <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          Skip the 45-minute delivery app wait and crowded cafeteria queues. Try Lunch Bag today starting at just ₹{siteConfig.specialPrice} (Regular ₹{siteConfig.regularPrice}).
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/passes"
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#C85A27] font-display font-extrabold text-base rounded-2xl shadow-xl hover:bg-[#FAF6EE] active:scale-95 transition-all duration-200 inline-flex items-center justify-center gap-2 group"
          >
            <span>Get My Lunch Pass</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/menu"
            className="w-full sm:w-auto px-8 py-4 bg-[#2D140D]/80 hover:bg-[#2D140D] text-white border-2 border-white/30 font-display font-bold text-base rounded-2xl transition-all duration-200"
          >
            View Today&apos;s Combo Meal
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 text-xs text-white/90">
          <div className="flex items-center gap-2">
            <VegMark size="sm" />
            <span className="font-bold">100% Pure Vegetarian Facility</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>Zero Palm Oil Guarantee</span>
          </div>
          <span>•</span>
          <span>Flexible 1-Click Skip / Pause Anytime</span>
        </div>
      </div>
    </section>
  );
}
