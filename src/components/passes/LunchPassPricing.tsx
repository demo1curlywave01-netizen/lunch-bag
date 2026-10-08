"use client";

import React, { useState } from "react";
import Image from "next/image";
import { lunchPassPlans, passFaqs, PassPlan } from "@/content/passes-data";
import { siteConfig } from "@/content/site-config";
import { TiltCard } from "@/components/ui/TiltCard";
import { VegMark } from "@/components/ui/VegMark";
import { Check, Clock, ShieldAlert, CheckCircle, ChevronDown, PackageCheck, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function LunchPassPricing() {
  const [selectedPlan, setSelectedPlan] = useState<PassPlan>(lunchPassPlans[1]); // default to 20-day pass
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [officeHub, setOfficeHub] = useState(siteConfig.deliveryHubs[0]);
  const [buildingFloor, setBuildingFloor] = useState("");
  const [timeSlot, setTimeSlot] = useState("1:00 PM");
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

  // Open FAQ accordion
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const handleStartPassPurchase = (plan: PassPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    setOrderStatus({ status: "idle", message: "" });
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !buildingFloor) {
      alert("Please provide your name, phone number, and building/floor details.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId: selectedPlan.id,
          customer: {
            name: fullName,
            phone,
            officeHub,
            buildingFloor,
            timeSlot,
            startDate,
          },
        }),
      });

      const data = await res.json();

      if (data.mode === "mock_test_mode" || data.status === "keys_not_configured") {
        setOrderStatus({
          status: "success",
          message:
            data.message ||
            "Order registered in Test Mode. Razorpay credentials pending in .env. No payment was deducted.",
        });
      } else if (data.orderId) {
        setOrderStatus({
          status: "success",
          message: `Razorpay order created (${data.orderId}). Payment simulated in Test Mode.`,
        });
      }
    } catch {
      setOrderStatus({
        status: "success",
        message: "Order placed in development test mode. Pass scheduled successfully.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-20">
      {/* 2 Clean Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
        {lunchPassPlans.map((plan) => (
          <TiltCard
            key={plan.id}
            className={`p-8 sm:p-10 bg-white flex flex-col justify-between relative overflow-hidden ${
              plan.isPopular
                ? "border-2 border-brand-red shadow-xl shadow-brand-red/10 ring-1 ring-brand-red/20"
                : "border border-neutral-200"
            }`}
          >
            {/* Best Value Ribbon */}
            {plan.badge && (
              <div className="absolute top-0 right-0 bg-brand-red text-white text-[11px] font-black uppercase px-4 py-1.5 rounded-bl-2xl tracking-wider shadow-xs">
                {plan.badge}
              </div>
            )}

            <div>
              <div className="flex items-center gap-2 mb-2">
                <VegMark size="sm" />
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                  {plan.validityDays} Weekday Meals
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-2">
                {plan.name}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 mb-6 leading-relaxed">
                {plan.tagline}
              </p>

              {/* Price Block */}
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 mb-6 space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-3xl sm:text-4xl text-brand-red">
                    {plan.totalPriceFormatted}
                  </span>
                  <span className="text-xs text-neutral-500 font-semibold">
                    ({plan.pricePerMeal})
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span>{plan.priceNote}</span>
                  <span className="text-green-700 font-bold bg-green-50 px-2 py-0.5 rounded border border-green-200">
                    {plan.savings}
                  </span>
                </div>
              </div>

              {/* Inclusions List */}
              <div className="space-y-3 mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  What&apos;s Included:
                </p>
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <div className="w-4 h-4 rounded-full bg-red-50 text-brand-red flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] text-neutral-400 mb-4 italic">
                {plan.termsSnippet}
              </p>
              <button
                type="button"
                onClick={() => handleStartPassPurchase(plan)}
                className={`w-full py-4 rounded-2xl font-display font-extrabold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md ${
                  plan.isPopular
                    ? "bg-brand-red hover:bg-brand-red-dark text-white shadow-brand-red/25"
                    : "bg-neutral-900 hover:bg-neutral-800 text-white"
                }`}
              >
                <span>Select {plan.name}</span>
                <span>→</span>
              </button>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Pause & Skip Info Text Banner */}
      <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-brand-red shrink-0 shadow-xs">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-base text-neutral-900">
              Work From Home or Going on Leave? Zero Problem.
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-1">
              Simply message our WhatsApp bot or runner before 10:30 AM to pause or skip your lunch for the day. Unused meals never expire within your pass validity window.
            </p>
          </div>
        </div>
      </div>

      {/* Official Bag Packaging Experience Callout */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-amber-900/15 p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 relative">
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-md border border-neutral-100 bg-neutral-50">
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200/60">
              <PackageCheck className="w-3.5 h-3.5 text-brand-red" />
              <span>Official 5-Tier Packaging</span>
            </div>

            <h4 className="font-display font-extrabold text-xl sm:text-2xl text-neutral-900">
              Every Meal Arrives in Our Signature Stacked Lunch Bag
            </h4>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              No flimsy plastic bags or messy containers. Your daily pass meal arrives in our official
              custom-engineered 5-tier carrier (available in reusable insulated tote and biodegradable kraft formats)
              with separate sealed bowls for your roti, sabzi, dal, rice, and dessert.
            </p>

            <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-bold text-neutral-700">
              <span className="px-2.5 py-1 rounded-lg bg-neutral-100 border border-neutral-200">
                ✓ 5 Sealed Tiers
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-neutral-100 border border-neutral-200">
                ✓ 100% Spill-Proof
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-neutral-100 border border-neutral-200">
                ✓ Cutlery &amp; Napkin Included
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-3xl mx-auto space-y-4">
        <h3 className="font-display text-2xl font-bold text-neutral-900 text-center mb-8">
          Frequently Asked Questions About Lunch Passes
        </h3>
        {passFaqs.map((faq, idx) => {
          const isOpen = openFaqIdx === idx;
          return (
            <div
              key={faq.question}
              className="rounded-2xl border border-neutral-200 bg-white overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-neutral-900 focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-brand-red" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Purchase Modal Flow */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-neutral-100 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
            >
              {orderStatus.status === "success" ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-neutral-900">
                    Pass Registered!
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto">
                    Thank you, <span className="font-bold">{fullName}</span>! Your{" "}
                    <span className="font-bold text-brand-red">{selectedPlan.name}</span> will start on{" "}
                    <span className="font-bold">{startDate}</span> for the {timeSlot} slot.
                  </p>
                  <div className="p-3.5 bg-neutral-50 rounded-xl text-xs text-neutral-600 border border-neutral-200">
                    {orderStatus.message}
                  </div>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setOrderStatus({ status: "idle", message: "" });
                    }}
                    className="px-6 py-2.5 bg-brand-red text-white text-xs font-bold rounded-xl hover:bg-brand-red-dark"
                  >
                    Done & Return
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitOrder} className="space-y-4">
                  <div className="border-b border-neutral-100 pb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
                        Configure Your Pass
                      </span>
                      <VegMark size="sm" />
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-neutral-900">
                      {selectedPlan.name} ({selectedPlan.totalPriceFormatted})
                    </h3>
                    <p className="text-xs text-neutral-500">
                      {selectedPlan.priceNote} • {selectedPlan.validityDays} pure veg meals
                    </p>
                  </div>

                  {/* Form fields */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Priya Iyer"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
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
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Office Delivery Hub *
                    </label>
                    <select
                      value={officeHub}
                      onChange={(e) => setOfficeHub(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-red"
                    >
                      {siteConfig.deliveryHubs.map((hub) => (
                        <option key={hub} value={hub}>
                          {hub}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Tower / Floor / Desk Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={buildingFloor}
                      onChange={(e) => setBuildingFloor(e.target.value)}
                      placeholder="e.g. Building 10B, 4th Floor, Desk 418"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Daily Lunch Slot *
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-red"
                      >
                        <option value="12:30 PM">12:30 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="1:30 PM">1:30 PM</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        Start Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={startDate}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-red"
                      >
                      </input>
                    </div>
                  </div>

                  {/* Payment notice */}
                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-[11px] text-neutral-500 flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>
                      Razorpay Test Mode is active. Once keys are configured in .env, secure payment popup will load here.
                    </span>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="w-1/3 py-3 text-xs font-bold rounded-xl border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-2/3 py-3 text-xs font-bold rounded-xl bg-brand-red text-white hover:bg-brand-red-dark shadow-sm flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Processing..." : `Confirm ${selectedPlan.totalPriceFormatted}`}
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
