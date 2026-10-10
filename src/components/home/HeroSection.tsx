"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { VegMark } from "@/components/ui/VegMark";
import { mediaSlots } from "@/content/media-slots";
import { siteConfig } from "@/content/site-config";
import { singleComboMenu } from "@/content/menu-data";
import { ShieldCheck, Flame, Sparkles, ShoppingBag, Clock, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [viewMode, setViewMode] = useState<"food" | "bag">("food");
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF6EE] via-white to-[#FAF6EE]/40"
    >
      {/* Subtle background thali pattern */}
      <div className="absolute inset-0 thali-subtle-pattern opacity-25 pointer-events-none" />


      {/* Floating decorative element 2: Fast Hub Speed badge */}
      <motion.div
        animate={{
          x: shouldReduceMotion ? 0 : mousePos.x * 1.5,
          y: shouldReduceMotion
            ? 0
            : [mousePos.y * 1.5, mousePos.y * 1.5 + 8, mousePos.y * 1.5],
        }}
        transition={{ y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-28 right-[6%] hidden lg:flex items-center gap-2.5 p-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-[#C85A27]/20 text-xs font-bold text-[#C85A27] pointer-events-none z-20"
      >
        <div className="w-8 h-8 rounded-xl bg-[#C85A27]/10 flex items-center justify-center">
          <Flame className="w-4 h-4 text-[#C85A27]" />
        </div>
        <div>
          <p className="text-[#2D140D] font-extrabold leading-none">Pre-Staged Hyderabad Hubs</p>
          <p className="text-[10px] text-neutral-500 font-normal mt-0.5">Hot desk drop in 10 mins</p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Announcement Strip (idlizz style banner badge) */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C85A27]/10 border border-[#C85A27]/25 text-[#C85A27] text-xs font-bold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C85A27]" />
                <span>Hyderabad&apos;s Signature North + South Fusion Thali</span>
              </div>
              <VegMark size="md" showLabel />
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#2D140D] leading-[1.12] tracking-tight">
              Your Favorite Meals. <br className="hidden sm:inline" />
              <span className="text-[#C85A27] relative inline-block">
                At Your Desk
                {/* Underline brush accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#D48D48]/40 -z-10"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C50 3 150 2 197 8"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              in 10 Minutes.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-neutral-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Fresh, pure-veg home-cooked meals delivered across 10 major Hyderabad corporate tech corridors. Authentic taste, no heavy palm oil, and zero mealtime stress.
            </p>

            {/* Price & Delivery Slot Pill Banner */}
            <div className="inline-flex flex-wrap items-center gap-3 p-3 rounded-2xl bg-white border border-[#C85A27]/20 shadow-sm max-w-xl">
              <div className="flex items-baseline gap-2 px-2">
                <span className="text-2xl sm:text-3xl font-black text-[#C85A27] font-display">
                  ₹{siteConfig.specialPrice}
                </span>
                <span className="text-sm text-neutral-400 line-through">
                  ₹{siteConfig.regularPrice}
                </span>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                  Intro Offer
                </span>
              </div>
              <div className="h-6 w-px bg-neutral-200 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-xs text-neutral-600 font-medium px-2">
                <Clock className="w-3.5 h-3.5 text-[#C85A27]" />
                <span>Slots: 12–1 PM • 1–2 PM • 2–3 PM</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <MagneticButton href="/menu" size="lg" variant="primary" withArrow>
                Order Today&apos;s Combo Meal
              </MagneticButton>
              <MagneticButton href="/passes" size="lg" variant="outline">
                Get 6 or 24 Days Pass
              </MagneticButton>
            </div>

            {/* Speed Notice Strip */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-xs border border-[#C85A27]/15 shadow-xs text-xs sm:text-sm text-neutral-700 max-w-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-[#C85A27] shrink-0 animate-ping" />
              <p className="leading-snug">
                <span className="font-bold text-[#2D140D]">Eat Fresh in 10 Mins:</span>{" "}
                Pre-staged thermal runners waiting right at your Hyderabad office lobby.
              </p>
            </div>

            {/* Trust Micro-Metrics */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-neutral-600">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Zero Palm Oil Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#D48D48]" />
                <span>No Artificial Colors or MSG</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShoppingBag className="w-4 h-4 text-[#C85A27]" />
                <span>Eco Insulated Hot Packaging</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Animated Rising Steam or Official Bag */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Warm Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#C85A27]/20 via-[#D48D48]/15 to-transparent rounded-[36px] filter blur-2xl opacity-60" />

              {/* View Toggle Tabs (Combo Thali vs Official Bag) */}
              <div className="flex items-center justify-end mb-3 gap-2">
                <div className="inline-flex items-center p-1 bg-white/90 backdrop-blur-md rounded-2xl border border-[#C85A27]/20 shadow-xs text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setViewMode("food")}
                    className={`px-3 py-1.5 rounded-xl transition-all ${
                      viewMode === "food"
                        ? "bg-[#C85A27] text-white shadow-xs"
                        : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    Combo Thali
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("bag")}
                    className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                      viewMode === "bag"
                        ? "bg-[#C85A27] text-white shadow-xs"
                        : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    <span>Official Bag</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D48D48]" />
                  </button>
                </div>
              </div>

              {/* Main Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-2xl border border-[#C85A27]/15"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100">
                  {viewMode === "food" ? (
                    <>
                      <Image
                        src={mediaSlots.heroCombo?.path || "/images/slots/hero-combo-thali.jpg"}
                        alt={mediaSlots.heroCombo?.alt || "North + South Indian combo meal"}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />

                      {/* Live Badge Overlay */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#2D140D]/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Fresh North + South Combo</span>
                      </div>

                      {/* Quick Peek Button to Official Bag */}
                      <button
                        type="button"
                        onClick={() => setViewMode("bag")}
                        className="absolute bottom-3 left-3 bg-[#2D140D]/80 hover:bg-[#2D140D] backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-md border border-white/20 flex items-center gap-1.5 transition-all active:scale-95"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#D48D48]" />
                        <span>See Official Packaging</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <Image
                        src={mediaSlots.officialBags.path}
                        alt={mediaSlots.officialBags.alt}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />

                      {/* Official Badge Overlay */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#2D140D]/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-bold border border-[#D48D48]/30">
                        <Sparkles className="w-3 h-3 text-[#D48D48]" />
                        <span>Official 5-Tier Bag</span>
                      </div>

                      {/* Switch back to meal button */}
                      <button
                        type="button"
                        onClick={() => setViewMode("food")}
                        className="absolute bottom-3 left-3 bg-[#2D140D]/80 hover:bg-[#2D140D] backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-md border border-white/20 flex items-center gap-1.5 transition-all active:scale-95"
                      >
                        <span>← Back to Meal Preview</span>
                      </button>
                    </>
                  )}

                  {/* 10-Minute Dispatch stamp */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-[#C85A27]/20 text-right">
                    <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
                      Hub Dispatch
                    </p>
                    <p className="text-sm font-black text-[#C85A27]">Under 10 Mins</p>
                  </div>
                </div>

                {/* Sub-card details */}
                <div className="p-3 pt-4 flex items-center justify-between">
                  {viewMode === "food" ? (
                    <>
                      <div className="flex items-center gap-3">
                        <VegMark size="md" />
                        <div>
                          <p className="font-bold text-sm text-[#2D140D] leading-tight">
                            {singleComboMenu.title}
                          </p>
                          <p className="text-xs text-neutral-500">
                            14 Items • Phulka, Curries, Dal, Sambar &amp; Sweet
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-display font-black text-xl text-[#C85A27]">
                          ₹{siteConfig.specialPrice}
                        </span>
                        <span className="text-[11px] text-neutral-400 line-through block">
                          ₹{siteConfig.regularPrice}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-[#FAF6EE] border border-[#C85A27]/20 flex items-center justify-center text-[#C85A27] shrink-0">
                          <ShoppingBag className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-[#2D140D] leading-tight">
                            Signature 5-Tier Lunch Bag
                          </p>
                          <p className="text-xs text-neutral-500">
                            Fabric Tote &amp; Eco Kraft Carrier • 100% Spill-Proof
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        Zero Spill
                      </span>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
