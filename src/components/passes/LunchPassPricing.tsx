"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { lunchPassPlans, PassPlan } from "@/content/passes-data";
import { siteConfig } from "@/content/site-config";
import { TiltCard } from "@/components/ui/TiltCard";
import { VegMark } from "@/components/ui/VegMark";
import {
  Check,
  Clock,
  MessageCircle,
  CheckCircle,
  PackageCheck,
  Sparkles,
  MapPin,
  Wallet,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function LunchPassPricing() {
  const [selectedPlan, setSelectedPlan] = useState<PassPlan>(lunchPassPlans[2]); // default to 24-day pass
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [officeHub, setOfficeHub] = useState(siteConfig.deliveryHubs[6]); // default Madhapur / HITEC City
  const [buildingFloor, setBuildingFloor] = useState("");
  const [timeSlot, setTimeSlot] = useState(siteConfig.deliverySlots[0]); // 12:00 – 1:00 PM
  const [startDate, setStartDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderStatus, setOrderStatus] = useState<{
    status: "idle" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });

  const [waOrderUrl, setWaOrderUrl] = useState("");

  const handleStartPassPurchase = (plan: PassPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    setOrderStatus({ status: "idle", message: "" });
    setWaOrderUrl("");
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !buildingFloor) {
      alert("Please provide your name, phone number, and building/floor details.");
      return;
    }

    const message = [
      "🍱 *NEW PASS ORDER - LUNCH BAG (HYDERABAD)* 🍱",
      "------------------------------------------",
      `*Plan:* ${selectedPlan.name}`,
      `*Total Amount:* ${selectedPlan.totalPriceFormatted}`,
      "",
      "👤 *Customer Details:*",
      `• *Name:* ${fullName}`,
      `• *Phone:* ${phone}`,
      "",
      "📍 *Delivery Details:*",
      `• *Hub:* ${officeHub}`,
      `• *Desk / Floor / Tower:* ${buildingFloor}`,
      `• *Daily Lunch Slot:* ${timeSlot}`,
      `• *Start Date:* ${startDate}`,
      "------------------------------------------",
      "Please confirm my order!",
    ].join("\n");

    const waUrl = `https://wa.me/${siteConfig.whatsAppNumber}?text=${encodeURIComponent(message)}`;
    setWaOrderUrl(waUrl);

    // Open WhatsApp in new tab
    window.open(waUrl, "_blank");

    setOrderStatus({
      status: "success",
      message: `Your order details for ${selectedPlan.name} (${selectedPlan.totalPriceFormatted}) have been prepared and sent to WhatsApp (${siteConfig.contactPhone}). Our team will confirm your desk delivery!`,
    });
  };

  return (
    <div className="space-y-20">
      {/* 1. Pricing Plan Cards: Daily Meal (₹179), 6 Days Pass (₹999), 24 Days Pass (₹3888) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto items-stretch">
        {lunchPassPlans.map((plan) => (
          <TiltCard
            key={plan.id}
            className={`p-6 sm:p-8 bg-white flex flex-col justify-between relative overflow-hidden rounded-3xl ${
              plan.isPopular
                ? "border-2 border-[#C85A27] shadow-xl shadow-[#C85A27]/15 ring-1 ring-[#C85A27]/25"
                : "border border-[#EFE4D6] shadow-sm"
            }`}
          >
            {/* Ribbon Badge */}
            {plan.badge && (
              <div
                className={`absolute top-0 right-0 text-[10px] font-black uppercase px-3.5 py-1.5 rounded-bl-2xl tracking-wider shadow-xs ${
                  plan.isPopular
                    ? "bg-[#C85A27] text-white"
                    : "bg-[#2D140D] text-white"
                }`}
              >
                {plan.badge}
              </div>
            )}

            <div>
              <div className="flex items-center gap-2 mb-2">
                <VegMark size="sm" />
                <span className="text-[11px] font-bold text-[#A1715E] uppercase tracking-wider">
                  {plan.validityDays === 1 ? "Single Day" : `${plan.validityDays} Workday Meals`}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#2D140D] mb-1.5">
                {plan.name}
              </h3>

              <p className="text-xs text-[#6B5249] mb-5 leading-relaxed min-h-[36px]">
                {plan.tagline}
              </p>

              {/* Price Block with Regular Price Strikethrough & Special Price */}
              <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#EFE4D6] mb-6 space-y-1.5">
                {plan.regularTotalPriceFormatted && (
                  <div className="flex items-center gap-2 text-xs text-[#9C8278]">
                    <span>Regular:</span>
                    <del className="line-through font-bold text-[#9C8278]">
                      {plan.regularTotalPriceFormatted}
                    </del>
                    {plan.regularPricePerMeal && (
                      <span className="text-[11px]">({plan.regularPricePerMeal})</span>
                    )}
                  </div>
                )}

                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-3xl sm:text-4xl text-[#C85A27]">
                    {plan.totalPriceFormatted}
                  </span>
                  <span className="text-xs text-[#6B5249] font-bold">
                    ({plan.pricePerMeal})
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs pt-1 border-t border-[#EFE4D6]">
                  <span className="text-[11px] text-[#6B5249] truncate max-w-[180px]">
                    {plan.priceNote}
                  </span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0 text-[11px]">
                    {plan.savings}
                  </span>
                </div>
              </div>

              {/* Inclusions List */}
              <div className="space-y-2.5 mb-6">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#A1715E]">
                  Plan Benefits:
                </p>
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-xs text-[#2D140D]">
                    <div className="w-4 h-4 rounded-full bg-[#FDF6F0] text-[#C85A27] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] text-[#9C8278] mb-4 italic leading-tight">
                {plan.termsSnippet}
              </p>
              <button
                type="button"
                onClick={() => handleStartPassPurchase(plan)}
                className={`w-full py-3.5 rounded-2xl font-display font-black text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer ${
                  plan.isPopular
                    ? "bg-[#C85A27] hover:bg-[#B34B1B] text-white shadow-[#C85A27]/25"
                    : "bg-[#2D140D] hover:bg-[#3D1D14] text-white"
                }`}
              >
                <span>Select {plan.name}</span>
                <span>→</span>
              </button>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* 2. Delivery Time Slots & Hub Coverage Bar */}
      <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-[#EFE4D6] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Time Slots Column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A1715E]">
              <Clock className="w-4 h-4 text-[#C85A27]" />
              <span>3 Scheduled Delivery Slots Daily</span>
            </div>
            <h4 className="font-display font-extrabold text-xl text-[#2D140D]">
              Choose Your Lunch Hour
            </h4>
            <div className="grid grid-cols-3 gap-2 pt-1">
              {siteConfig.deliverySlots.map((slot) => (
                <div
                  key={slot}
                  className="p-3 rounded-xl bg-[#FAF6EE] border border-[#EFE4D6] text-center"
                >
                  <p className="font-bold text-xs text-[#2D140D]">{slot}</p>
                  <p className="text-[10px] text-emerald-700 font-semibold mt-0.5">Active</p>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#6B5249]">
              You can adjust your time slot for any upcoming day directly from your pass portal.
            </p>
          </div>

          {/* Active Hyderabad Hubs Column (Visible Chips List - Requirement 7) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A1715E]">
                <MapPin className="w-4 h-4 text-[#C85A27]" />
                <span>Hyderabad Delivery Hubs</span>
              </div>
              <span className="text-[11px] font-bold text-emerald-700">10 Active Hubs</span>
            </div>
            <h4 className="font-display font-extrabold text-xl text-[#2D140D]">
              Fast Desk Dispatch Coverage
            </h4>
            <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto p-2.5 rounded-2xl bg-[#FAF6EE] border border-[#EFE4D6]">
              {siteConfig.deliveryHubs.map((hub) => (
                <span
                  key={hub}
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#EFE4D6] text-[11px] font-medium text-[#2D140D] flex items-center gap-1 shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>{hub}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Signature 5-Tier Bag Packaging Feature */}
      <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-[#EFE4D6] p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 relative">
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-md border border-[#EFE4D6] bg-neutral-100">
              <Image
                src="/images/slots/official-lunch-bags.jpg"
                alt="Official Lunch Bag Packaging for Pass Subscribers"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                <span>Included with Every Pass</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF6F0] text-[#C85A27] text-xs font-bold uppercase tracking-wider border border-[#F5D6C4]">
              <PackageCheck className="w-3.5 h-3.5 text-[#C85A27]" />
              <span>Official 5-Tier Packaging</span>
            </div>

            <h4 className="font-display font-extrabold text-xl sm:text-2xl text-[#2D140D]">
              Delivered in Our Signature Stacked Lunch Bag
            </h4>

            <p className="text-xs sm:text-sm text-[#6B5249] leading-relaxed">
              Every pass meal arrives in our signature 5-tier vertical carrier with individual sealed containers for rice, phulkas, dal/pappu, curries, and dessert. 100% spill-proof, desk-ready, with complimentary cutlery, napkin, and 200 ml Bisleri water.
            </p>

            <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-bold text-[#2D140D]">
              <span className="px-2.5 py-1 rounded-lg bg-[#FAF6EE] border border-[#EFE4D6]">
                ✓ 5 Sealed Tiers
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[#FAF6EE] border border-[#EFE4D6]">
                ✓ 100% Spill-Proof
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[#FAF6EE] border border-[#EFE4D6]">
                ✓ Bisleri Water (200 ml) Included
              </span>
            </div>
          </div>
        </div>
      </div>



      {/* Purchase Modal Flow (With visible chips for Hub Selection - No dropdowns!) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#2D140D] backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#EFE4D6] p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
            >
              {orderStatus.status === "success" ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#2D140D]">
                    Order Sent to WhatsApp!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B5249] max-w-sm mx-auto">
                    Thank you, <span className="font-bold">{fullName}</span>! Your order details for{" "}
                    <span className="font-bold text-[#C85A27]">{selectedPlan.name}</span> ({selectedPlan.totalPriceFormatted}) have been sent to WhatsApp (<strong>{siteConfig.contactPhone}</strong>) for dispatch to {officeHub}.
                  </p>
                  {waOrderUrl && (
                    <div className="pt-2">
                      <a
                        href={waOrderUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-xs"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Open WhatsApp ({siteConfig.contactPhone})</span>
                      </a>
                    </div>
                  )}
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setIsModalOpen(false);
                        setOrderStatus({ status: "idle", message: "" });
                        setWaOrderUrl("");
                      }}
                      className="px-6 py-2.5 bg-[#2D140D] text-white text-xs font-bold rounded-xl hover:bg-[#1A0B07] cursor-pointer"
                    >
                      Done &amp; Return
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitOrder} className="space-y-4">
                  <div className="border-b border-[#EFE4D6] pb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#C85A27] uppercase tracking-wider">
                        Configure Your Order
                      </span>
                      <VegMark size="sm" />
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-[#2D140D]">
                      {selectedPlan.name} ({selectedPlan.totalPriceFormatted})
                    </h3>
                    <p className="text-xs text-[#6B5249]">
                      {selectedPlan.priceNote} • {selectedPlan.validityDays} pure veg meal(s)
                    </p>
                  </div>

                  {/* Form fields */}
                  <div>
                    <label className="block text-xs font-bold text-[#2D140D] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Priya Iyer"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#EFE4D6] focus:outline-none focus:ring-2 focus:ring-[#C85A27]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2D140D] mb-1">
                      10-Digit Mobile Number (Indian) *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[6-9][0-9]{9}"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#EFE4D6] focus:outline-none focus:ring-2 focus:ring-[#C85A27]"
                    />
                  </div>

                  {/* Office Hub Selector (Visible Chips - No Dropdown! Requirement 7) */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-bold text-[#2D140D]">
                        Select Hyderabad Delivery Hub *
                      </label>
                      <span className="text-[11px] font-bold text-[#C85A27]">
                        {officeHub}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-2 rounded-xl bg-[#FAF6EE] border border-[#EFE4D6]">
                      {siteConfig.deliveryHubs.map((hub) => (
                        <button
                          key={hub}
                          type="button"
                          onClick={() => setOfficeHub(hub)}
                          className={`text-left px-2.5 py-1.5 text-[11px] rounded-lg border transition-all ${
                            officeHub === hub
                              ? "bg-[#C85A27] text-white border-[#C85A27] font-bold shadow-xs"
                              : "bg-white text-[#2D140D] border-[#EFE4D6] hover:border-[#C85A27]/40 font-medium"
                          }`}
                        >
                          {hub}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2D140D] mb-1">
                      Tower / Floor / Desk Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={buildingFloor}
                      onChange={(e) => setBuildingFloor(e.target.value)}
                      placeholder="e.g. Cyber Towers, 4th Floor, Desk 418"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#EFE4D6] focus:outline-none focus:ring-2 focus:ring-[#C85A27]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#2D140D] mb-1">
                        Daily Lunch Slot *
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#EFE4D6] bg-white text-[#2D140D] focus:outline-none focus:ring-2 focus:ring-[#C85A27]"
                      >
                        {siteConfig.deliverySlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#2D140D] mb-1">
                        Start Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={startDate}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#EFE4D6] bg-white text-[#2D140D] focus:outline-none focus:ring-2 focus:ring-[#C85A27]"
                      />
                    </div>
                  </div>

                  {/* WhatsApp order notice */}
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-900 flex items-start gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Order details will be sent directly to Lunch Bag WhatsApp (<strong>{siteConfig.contactPhone}</strong>) for instant confirmation and desk dispatch.
                    </span>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="w-1/3 py-3 text-xs font-bold rounded-xl border border-[#EFE4D6] text-[#6B5249] hover:bg-[#FAF6EE]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-3 text-xs font-bold rounded-xl bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirm on WhatsApp ({selectedPlan.totalPriceFormatted})</span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
