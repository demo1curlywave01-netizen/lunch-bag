"use client";

import React, { useState } from "react";
import Image from "next/image";
import { singleComboMenu } from "@/content/menu-data";
import { siteConfig } from "@/content/site-config";
import { VegMark } from "@/components/ui/VegMark";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useCart } from "@/context/CartContext";
import {
  Sparkles,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Flame,
  Info,
  Droplets,
  Package,
  ShoppingBag,
  MessageCircle,
} from "lucide-react";

export function SingleMenuShowcase() {
  const { addItem } = useCart();
  const [selectedSlot, setSelectedSlot] = useState("12:00 – 1:00 PM");
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: "single-combo-meal",
      name: "Special North + South Indian Combo Lunch",
      type: "thali",
      dayName: "Daily Fresh",
      price: singleComboMenu.specialPrice,
      deliverySlot: selectedSlot,
    });
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const categories = [
    { key: "all", label: "All 14 Inclusions" },
    { key: "Dal & Pappu", label: "Dal & Pappu Varieties" },
    { key: "Curries", label: "North & South Curries" },
    { key: "Breads", label: "Fresh Breads & Rice" },
    { key: "Curd & Sides", label: "Curd, Pachadi & Sweet" },
    { key: "Accompaniments", label: "Bisleri & Essentials" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredInclusions =
    activeCategory === "all"
      ? singleComboMenu.inclusions
      : activeCategory === "Breads"
      ? singleComboMenu.inclusions.filter((i) => i.category === "Breads" || i.category === "Rice")
      : activeCategory === "Curd & Sides"
      ? singleComboMenu.inclusions.filter((i) => i.category === "Curd & Sides" || i.category === "Sweet")
      : singleComboMenu.inclusions.filter((i) => i.category === activeCategory);

  return (
    <div className="space-y-16">
      {/* 1. Main Hero Offer Banner (idlizz.com inspired banner layout) */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2D140D] via-[#381A12] to-[#241009] text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-[#52281D]">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#C85A27]/25 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#D48D48]/15 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column: Offer Callout & Key Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C85A27] text-white text-xs font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                Hyderabad Office Special
              </span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-semibold border border-white/15">
                <VegMark size="sm" />
                <span>100% Pure Veg</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 text-xs font-bold border border-emerald-700/60">
                Single Menu • Daily Fresh
              </span>
            </div>

            <div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                North + South Indian <br />
                <span className="text-[#DE6B32]">Complete Combo Lunch Meal</span>
              </h1>
              <p className="text-sm sm:text-base text-[#D8C4BC] mt-3 leading-relaxed max-w-xl font-normal">
                {singleComboMenu.subtitle}
              </p>
            </div>

            {/* Note banner: Veg curry and dal options vary on different days */}
            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-amber-500/30 flex items-start gap-3 text-xs sm:text-sm text-[#FCEBD9]">
              <Info className="w-5 h-5 text-[#D48D48] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block sm:inline">Daily Variety Note: </span>
                <span className="italic font-medium text-amber-200">
                  &ldquo;{singleComboMenu.variationNote}&rdquo;
                </span>
                <p className="text-[11px] text-[#C4ABA1] mt-0.5">
                  Enjoy rotating Pappu (Palak, Gongura, Chukkakura, Bachali) &amp; freshly prepared dry/wet curries so you never eat the exact same meal twice.
                </p>
              </div>
            </div>

            {/* Pricing Section (Strictly regular ₹219 strike-through, ₹179 special) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  {/* Regular Price Strike-through */}
                  <span className="text-neutral-400 text-sm font-semibold">
                    Regular:{" "}
                    <del className="line-through decoration-[#DE6B32] decoration-2 text-base font-bold text-neutral-300">
                      {singleComboMenu.regularPriceFormatted}
                    </del>
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#C85A27]/25 text-[#DE6B32] border border-[#C85A27]/40 text-xs font-bold">
                    {singleComboMenu.discountPercentage}
                  </span>
                </div>

                {/* Special Price Highlight */}
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-xs text-amber-200 uppercase tracking-wider font-bold">
                    Special Price:
                  </span>
                  <span className="font-display font-black text-3xl sm:text-4xl text-[#DE6B32]">
                    {singleComboMenu.specialPriceFormatted}
                  </span>
                  <span className="text-xs text-neutral-300 font-medium">/ complete meal</span>
                </div>
                <p className="text-[11px] text-[#A68F85] mt-0.5">
                  Applied automatically for orders via Website or WhatsApp
                </p>
              </div>

              {/* Delivery Slot Quick-Selector */}
              <div className="w-full sm:w-auto">
                <span className="text-[11px] font-bold text-neutral-300 block mb-1.5 uppercase tracking-wider">
                  Select Lunch Slot:
                </span>
                <div className="flex gap-1.5">
                  {siteConfig.deliverySlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                        selectedSlot === slot
                          ? "bg-[#C85A27] text-white border-[#C85A27] shadow-xs"
                          : "bg-white/10 text-neutral-300 border-white/15 hover:bg-white/20"
                      }`}
                    >
                      {slot.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="py-3.5 px-6 rounded-2xl bg-[#C85A27] hover:bg-[#B34B1B] text-white font-display font-black text-sm shadow-xl shadow-[#C85A27]/30 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>
                  {addedAnimation ? "✓ Added to Tray!" : "Order Today's Meal (₹179)"}
                </span>
              </button>

              <a
                href={`https://wa.me/${siteConfig.whatsAppNumber}?text=${encodeURIComponent(
                  `Hi Lunch Bag, I'd like to order 1x Special North + South Combo Lunch Meal at the special price of ₹179 for the ${selectedSlot} slot.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 rounded-2xl bg-emerald-800/90 hover:bg-emerald-700 text-white font-display font-bold text-sm border border-emerald-600/80 flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Order via WhatsApp (₹179)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Real Food Photography (Real North+South combo meal) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-2xl border border-white/20 group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900">
                <Image
                  src="/images/slots/hero-combo-thali.jpg"
                  alt="Special North + South Indian Combo Lunch Spread"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Live Steam rising wisps */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="absolute top-[35%] left-[45%] w-8 h-16 bg-white/40 rounded-full filter blur-md animate-steam-1" />
                  <div className="absolute top-[30%] left-[55%] w-6 h-20 bg-white/35 rounded-full filter blur-lg animate-steam-2" />
                </div>

                {/* Inclusions Badge */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-bold flex items-center gap-1.5 border border-white/20">
                  <Package className="w-3.5 h-3.5 text-amber-300" />
                  <span>14 Items Included in 1 Bag</span>
                </div>

                {/* Dispatch time stamp */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-[#EFE4D6] text-right text-[#2D140D]">
                  <p className="text-[10px] text-[#9C8278] font-bold uppercase tracking-wider">
                    Hyderabad Hub
                  </p>
                  <p className="text-xs font-black text-[#C85A27]">Under 10 Mins</p>
                </div>
              </div>

              {/* Sub-card specs */}
              <div className="p-3 pt-4 text-xs text-[#2D140D] flex items-center justify-between border-t border-neutral-100">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-600" />
                  <span className="font-semibold">~{singleComboMenu.caloriesApprox} kcal</span>
                  <span className="text-neutral-300">•</span>
                  <span className="font-bold text-emerald-700">{singleComboMenu.proteinApprox}</span>
                </div>
                <span className="font-bold text-[#C85A27] bg-[#FDF6F0] px-2.5 py-0.5 rounded-full border border-[#F5D6C4]">
                  Desi Ghee &amp; Cold-Pressed Oils
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Full Inclusions List (Every Single One of the 14 Required Items) */}
      <div className="bg-white rounded-3xl border border-[#EFE4D6] p-6 sm:p-10 shadow-sm space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#EFE4D6] pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF6F0] text-[#C85A27] text-xs font-bold uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Complete Meal Breakdown
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2D140D]">
              Everything Included in Every Single Lunch Bag
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5249] mt-1 max-w-2xl">
              No hidden add-ons. Packed in our official 5-tier thermal lunch bag with cutlery, sealed Bisleri water, and post-lunch mouth freshener.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs text-[#9C8278]">Special Combo Price</span>
            <div className="flex items-baseline gap-2 md:justify-end">
              <del className="line-through text-sm text-[#9C8278] font-bold">
                {singleComboMenu.regularPriceFormatted}
              </del>
              <span className="font-display font-black text-2xl text-[#C85A27]">
                {singleComboMenu.specialPriceFormatted}
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeCategory === cat.key
                  ? "bg-[#C85A27] text-white shadow-xs"
                  : "bg-[#FAF6EE] text-[#4A2D23] hover:bg-[#F5EDE2] border border-[#EFE4D6]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 14 Items Grid with Real Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredInclusions.map((item, idx) => (
            <div
              key={item.name}
              className="p-3.5 rounded-2xl bg-white border border-[#EFE4D6] hover:border-[#C85A27]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Real Image of Inclusion */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#FAF6EE] mb-3.5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category Pill Tag */}
                  <div className="absolute top-2.5 left-2.5 backdrop-blur-md bg-white/95 text-[#C85A27] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-lg shadow-xs border border-white/40">
                    {item.category}
                  </div>
                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-2.5 right-2.5 backdrop-blur-md bg-[#2D140D]/85 text-[#FAF6EE] text-[10px] font-bold px-2 py-0.5 rounded-lg shadow-xs border border-white/20">
                      {item.badge}
                    </div>
                  )}
                </div>

                <h3 className="font-display font-bold text-sm sm:text-base text-[#2D140D] group-hover:text-[#C85A27] transition-colors leading-snug">
                  {idx + 1}. {item.name}
                </h3>

                <p className="text-xs text-[#6B5249] mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-[#EFE4D6]/70 flex items-center justify-between text-[11px] text-[#9C8278]">
                <span>Freshly Packed Daily</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  ✓ Included
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Variation Note Box */}
        <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#EFE4D6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100/70 border border-amber-300 text-amber-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm text-[#2D140D]">
                Veg Curry &amp; Dal Variation Notice
              </p>
              <p className="text-xs text-[#6B5249]">
                &ldquo;Veg curry and dal options vary on different days.&rdquo; Cooked fresh with seasonal farm produce.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MagneticButton onClick={handleAddToCart} size="sm" variant="primary">
              Order Single Meal (₹179)
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* 3. South Indian + North Indian Combo Banner (idlizz.com style) */}
      <div className="relative rounded-3xl overflow-hidden bg-[#FAF6EE] border border-[#EFE4D6] p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#EFE4D6]">
              <Image
                src="/images/slots/south-combo-banner.jpg"
                alt="South Indian Traditional Pappu & Pachadi Feast"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute bottom-2.5 left-2.5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-bold">
                South Indian Palak Kura Pappu &amp; Pachadi
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF6F0] text-[#C85A27] text-xs font-bold uppercase tracking-wider">
              <Droplets className="w-3.5 h-3.5" />
              Regional Authenticity
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#2D140D]">
              Why Hyderabad Loves the North + South Combo
            </h3>

            <p className="text-sm text-[#6B5249] leading-relaxed">
              Why choose between phulkas and rice when you can have both? In Hyderabad&apos;s diverse corporate workplaces, some teammates crave hot North Indian phulkas and paneer subzi, while others want comforting Gongura Pappu, tangy tomato pachadi, and cooling curd rice.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-[#2D140D] font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Palak, Gongura, Chukkakura &amp; Bachali Pappu</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hand-rolled flame puffed Phulkas / Parathas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Temple-style Curd Rice &amp; Stone Chutneys</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero palm oil • Cold-pressed oils only</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
