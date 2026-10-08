"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { weeklyMenu } from "@/content/menu-data";
import { mediaSlots } from "@/content/media-slots";
import { VegMark } from "@/components/ui/VegMark";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, Sparkles, Building2, HeartHandshake } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function TeaserSections() {
  const { addItem } = useCart();
  const todayThali = weeklyMenu[0]; // Monday / featured thali

  return (
    <section className="py-20 bg-warm-canvas space-y-24">
      {/* 1. MENU TEASER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-red-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image Preview */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
                <Image
                  src={mediaSlots.thaliMonday.path}
                  alt={todayThali.thaliTitle}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold text-neutral-800">
                  <VegMark size="sm" />
                  <span>Featured Weekday Special</span>
                </div>
              </div>
            </div>

            {/* Menu Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                Daily Rotating Menu
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900">
                {todayThali.thaliTitle}
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {todayThali.description}
              </p>

              {/* Items pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {todayThali.items.map((item) => (
                  <span
                    key={item.name}
                    className="px-3 py-1 rounded-lg bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-700"
                  >
                    {item.name}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-3xl text-brand-red">
                    {todayThali.priceFormatted}
                  </span>
                  <span className="text-xs text-neutral-400">
                    {todayThali.priceNote}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <MagneticButton
                    onClick={() =>
                      addItem({
                        id: todayThali.dayId,
                        name: todayThali.thaliTitle,
                        type: "thali",
                        dayName: todayThali.dayName,
                        price: 149,
                      })
                    }
                    size="md"
                    variant="primary"
                  >
                    Pre-Order Today
                  </MagneticButton>
                  <Link
                    href="/menu"
                    className="text-xs font-bold text-neutral-700 hover:text-brand-red inline-flex items-center gap-1 p-2"
                  >
                    <span>View Entire Week (Mon–Fri)</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. LUNCH PASSES TEASER & 3. CORPORATE TEASER GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lunch Passes Teaser */}
          <TiltCard className="p-8 sm:p-10 bg-white flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider">
                Automated Meal Passes
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-900">
                Put Your Lunch on Autopilot.
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Save time and money with a 5-Day Weekly or 20-Day Monthly Lunch Pass. Skip or pause any workday before 10:30 AM with zero penalty.
              </p>

              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/70 space-y-2 text-xs text-neutral-700">
                <div className="flex items-center justify-between font-bold text-neutral-900">
                  <span>20-Day Monthly Pass (Best Value)</span>
                  <span className="text-brand-red text-sm">₹130 / meal</span>
                </div>
                <p className="text-neutral-500">
                  Valid across 45 calendar days. Rollover meals when you work from home or take leave.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs font-bold text-green-700">
                ✓ Free priority desk delivery
              </span>
              <MagneticButton href="/passes" size="sm" variant="outline" withArrow>
                Explore Lunch Passes
              </MagneticButton>
            </div>
          </TiltCard>

          {/* Corporate Teaser */}
          <TiltCard className="p-8 sm:p-10 bg-white flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                For Companies & HRs
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-900">
                Sponsor Healthy Lunch for Your Team.
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Subsidize wholesome, zero-palm-oil daily meals as a workplace perk. Boost afternoon productivity and eliminate crowded food court chaos.
              </p>

              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/70 space-y-2 text-xs text-neutral-700">
                <div className="flex items-center justify-between font-bold text-neutral-900">
                  <span>Free Office Tasting Session</span>
                  <span className="text-green-700 font-bold">100% Complimentary</span>
                </div>
                <p className="text-neutral-500">
                  We bring fresh sample hot thalis to your office leadership team to taste before signing up.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs font-bold text-neutral-500">
                Consolidated monthly GST invoices
              </span>
              <MagneticButton href="/companies" size="sm" variant="primary" withArrow>
                Corporate Plans
              </MagneticButton>
            </div>
          </TiltCard>
        </div>
      </div>

      {/* 4. STORY TEASER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 text-white relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-3.5 h-3.5 text-brand-red" />
                Why We Started Lunch Bag
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                “We were tired of eating heavy, oil-laden restaurant food at work every day.”
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                We missed home, so we built Lunch Bag to bring the taste of a mother&apos;s kitchen to your cubicle. Clean pure-veg ingredients, honest recipes, and zero compromises.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <MagneticButton href="/story" size="lg" variant="primary" withArrow>
                Read Our Story
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
