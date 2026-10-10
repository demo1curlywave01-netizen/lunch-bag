"use client";

import React from "react";
import { healthBadges } from "@/content/badges-data";
import { TiltCard } from "@/components/ui/TiltCard";
import { Leaf, Home, Droplets, ShieldCheck } from "lucide-react";

export function HealthChecklist() {
  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case "leaf":
        return <Leaf className="w-6 h-6 text-[#C85A27]" />;
      case "home":
        return <Home className="w-6 h-6 text-[#C85A27]" />;
      case "droplet":
        return <Droplets className="w-6 h-6 text-[#C85A27]" />;
      case "shield-check":
      default:
        return <ShieldCheck className="w-6 h-6 text-[#C85A27]" />;
    }
  };

  return (
    <section className="py-20 bg-[#FAF6EE]/50 border-y border-[#C85A27]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C85A27]/20 text-[#C85A27] text-xs font-bold uppercase tracking-wider shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C85A27]" />
            Zero-Compromise Kitchen
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#2D140D] tracking-tight">
            Four Rules We Never Break.
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Every meal is prepared in small daily batches so you can eat Lunch Bag five days a week with complete peace of mind.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthBadges.map((badge, idx) => (
            <TiltCard key={badge.id} className="p-6 bg-white border border-[#C85A27]/15 flex flex-col justify-between">
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-[#FAF6EE] border border-[#C85A27]/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getBadgeIcon(badge.iconName)}
                </div>

                <div className="text-[11px] font-bold tracking-wider uppercase text-neutral-400 mb-1">
                  0{idx + 1} • {badge.subtitle}
                </div>

                <h3 className="font-display text-lg font-bold text-[#2D140D] mb-2">
                  {badge.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {badge.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-bold text-[#C85A27]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C85A27]" />
                <span>Verified Clean Standard</span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
