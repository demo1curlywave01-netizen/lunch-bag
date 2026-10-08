import React from "react";
import { Metadata } from "next";
import { CorporateEnquiryForm } from "@/components/corporate/CorporateEnquiryForm";
import { VegMark } from "@/components/ui/VegMark";
import { FinalCtaBand } from "@/components/home/FinalCtaBand";
import { Building2, Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Lunch Subscriptions & Office Perks",
  description:
    "Subsidize or sponsor daily pure-veg homemade lunch delivery for your employees. Boost afternoon productivity, save team time, and enjoy consolidated monthly GST billing.",
};

export default function CompaniesPage() {
  return (
    <div className="pt-28 md:pt-36">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-red-50/50 via-warm-canvas to-white py-12 border-b border-red-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider border border-red-100">
              <Building2 className="w-3.5 h-3.5" />
              For HR Leaders & Founders
            </span>
            <VegMark size="sm" showLabel />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Wholesale Homemade Meals <br className="hidden sm:inline" />
            <span className="text-brand-red">For High-Performing Teams.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Eliminate the 45-minute daily scramble down to crowded food courts. Sponsor or subsidize hot, pure-vegetarian home-cooked thalis delivered right to your office pantry in under 10 minutes.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 font-semibold">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Complimentary Onsite Tasting Session for Leadership</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span>100% Pure Veg • Consolidated GST Invoicing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Corporate Perks & Validated Enquiry Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CorporateEnquiryForm />
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCtaBand />
    </div>
  );
}
