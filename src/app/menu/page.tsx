import React from "react";
import { Metadata } from "next";
import { SingleMenuShowcase } from "@/components/menu/SingleMenuShowcase";
import { VegMark } from "@/components/ui/VegMark";
import { FinalCtaBand } from "@/components/home/FinalCtaBand";
import { Sparkles, Clock, ShieldCheck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Special North + South Indian Combo Lunch Menu (₹179)",
  description:
    "Our complete 14-item North + South Indian combo lunch menu. Steamed rice, phulkas, fresh pappu dal, dry & wet veg curries, curd rice, pachadi, sweet & Bisleri water delivered in under 10 minutes to your Hyderabad office desk.",
};

export default function MenuPage() {
  return (
    <div className="pt-28 md:pt-36 bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#FAF6EE] via-[#FDFBF7] to-white py-12 border-b border-[#EFE4D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF6F0] text-[#C85A27] text-xs font-bold uppercase tracking-wider border border-[#F5D6C4]">
              <Sparkles className="w-3.5 h-3.5" />
              Cooked Fresh Every Morning
            </span>
            <VegMark size="sm" showLabel />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D140D] tracking-tight">
            North + South Indian <br className="hidden sm:inline" />
            <span className="text-[#C85A27]">Combo Lunch Menu</span>
          </h1>

          <p className="text-base sm:text-lg text-[#6B5249] max-w-2xl mx-auto leading-relaxed">
            Pure vegetarian, wholesome, and prepared fresh every morning in cold-pressed oils and pure desi ghee. Regular price <del className="font-semibold text-[#9C8278]">₹219</del> — <span className="font-bold text-[#C85A27]">Special price ₹179 per meal</span> on website or WhatsApp.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-[#6B5249] font-semibold">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C85A27]" />
              <span>Slots: 12:00–1:00 PM • 1:00–2:00 PM • 2:00–3:00 PM</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C85A27]" />
              <span>All Major Hyderabad IT Hubs</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Zero Palm Oil Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Single Menu Interactive Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SingleMenuShowcase />
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCtaBand />
    </div>
  );
}
