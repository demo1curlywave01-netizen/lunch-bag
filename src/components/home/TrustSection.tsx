"use client";

import React from "react";
import { reviewSlots, partnerLogoSlots } from "@/content/trust-data";
import { siteConfig } from "@/content/site-config";
import { TiltCard } from "@/components/ui/TiltCard";
import { ShieldCheck, MessageSquareQuote, Building, Info } from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-24 bg-white border-t border-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            Transparent & Trustworthy
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Trusted by Corporate Professionals
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Honest workplace dining with zero false claims. Real feedback from office hubs across Cyber City and surrounding tech corridors.
          </p>
        </div>

        {/* Corporate Hubs / Partner Slots (Clearly marked transparent placeholders) */}
        <div className="mb-16">
          <p className="text-center text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">
            Serving Teams Across Major Tech Parks & Coworking Hubs
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {partnerLogoSlots.map((slot) => (
              <div
                key={slot.id}
                className="p-4 rounded-2xl bg-neutral-50/80 border border-dashed border-neutral-300 text-center flex flex-col items-center justify-center min-h-[90px] group hover:border-brand-red/50 transition-colors"
              >
                <Building className="w-5 h-5 text-neutral-400 group-hover:text-brand-red mb-1.5 transition-colors" />
                <span className="text-xs font-bold text-neutral-700">
                  {slot.name}
                </span>
                <span className="text-[10px] text-neutral-400 mt-0.5">
                  {slot.note}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Review Slots (Strictly client-to-provide placeholders) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviewSlots.map((review) => (
            <TiltCard key={review.id} className="p-6 bg-white flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-brand-red">
                    <MessageSquareQuote className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200">
                    Client Review Slot
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 italic leading-relaxed">
                  {review.reviewQuote}
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100">
                <p className="text-xs font-bold text-neutral-900">
                  {review.clientRole}
                </p>
                <p className="text-[11px] text-neutral-500">
                  {review.officeArea}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Transparent Compliance Note */}
        <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center gap-3 text-xs text-neutral-500">
          <Info className="w-4 h-4 text-neutral-400 shrink-0" />
          <p>
            <span className="font-bold text-neutral-700">Client Compliance Assurance:</span>{" "}
            {siteConfig.fssaiNumber}. Lunch Bag maintains a transparent policy: we never display fabricated reviews, false subscriber counters, or unverified star ratings.
          </p>
        </div>
      </div>
    </section>
  );
}
