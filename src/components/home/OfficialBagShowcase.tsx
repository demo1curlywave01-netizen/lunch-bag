"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mediaSlots } from "@/content/media-slots";
import { siteConfig } from "@/content/site-config";
import { VegMark } from "@/components/ui/VegMark";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  Layers,
  ShieldCheck,
  Flame,
  Leaf,
  CheckCircle2,
  ArrowRight,
  PackageCheck,
  Sparkles,
} from "lucide-react";

export function OfficialBagShowcase() {
  const [activeTab, setActiveTab] = useState<"all" | "tote" | "kraft">("all");

  const bagFeatures = [
    {
      icon: <Layers className="w-5 h-5 text-amber-700" />,
      title: "5 Vertical Tier Compartments",
      desc: "Phulkas, Dal, Sambar, Sabji, Steamed Rice & Sweet — packed in individual sealed containers stacked vertically so flavours never blend.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-700" />,
      title: "100% Spill-Proof Stability",
      desc: "Lateral security slots keep every container flat and locked upright. No spilled curries or oily bag bottoms on your keyboard or desk.",
    },
    {
      icon: <Flame className="w-5 h-5 text-[#C85A27]" />,
      title: "65°C Heat Retention",
      desc: "Insulated construction traps kitchen heat while side ventilation slits prevent moisture buildup, keeping rotis soft and dal piping hot.",
    },
    {
      icon: <Leaf className="w-5 h-5 text-emerald-700" />,
      title: "Dual Eco Packaging Options",
      desc: "Choose between our reusable heavy-duty fabric tote or our 100% biodegradable unbleached kraft paper carrier bag.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#FAF6EE]/50 to-white relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-[#C85A27]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C85A27]/10 text-[#2D140D] text-xs font-bold uppercase tracking-wider border border-[#C85A27]/20">
            <PackageCheck className="w-4 h-4 text-[#C85A27]" />
            Signature Hardware &amp; Packaging
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D140D] tracking-tight leading-[1.15]">
            Meet the Official <span className="text-[#C85A27]">Lunch Bag.</span>
            <br />
            <span className="text-neutral-700 text-2xl sm:text-3xl lg:text-4xl font-extrabold">
              Engineered for Spill-Free Desk Delivery.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Standard food delivery bags tilt, crush food, and leave you with oily containers.
            We custom-engineered our signature vertical 5-tier bags so your homestyle lunch arrives
            as pristine as it left our kitchen.
          </p>
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Official Bag Photography with interactive hotspots */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white p-3 sm:p-4 shadow-2xl border border-[#C85A27]/15 group">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-neutral-100">
                <Image
                  src={mediaSlots.officialBags.path}
                  alt={mediaSlots.officialBags.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-102"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Top badges */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2">
                  <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-neutral-900 shadow-md border border-neutral-100 flex items-center gap-1.5">
                    <VegMark size="sm" />
                    <span>Official Branded Packaging</span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <div className="bg-[#2D140D]/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-white shadow-md border border-amber-800/40 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#D48D48]" />
                    <span>5 Tiers Visible</span>
                  </div>
                </div>

                {/* Bottom Callouts highlighting both bags in photo */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 grid grid-cols-2 gap-2 sm:gap-3 text-white">
                  <div className="bg-black/65 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-white/20">
                    <p className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                      Left Format
                    </p>
                    <p className="text-xs sm:text-sm font-bold leading-tight">
                      Reusable Fabric Tote
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-neutral-300 hidden sm:block">
                      Stitched handles • Insulated lining
                    </p>
                  </div>

                  <div className="bg-black/65 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-white/20">
                    <p className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                      Right Format
                    </p>
                    <p className="text-xs sm:text-sm font-bold leading-tight">
                      Eco Kraft Paper Bag
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-neutral-300 hidden sm:block">
                      100% Biodegradable • Side tier window
                    </p>
                  </div>
                </div>
              </div>

              {/* Caption bar */}
              <div className="pt-3 px-2 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500">
                <span className="font-semibold text-neutral-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                  Actual client delivery hardware shown
                </span>
                <span>Includes cutlery &amp; tissue slot</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Innovations & Features */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#C85A27] uppercase tracking-wider">
                Built For Modern Offices
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2D140D] leading-tight">
                Why Lunch Bag Packaging Beats Everything Else
              </h3>
            </div>

            {/* Feature Cards */}
            <div className="space-y-3.5">
              {bagFeatures.map((feat) => (
                <div
                  key={feat.title}
                  className="p-4 rounded-2xl bg-white border border-[#C85A27]/15 shadow-xs hover:border-[#C85A27]/30 transition-colors flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-xl bg-[#FAF6EE] border border-[#C85A27]/15 shrink-0 mt-0.5">
                    {feat.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-[#2D140D] leading-tight">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA action bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <MagneticButton href="/menu" variant="primary" size="md" withArrow>
                Try Today&apos;s Combo Meal (₹{siteConfig.specialPrice})
              </MagneticButton>
              <Link
                href="/passes"
                className="text-xs font-bold text-neutral-700 hover:text-[#C85A27] inline-flex items-center gap-1 px-3 py-2 transition-colors"
              >
                <span>Automate with a Lunch Pass</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
