"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { singleComboMenu } from "@/content/menu-data";
import { mediaSlots } from "@/content/media-slots";
import { siteConfig } from "@/content/site-config";
import { VegMark } from "@/components/ui/VegMark";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, Sparkles, Building2, HeartHandshake, ShieldCheck, Wallet } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function TeaserSections() {
  const { addItem } = useCart();

  return (
    <section className="py-20 bg-[#FAF6EE]/50 space-y-24">
      {/* 1. MENU TEASER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#C85A27]/15 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image Preview */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
                <Image
                  src={mediaSlots.thaliMonday.path}
                  alt={singleComboMenu.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold text-neutral-800 shadow-sm">
                  <VegMark size="sm" />
                  <span>North + South Combo</span>
                </div>
              </div>
            </div>

            {/* Menu Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A27]/10 text-[#C85A27] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Executive Daily Meal
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#2D140D]">
                {singleComboMenu.title}
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {singleComboMenu.subtitle}
              </p>

              {/* Items pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {singleComboMenu.inclusions.slice(0, 8).map((item) => (
                  <span
                    key={item.name}
                    className="px-3 py-1 rounded-lg bg-[#FAF6EE] border border-[#C85A27]/15 text-xs font-medium text-[#2D140D]"
                  >
                    {item.name}
                  </span>
                ))}
                <span className="px-3 py-1 rounded-lg bg-[#C85A27]/10 text-xs font-bold text-[#C85A27]">
                  +{singleComboMenu.inclusions.length - 8} more inclusions
                </span>
              </div>

              {/* Price & CTA */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-3xl text-[#C85A27]">
                    ₹{singleComboMenu.specialPrice}
                  </span>
                  <span className="text-sm text-neutral-400 line-through">
                    ₹{singleComboMenu.regularPrice}
                  </span>
                  <span className="text-xs text-neutral-500">
                    Introductory Special
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <MagneticButton
                    onClick={() =>
                      addItem({
                        id: "single-daily-combo",
                        name: singleComboMenu.title,
                        type: "thali",
                        dayName: "Daily Meal",
                        price: singleComboMenu.specialPrice,
                      })
                    }
                    size="md"
                    variant="primary"
                  >
                    Add Meal to Cart
                  </MagneticButton>
                  <Link
                    href="/menu"
                    className="text-xs font-bold text-[#2D140D] hover:text-[#C85A27] inline-flex items-center gap-1 p-2 transition-colors"
                  >
                    <span>View All 14 Inclusions</span>
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
          <TiltCard className="p-8 sm:p-10 bg-white flex flex-col justify-between border border-[#C85A27]/15">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A27]/10 text-[#C85A27] text-xs font-bold uppercase tracking-wider">
                <Wallet className="w-3.5 h-3.5" />
                Prepaid Lunch Passes
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2D140D]">
                Put Your Office Lunch on Autopilot.
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Save with our 6-Day Weekly Pass or 24-Day Monthly Pass. Skip any meal day before 10:30 AM with 1 tap and receive instant 100% refund into your Lunch Bag wallet.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#FAF6EE] border border-[#C85A27]/15 space-y-1">
                  <p className="text-xs font-bold text-neutral-600">6 Days Pass</p>
                  <p className="text-xl font-black text-[#C85A27] font-display">₹999</p>
                  <p className="text-[11px] text-neutral-500">₹166.5 / meal</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#C85A27]/10 border border-[#C85A27]/25 space-y-1">
                  <p className="text-xs font-bold text-[#C85A27]">24 Days Pass</p>
                  <p className="text-xl font-black text-[#2D140D] font-display">₹3,888</p>
                  <p className="text-[11px] text-neutral-600 font-bold">Best Value (₹162/meal)</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100 flex items-center justify-between mt-6">
              <span className="text-xs font-bold text-emerald-800">
                ✓ Free priority desk delivery
              </span>
              <MagneticButton href="/passes" size="sm" variant="outline" withArrow>
                Explore Passes
              </MagneticButton>
            </div>
          </TiltCard>

          {/* Corporate Teaser */}
          <TiltCard className="p-8 sm:p-10 bg-white flex flex-col justify-between border border-[#C85A27]/15">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-[#2D140D] text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-[#C85A27]" />
                For Hyderabad Tech Parks &amp; HRs
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2D140D]">
                Sponsor Healthy Lunch for Your Team.
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Subsidize wholesome, zero-palm-oil daily meals as a workplace perk across HITEC City, Madhapur, Gachibowli, and Financial District.
              </p>

              <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#C85A27]/15 space-y-2 text-xs text-neutral-700">
                <div className="flex items-center justify-between font-bold text-[#2D140D]">
                  <span>Free Office Tasting Session</span>
                  <span className="text-emerald-700 font-bold">100% Complimentary</span>
                </div>
                <p className="text-neutral-500">
                  We bring fresh sample hot combo meals to your office leadership team to taste before signing up.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100 flex items-center justify-between mt-6">
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
        <div className="p-8 sm:p-12 rounded-3xl bg-[#2D140D] text-white relative overflow-hidden shadow-xl">
          {/* Subtle golden glow accent */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#C85A27]/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-wider border border-white/15">
                <HeartHandshake className="w-3.5 h-3.5 text-[#D48D48]" />
                Why We Started Lunch Bag
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                “We were tired of eating heavy, oil-laden restaurant food at work every day.”
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                We missed home, so we built Lunch Bag to bring authentic, pure-veg home comfort right to your Hyderabad cubicle. Prepared fresh in a clean, hygienic kitchen with strict quality checks.
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
