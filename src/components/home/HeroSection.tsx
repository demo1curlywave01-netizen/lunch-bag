"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SpeedTicker } from "@/components/home/SpeedTicker";
import { VegMark } from "@/components/ui/VegMark";
import { mediaSlots } from "@/content/media-slots";
import { siteConfig } from "@/content/site-config";
import { ShieldCheck, Flame, Sparkles, ShoppingBag } from "lucide-react";

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
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-red-50/40 via-white to-white"
    >
      {/* Subtle background thali pattern */}
      <div className="absolute inset-0 thali-subtle-pattern opacity-30 pointer-events-none" />

      {/* Floating decorative food element 1: Fresh Bay Leaf / Herb */}
      <motion.div
        animate={{
          x: shouldReduceMotion ? 0 : mousePos.x * -1.2,
          y: shouldReduceMotion
            ? 0
            : [mousePos.y * -1.2, mousePos.y * -1.2 - 10, mousePos.y * -1.2],
        }}
        transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute top-28 left-[8%] hidden lg:flex items-center gap-2 p-2.5 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-red-100 text-xs font-bold text-neutral-800 pointer-events-none z-20"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span>100% Desi Ghee & Mustard Oil</span>
      </motion.div>

      {/* Floating decorative element 2: Fast Hub Speed badge */}
      <motion.div
        animate={{
          x: shouldReduceMotion ? 0 : mousePos.x * 1.5,
          y: shouldReduceMotion
            ? 0
            : [mousePos.y * 1.5, mousePos.y * 1.5 + 8, mousePos.y * 1.5],
        }}
        transition={{ y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-28 right-[6%] hidden lg:flex items-center gap-2.5 p-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-red-100 text-xs font-bold text-brand-red pointer-events-none z-20"
      >
        <div className="w-7 h-7 rounded-xl bg-brand-red/10 flex items-center justify-center">
          <Flame className="w-4 h-4 text-brand-red" />
        </div>
        <div>
          <p className="text-neutral-900 font-extrabold leading-none">Pre-Staged Hubs</p>
          <p className="text-[10px] text-neutral-500 font-normal">Arrives hot in 8–10 mins</p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Speed Ticker & Veg Badge Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <SpeedTicker />
              <VegMark size="md" showLabel />
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 leading-[1.12] tracking-tight">
              Your Favorite Meals. <br className="hidden sm:inline" />
              <span className="text-brand-red relative inline-block">
                At Your Desk
                {/* Underline brush accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-red-300 -z-10"
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
              {siteConfig.subtext}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <MagneticButton href="/menu" size="lg" variant="primary" withArrow>
                Browse Today&apos;s Menu
              </MagneticButton>
              <MagneticButton href="/passes" size="lg" variant="outline">
                Get a Lunch Pass
              </MagneticButton>
            </div>

            {/* Speed Notice Strip (Client Copy) */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/80 backdrop-blur-xs border border-red-100 shadow-xs text-xs sm:text-sm text-neutral-700 max-w-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-red shrink-0 animate-ping" />
              <p className="leading-snug">
                <span className="font-bold text-neutral-900">Eat Fresh in 10 Mins:</span>{" "}
                Grab your warm, healthy lunch from our nearest delivery rider.
              </p>
            </div>

            {/* Trust Micro-Metrics */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-neutral-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>Zero Palm Oil Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>No Artificial Colors or MSG</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShoppingBag className="w-4 h-4 text-brand-red" />
                <span>Eco Insulated Hot Packaging</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Animated Rising Steam or Official Bag */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-red/20 via-orange-100 to-transparent rounded-[36px] filter blur-2xl opacity-60" />

              {/* View Toggle Tabs (Thali vs Official Bag) */}
              <div className="flex items-center justify-end mb-3 gap-2">
                <div className="inline-flex items-center p-1 bg-white/90 backdrop-blur-md rounded-2xl border border-red-100 shadow-xs text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setViewMode("food")}
                    className={`px-3 py-1.5 rounded-xl transition-all ${
                      viewMode === "food"
                        ? "bg-brand-red text-white shadow-xs"
                        : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    Today&apos;s Meal
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("bag")}
                    className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                      viewMode === "bag"
                        ? "bg-brand-red text-white shadow-xs"
                        : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    <span>Official Bag</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  </button>
                </div>
              </div>

              {/* Main Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-2xl border border-red-100/80"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100">
                  {viewMode === "food" ? (
                    <>
                      <Image
                        src={mediaSlots.heroVideo.fallbackPoster || "/images/slots/hero-thali-poster.jpg"}
                        alt={mediaSlots.heroVideo.alt}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />

                      {/* Rising Animated Steam Wisps Overlay */}
                      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                        <div className="absolute top-[35%] left-[45%] w-8 h-16 bg-white/40 rounded-full filter blur-md animate-steam-1" />
                        <div className="absolute top-[30%] left-[55%] w-6 h-20 bg-white/35 rounded-full filter blur-lg animate-steam-2" />
                        <div className="absolute top-[40%] left-[38%] w-10 h-14 bg-white/30 rounded-full filter blur-md animate-steam-3" />
                      </div>

                      {/* Live Badge Overlay */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/65 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-bold">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span>Cooking Fresh Today</span>
                      </div>

                      {/* Quick Peek Button to Official Bag */}
                      <button
                        type="button"
                        onClick={() => setViewMode("bag")}
                        className="absolute bottom-3 left-3 bg-black/70 hover:bg-black/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-md border border-white/20 flex items-center gap-1.5 transition-all active:scale-95"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
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
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-amber-950/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-bold border border-amber-800/40">
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        <span>Official 5-Tier Bag</span>
                      </div>

                      {/* Switch back to meal button */}
                      <button
                        type="button"
                        onClick={() => setViewMode("food")}
                        className="absolute bottom-3 left-3 bg-black/70 hover:bg-black/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-md border border-white/20 flex items-center gap-1.5 transition-all active:scale-95"
                      >
                        <span>← Back to Meal Preview</span>
                      </button>
                    </>
                  )}

                  {/* 10-Minute Dispatch stamp */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-red-100 text-right">
                    <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                      Hub Dispatch
                    </p>
                    <p className="text-sm font-black text-brand-red">Under 10 Mins</p>
                  </div>
                </div>

                {/* Sub-card details */}
                <div className="p-3 pt-4 flex items-center justify-between">
                  {viewMode === "food" ? (
                    <>
                      <div className="flex items-center gap-3">
                        <VegMark size="md" />
                        <div>
                          <p className="font-bold text-sm text-neutral-900 leading-tight">
                            Today&apos;s Special Shahi Thali
                          </p>
                          <p className="text-xs text-neutral-500">
                            Paneer, Dal Tadka, 3 Phulkas, Basmati Rice & Sweet
                          </p>
                        </div>
                      </div>
                      <span className="font-display font-black text-lg text-brand-red">
                        ₹149
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 shrink-0">
                          <ShoppingBag className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-neutral-900 leading-tight">
                            Signature 5-Tier Lunch Bag
                          </p>
                          <p className="text-xs text-neutral-500">
                            Fabric Tote &amp; Eco Kraft Carrier • 100% Spill-Proof
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
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
