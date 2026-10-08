"use client";

import React from "react";
import { TiltCard } from "@/components/ui/TiltCard";
import { VegMark } from "@/components/ui/VegMark";
import { Heart, Wallet, Sparkles, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export function HealthPocketSection() {
  return (
    <section className="py-20 bg-warm-canvas border-b border-red-100/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-red-200/70 text-brand-red text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Everyday Sustainability
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Kind to Your Body, <br className="hidden sm:inline" />
            <span className="text-brand-red">Easy on Your Pocket.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Our meals are crafted using light, daily-sourced ingredients without a single drop of palm oil or artificial food color. It&apos;s food you can safely eat every single day of the week without breaking your budget.
          </p>
        </div>

        {/* Dual Pillar Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Pillar 1: Kind to Your Body */}
          <TiltCard className="p-8 bg-white flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-brand-red mb-4">
                <Heart className="w-7 h-7 text-brand-red fill-brand-red/10" />
              </div>

              <div className="flex items-center gap-2">
                <VegMark size="md" />
                <h3 className="font-display text-2xl font-bold text-neutral-900">
                  Kind to Your Body
                </h3>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed">
                Most office lunches feel like a brick in your stomach because commercial kitchens cook with cheap palm olein and heavy cream. We do things the way mothers do:
              </p>

              <ul className="space-y-2.5 pt-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Cold-pressed mustard oil, sunflower oil, and real cow ghee</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Balanced macronutrients: ~22g plant protein, light spices, whole wheat</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Zero synthetic coloring, zero MSG, zero heavy artificial preservatives</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100">
              <span className="text-xs font-bold text-green-700 uppercase tracking-wider">
                ✓ Safe for daily 5-day consumption
              </span>
            </div>
          </TiltCard>

          {/* Pillar 2: Easy on Your Pocket */}
          <TiltCard className="p-8 bg-white flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-brand-red mb-4">
                <Wallet className="w-7 h-7 text-brand-red" />
              </div>

              <div className="flex items-center gap-2">
                <h3 className="font-display text-2xl font-bold text-neutral-900">
                  Easy on Your Pocket
                </h3>
                <span className="px-2.5 py-0.5 text-[11px] font-extrabold bg-red-100 text-brand-red rounded-full">
                  Starting ₹130/meal
                </span>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed">
                A standard delivery app lunch costs ₹300+ after restaurant markups, delivery charges, packaging fees, and platform taxes. Lunch Bag eliminates the middleman:
              </p>

              <ul className="space-y-2.5 pt-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Complete 6-item thali starting at just ₹149 on single orders</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Monthly 20-Day Pass reduces cost down to ₹130/meal with free delivery</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Save over ₹3,500 every single month on workplace lunch expenses</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs font-bold text-neutral-500">
                Transparent homestyle pricing
              </span>
              <Link
                href="/passes"
                className="text-xs font-bold text-brand-red hover:text-brand-red-dark flex items-center gap-1"
              >
                <span>View Lunch Passes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
