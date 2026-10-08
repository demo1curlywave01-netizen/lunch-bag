"use client";

import React from "react";
import Image from "next/image";
import { mediaSlots } from "@/content/media-slots";
import { healthBadges } from "@/content/badges-data";
import { siteConfig } from "@/content/site-config";
import { VegMark } from "@/components/ui/VegMark";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Leaf, Home, Droplets, ShieldCheck, Heart, Sparkles, CheckCircle2 } from "lucide-react";

export function OurStoryContent() {
  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case "leaf":
        return <Leaf className="w-5 h-5 text-brand-red" />;
      case "home":
        return <Home className="w-5 h-5 text-brand-red" />;
      case "droplet":
        return <Droplets className="w-5 h-5 text-brand-red" />;
      case "shield-check":
      default:
        return <ShieldCheck className="w-5 h-5 text-brand-red" />;
    }
  };

  return (
    <div className="space-y-24">
      {/* 1. Founder Story Hero Section */}
      <div className="bg-white rounded-3xl border border-red-100 p-8 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Founder Photo Slot */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-neutral-100 group">
              <Image
                src={mediaSlots.founderStory.path}
                alt={mediaSlots.founderStory.alt}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-md border border-neutral-100">
                <p className="text-xs font-bold text-neutral-900 leading-tight">
                  Tested in Our Central Kitchen Daily
                </p>
                <p className="text-[11px] text-neutral-500">
                  {mediaSlots.founderStory.intendedSubject}
                </p>
              </div>
            </div>
          </div>

          {/* Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-brand-red" />
              Why We Started Lunch Bag
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-[1.18]">
              “We were tired of eating heavy, oil-laden restaurant food at work every day.”
            </h2>

            <div className="space-y-4 text-base text-neutral-600 leading-relaxed font-normal">
              <p>
                <span className="font-semibold text-neutral-900">
                  We missed home, so we built Lunch Bag to bring the taste of a mother&apos;s kitchen to your cubicle.
                </span>{" "}
                Every office worker knows the story: by 1:30 PM, you scramble to find something to eat. Food court fast food leaves you sluggish, traditional food delivery apps take 45+ minutes with astronomical surge fees, and the meals are cooked in cheap commercial palm oil with artificial food coloring.
              </p>
              <p>
                We wanted a meal you could safely and happily eat five days a week, every single week of the month, without breaking your health or your monthly budget.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <VegMark size="lg" showLabel />
              <span className="text-neutral-300">•</span>
              <span className="text-xs font-bold text-neutral-500">
                Crafted Daily in NCR
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Kitchen Hygiene & Production Standards */}
      <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-brand-red text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Kitchen Hygiene Protocols
            </div>

            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Hospital-Grade Hygiene. Traditional Handcrafted Recipes.
            </h3>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
              Our central culinary facility is built from the ground up as a strictly 100% pure-vegetarian kitchen. No non-veg or eggs ever enter our loading bay. Every cook wears sterile hairnets, gloves, and chef coats, with hourly surface sanitization.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                <span>Stainless steel cookware & cast iron tawas for rotis (no toxic nonstick coatings)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                <span>Daily morning sourcing of fresh farm produce and dairy paneer</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                <span>Thermal insulated delivery totes maintaining 65°C+ dispatch temperature</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 text-xs text-neutral-400 border border-neutral-700">
                <span>{siteConfig.fssaiNumber}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
              <Image
                src={mediaSlots.kitchenHygiene.path}
                alt={mediaSlots.kitchenHygiene.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                <p className="font-bold">Strictly Vegetarian Central Kitchen</p>
                <p className="text-[11px] text-neutral-300">
                  {mediaSlots.kitchenHygiene.intendedSubject}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2b. The Hardware: Why We Re-Engineered the Lunch Bag */}
      <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-amber-900/15 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-xl border border-neutral-200/80 bg-white group">
              <Image
                src={mediaSlots.officialBags.path}
                alt={mediaSlots.officialBags.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-neutral-900 shadow-md flex items-center gap-1.5">
                <VegMark size="sm" />
                <span>Our Official Signature Bags</span>
              </div>
            </div>
            <p className="text-center text-xs text-neutral-500 mt-3 font-medium">
              Reusable Insulated Tote (Left) &amp; Biodegradable Kraft Paper Carrier (Right)
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/10 text-amber-950 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-red" />
              The Hardware Innovation
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
              Why We Call Ourselves <span className="text-brand-red">Lunch Bag</span>
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Standard commercial food delivery uses flimsy plastic bags that tilt during transit, leaving you with curries sloshed into paper wraps. We spent months testing vertical container racks to design our official Lunch Bags:
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-neutral-700">
              <div className="flex items-start gap-2.5">
                <span className="text-brand-red font-bold">1.</span>
                <span><strong>5-Tier Tiered Architecture:</strong> Each dish (rotis, subzi, dal, rice, sweet) rests in its own locked horizontal cradle.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-brand-red font-bold">2.</span>
                <span><strong>Zero Desk Mess:</strong> Unpacks neatly on any office desk without grease spots or spills.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-brand-red font-bold">3.</span>
                <span><strong>Thermal Steam Control:</strong> Engineered side vents prevent moisture from softening your fresh rotis while keeping curries piping hot.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. The 4 Health Badges Reinforced */}
      <div>
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
            Our Core Pillars
          </span>
          <h3 className="font-display text-3xl font-extrabold text-neutral-900">
            The Zero-Compromise Kitchen Standard
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500">
            These four principles guide every dish we pack into your Lunch Bag.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthBadges.map((badge) => (
            <TiltCard key={badge.id} className="p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                  {getBadgeIcon(badge.iconName)}
                </div>
                <h4 className="font-display text-lg font-bold text-neutral-900 mb-2">
                  {badge.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {badge.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 text-[11px] font-bold text-brand-red">
                ✓ Non-Negotiable Standard
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Final Action */}
      <div className="text-center py-6">
        <MagneticButton href="/menu" size="lg" variant="primary" withArrow>
          Taste the Mother&apos;s Kitchen Difference
        </MagneticButton>
      </div>
    </div>
  );
}
