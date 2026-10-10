"use client";

import React from "react";
import { corporateSteps } from "@/content/corporate-data";
import { VegMark } from "@/components/ui/VegMark";
import { Users } from "lucide-react";
import Image from "next/image";
import { mediaSlots } from "@/content/media-slots";

export function CorporateEnquiryForm() {
  return (
    <div className="space-y-24">
      {/* Top Banner with Image */}
      <div className="bg-white rounded-3xl border border-[#C85A27]/15 p-8 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C85A27]/10 text-[#C85A27] text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              Corporate Lunch Perks
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D140D] leading-tight">
              A Company Perk Your Team Will Actually Use Every Single Day.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Companies can subsidize or sponsor daily Lunch Bag deliveries for their entire staff as a monthly workplace perk. Boost focus, eradicate midday lethargy from greasy restaurant food, and bring your team together over authentic home-style meals.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-bold text-neutral-500">
              <div className="flex items-center gap-2">
                <VegMark size="sm" />
                <span>100% Pure Veg &amp; Dedicated Kitchen</span>
              </div>
              <span>•</span>
              <span>Consolidated GST Billing</span>
              <span>•</span>
              <span className="text-[#C85A27]">Free Onsite Tasting Session</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
              <Image
                src={mediaSlots.corporateHero.path}
                alt={mediaSlots.corporateHero.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-bold">
                Tech teams in HITEC City enjoying hot Lunch Bag combo meals
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Step Process for Companies */}
      <div className="bg-[#2D140D] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D48D48]">
            Effortless Rollout
          </span>
          <h3 className="font-display text-3xl font-extrabold text-white">
            Setup Your Team in 3 Days
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {corporateSteps.map((step) => (
            <div key={step.step} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="font-display font-black text-3xl text-[#D48D48]">
                {step.step}
              </span>
              <h4 className="font-display font-bold text-lg text-white">
                {step.title}
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
