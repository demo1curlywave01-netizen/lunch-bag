"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { weeklyMenu } from "@/content/menu-data";
import { mediaSlots } from "@/content/media-slots";
import { VegMark } from "@/components/ui/VegMark";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useCart } from "@/context/CartContext";
import { Clock, Flame } from "lucide-react";

export function WeeklyMenuCalendar() {
  const [selectedDayId, setSelectedDayId] = useState<string>("mon");
  const { addItem } = useCart();

  const currentThali =
    weeklyMenu.find((m) => m.dayId === selectedDayId) || weeklyMenu[0];

  const getImageForSlot = (slotKey: string) => {
    const slot = mediaSlots[slotKey];
    return slot ? slot.path : "/images/slots/thali-monday.jpg";
  };

  return (
    <div className="space-y-12">
      {/* Day Selector Tabs with sliding indicator */}
      <div className="flex items-center justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-neutral-100 border border-neutral-200/80 shadow-inner max-w-full overflow-x-auto">
          {weeklyMenu.map((day) => {
            const isSelected = selectedDayId === day.dayId;
            return (
              <button
                key={day.dayId}
                onClick={() => setSelectedDayId(day.dayId)}
                className={`relative px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-colors whitespace-nowrap focus:outline-none ${
                  isSelected ? "text-white" : "text-neutral-600 hover:text-brand-red"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeDayTab"
                    className="absolute inset-0 bg-brand-red rounded-xl shadow-md shadow-brand-red/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>{day.dayName}</span>
                  {day.dayId === "mon" && (
                    <span
                      className={`text-[9px] uppercase px-1.5 py-0.5 rounded-full ${
                        isSelected ? "bg-white/20 text-white" : "bg-red-100 text-brand-red"
                      }`}
                    >
                      Today
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Animated Day Content Swap */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentThali.dayId}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl border border-red-100 shadow-md p-6 sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Food Photography with Zoom on hover */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 shadow-lg group">
                <Image
                  src={getImageForSlot(currentThali.mediaSlotKey)}
                  alt={currentThali.thaliTitle}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                {/* Pure Veg Tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                  <VegMark size="sm" />
                  <span className="text-xs font-bold text-neutral-800">
                    100% Pure Veg Kitchen
                  </span>
                </div>

                {/* Nutrition strip */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3 rounded-xl text-white flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-orange-400" />
                    <span>~{currentThali.caloriesApprox} kcal</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                  <span className="font-semibold text-green-300">
                    {currentThali.proteinApprox}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                  <span className="text-neutral-300">Zero Palm Oil</span>
                </div>
              </div>

              {/* Highlights pills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {currentThali.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-3 py-1 bg-red-50 text-brand-red text-xs font-bold rounded-lg border border-red-100"
                  >
                    ✓ {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Thali Details & 6 Items Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-red" />
                  <span>Scheduled For {currentThali.dayName} Lunch Hour</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight">
                  {currentThali.thaliTitle}
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 mt-2 leading-relaxed">
                  {currentThali.description}
                </p>
              </div>

              {/* 6 Thali Compartments Grid */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                  What&apos;s Inside This Thali
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentThali.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-3 rounded-xl bg-neutral-50 border border-neutral-200/70 hover:border-red-200 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-bold text-xs text-neutral-900">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-bold uppercase px-1.5 py-0.2 bg-white text-neutral-500 rounded border border-neutral-200">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-500 line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Add to Cart action */}
              <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-black text-3xl text-brand-red">
                      {currentThali.priceFormatted}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {currentThali.priceNote}
                    </span>
                  </div>
                  <p className="text-xs text-green-700 font-semibold mt-0.5">
                    Includes 3 Phulkas + Rice + Dal + Mains + Salad + Sweet
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <MagneticButton
                    onClick={() =>
                      addItem({
                        id: currentThali.dayId,
                        name: currentThali.thaliTitle,
                        type: "thali",
                        dayName: currentThali.dayName,
                        price: 149,
                      })
                    }
                    size="lg"
                    variant="primary"
                    className="w-full sm:w-auto"
                    withArrow
                  >
                    Add to My Week
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Full 5-Day Weekly Overview Cards Grid */}
      <div className="pt-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <h3 className="font-display text-2xl font-bold text-neutral-900">
            All 5 Days at a Glance
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500">
            Never eat the same meal two days in a row. Fresh varieties rotated every Monday to Friday.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {weeklyMenu.map((day) => (
            <button
              key={day.dayId}
              type="button"
              onClick={() => setSelectedDayId(day.dayId)}
              className={`text-left p-4 rounded-2xl border transition-all duration-200 ${
                selectedDayId === day.dayId
                  ? "bg-red-50/70 border-brand-red shadow-sm ring-1 ring-brand-red"
                  : "bg-white border-neutral-200 hover:border-red-200"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-display font-black text-sm text-neutral-900">
                  {day.dayName}
                </span>
                <VegMark size="sm" />
              </div>
              <p className="font-bold text-xs text-brand-red mb-1 line-clamp-1">
                {day.thaliTitle}
              </p>
              <p className="text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">
                {day.items.map((i) => i.name).join(", ")}
              </p>
              <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px]">
                <span className="font-bold text-neutral-800">{day.priceFormatted}</span>
                <span className="text-brand-red font-semibold hover:underline">
                  Select →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
