"use client";

import React from "react";
import Image from "next/image";
import { mediaSlots } from "@/content/media-slots";
import { healthBadges } from "@/content/badges-data";
import { siteConfig } from "@/content/site-config";
import { VegMark } from "@/components/ui/VegMark";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Leaf, Home, Droplets, ShieldCheck, Heart, Sparkles, CheckCircle2, MapPin, Users } from "lucide-react";

export function OurStoryContent() {
  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case "leaf":
        return <Leaf className="w-5 h-5 text-[#C85A27]" />;
      case "home":
        return <Home className="w-5 h-5 text-[#C85A27]" />;
      case "droplet":
        return <Droplets className="w-5 h-5 text-[#C85A27]" />;
      case "shield-check":
      default:
        return <ShieldCheck className="w-5 h-5 text-[#C85A27]" />;
    }
  };

  return (
    <div className="space-y-24">
      {/* 1. Founder Story Hero Section (Heartwarming Hyderabad Narrative) */}
      <div className="bg-white rounded-3xl border border-[#EFE4D6] p-8 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Founder Photo Slot */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF6EE] bg-neutral-100 group">
              <Image
                src={mediaSlots.founderStory.path}
                alt={mediaSlots.founderStory.alt}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-md border border-[#EFE4D6]">
                <p className="text-xs font-bold text-[#2D140D] leading-tight">
                  Tasted &amp; Perfected Daily in Hyderabad
                </p>
                <p className="text-[11px] text-[#6B5249]">
                  Small-batch home recipes with cold-pressed oils &amp; desi ghee
                </p>
              </div>
            </div>
          </div>

          {/* Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF6F0] text-[#C85A27] text-xs font-bold uppercase tracking-wider border border-[#F5D6C4]">
              <Heart className="w-3.5 h-3.5 fill-[#C85A27]" />
              Born in Hyderabad
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D140D] leading-[1.18]">
              “We were working late in HITEC City, longing for honest home-cooked food.”
            </h2>

            <div className="space-y-4 text-base text-[#6B5249] leading-relaxed font-normal">
              <p>
                <span className="font-semibold text-[#2D140D]">
                  It started around a crowded cubicle desk in Madhapur.
                </span>{" "}
                By 1:15 PM, every office worker in Hyderabad knows the daily struggle: navigating chaotic food courts, ordering overpriced takeout that takes 50 minutes to arrive in soggy plastic wraps, and ending up with heavy, palm-oil-drenched curries that guarantee a 3:00 PM energy crash.
              </p>
              <p>
                Even worse? In Hyderabad&apos;s cosmopolitan workspaces, lunchtime always sparked a friendly debate. One colleague missed the comforting warmth of authentic Andhra <em>Palak Kura Pappu</em>, fragrant curd rice, and spicy stone-ground pachadi. Another craved warm, flame-puffed wheat phulkas, yellow dal tadka, and rich paneer subzi.
              </p>
              <p>
                We thought: <strong>Why should anyone have to choose?</strong> We brought together experienced home-style cooks, Andhra pappu specialists, and North Indian roti masters under one roof to create <strong>Lunch Bag</strong> — the ultimate 14-item North + South Indian combo meal, prepared fresh every morning and delivered to your desk in under 10 minutes.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-[#6B5249]">
              <VegMark size="lg" showLabel />
              <span className="text-neutral-300">•</span>
              <span className="flex items-center gap-1.5 text-[#C85A27]">
                <MapPin className="w-3.5 h-3.5" />
                Crafted Daily in Hyderabad, Telangana
              </span>
              <span className="text-neutral-300">•</span>
              <span className="flex items-center gap-1.5 text-emerald-700">
                <Users className="w-3.5 h-3.5" />
                Loved by 10,000+ Office Goers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Kitchen Hygiene & Production Standards (Hospital-grade replaced) */}
      <div className="bg-[#2D140D] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-[#52281D] shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#DE6B32] text-xs font-bold uppercase tracking-wider border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              Kitchen Hygiene &amp; Clean Standards
            </div>

            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Prepared Fresh in a Clean, Hygienic Kitchen with Strict Quality Checks.
            </h3>

            <p className="text-[#D8C4BC] text-sm sm:text-base leading-relaxed font-light">
              Our central kitchen in Hyderabad is built from the ground up as a strictly 100% pure-vegetarian sanctuary. No non-veg or eggs ever enter our loading bay. Every cook wears sterile hairnets, gloves, and chef coats, with multi-stage sanitization and continuous temperature monitoring.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#EFE4D6]">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Stainless steel cookware &amp; traditional iron tawas (zero toxic chemical coatings)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Morning sourcing of farm-fresh spinach, gongura leaves &amp; fresh dairy paneer</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thermal insulated staging containers keeping meals steaming at 65°C+</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sealed Bisleri 200 ml drinking water &amp; sterile cutlery kit in every single bag</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
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
                <p className="font-bold">Strictly Vegetarian Hyderabad Kitchen</p>
                <p className="text-[11px] text-neutral-300">
                  {mediaSlots.kitchenHygiene.intendedSubject}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. The Hardware: Why We Re-Engineered the Lunch Bag */}
      <div className="bg-[#FAF6EE] rounded-3xl p-8 sm:p-12 border border-[#EFE4D6] shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-xl border border-[#EFE4D6] bg-white group">
              <Image
                src={mediaSlots.officialBags.path}
                alt={mediaSlots.officialBags.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#2D140D] shadow-md flex items-center gap-1.5 border border-[#EFE4D6]">
                <VegMark size="sm" />
                <span>Our Official Signature Bags</span>
              </div>
            </div>
            <p className="text-center text-xs text-[#6B5249] mt-3 font-medium">
              Reusable Insulated Tote (Left) &amp; Biodegradable Kraft Paper Carrier (Right)
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF6F0] text-[#C85A27] text-xs font-bold uppercase tracking-wider border border-[#F5D6C4]">
              <Sparkles className="w-3.5 h-3.5 text-[#C85A27]" />
              The Hardware Innovation
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2D140D] leading-tight">
              Why We Call Ourselves <span className="text-[#C85A27]">Lunch Bag</span>
            </h3>

            <p className="text-sm sm:text-base text-[#6B5249] leading-relaxed">
              Standard food delivery uses floppy thin plastic bags that tilt during motorcycle transit, leaving curries spilled into napkins. We engineered our official Lunch Bags with vertical cradles:
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-[#2D140D]">
              <div className="flex items-start gap-2.5">
                <span className="text-[#C85A27] font-bold">1.</span>
                <span><strong>5-Tier Stacked Architecture:</strong> Phulkas, wet curry, dry veg subzi, dal/pappu, and sweet rest in their own locked horizontal cradles.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#C85A27] font-bold">2.</span>
                <span><strong>Zero Desk Spill:</strong> Unpacks neatly on any cubicle or conference room table without grease spots or spills.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#C85A27] font-bold">3.</span>
                <span><strong>Thermal Steam Control:</strong> Side vents prevent moisture condensation from softening rotis while maintaining curry piping hot at 65°C+.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. The 4 Health Badges Reinforced */}
      <div>
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-[#C85A27] uppercase tracking-wider">
            Our Core Pillars
          </span>
          <h3 className="font-display text-3xl font-extrabold text-[#2D140D]">
            The Zero-Compromise Kitchen Standard
          </h3>
          <p className="text-xs sm:text-sm text-[#6B5249]">
            These four non-negotiable principles guide every meal we prepare for you in Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthBadges.map((badge) => (
            <TiltCard key={badge.id} className="p-6 bg-white border border-[#EFE4D6] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FDF6F0] border border-[#F5D6C4] flex items-center justify-center mb-4">
                  {getBadgeIcon(badge.iconName)}
                </div>
                <h4 className="font-display text-lg font-bold text-[#2D140D] mb-2">
                  {badge.title}
                </h4>
                <p className="text-xs text-[#6B5249] leading-relaxed">
                  {badge.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#EFE4D6] text-[11px] font-bold text-[#C85A27]">
                ✓ Non-Negotiable Standard
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Final Action */}
      <div className="text-center py-6">
        <MagneticButton href="/menu" size="lg" variant="primary" withArrow>
          Taste the Mother&apos;s Kitchen Difference (₹179)
        </MagneticButton>
      </div>
    </div>
  );
}
