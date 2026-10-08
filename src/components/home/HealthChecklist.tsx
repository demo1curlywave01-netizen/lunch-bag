"use client";

import React from "react";
import { healthBadges } from "@/content/badges-data";
import { TiltCard } from "@/components/ui/TiltCard";
import { Leaf, Home, Droplets, ShieldCheck } from "lucide-react";

export function HealthChecklist() {
  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case "leaf":
        return <Leaf className="w-6 h-6 text-brand-red" />;
      case "home":
        return <Home className="w-6 h-6 text-brand-red" />;
      case "droplet":
        return <Droplets className="w-6 h-6 text-brand-red" />;
      case "shield-check":
      default:
        return <ShieldCheck className="w-6 h-6 text-brand-red" />;
    }
  };

  return (
    <section className="py-20 bg-warm-canvas border-y border-red-100/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-red-200/70 text-brand-red text-xs font-bold uppercase tracking-wider shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            Zero-Compromise Kitchen
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Four Rules We Never Break.
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Every meal is prepared in small daily batches so you can eat Lunch Bag five days a week with complete peace of mind.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthBadges.map((badge, idx) => (
            <TiltCard key={badge.id} className="p-6 bg-white flex flex-col justify-between">
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getBadgeIcon(badge.iconName)}
                </div>

                <div className="text-[11px] font-bold tracking-wider uppercase text-neutral-400 mb-1">
                  0{idx + 1} • {badge.subtitle}
                </div>

                <h3 className="font-display text-lg font-bold text-neutral-900 mb-2">
                  {badge.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {badge.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-bold text-brand-red">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                <span>Verified Clean Standard</span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
