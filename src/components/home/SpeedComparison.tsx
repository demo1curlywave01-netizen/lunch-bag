"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Building, CheckCircle2, XCircle } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function SpeedComparison() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-brand-red fill-brand-red" />
              The 10-Minute Staging Model
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-tight">
              Restaurant Speed. <br />
              <span className="text-brand-red">Mother&apos;s Kitchen Quality.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Skip the 45-minute wait on standard food delivery apps. We strategically pre-stage our fresh, hot meals near major corporate hubs so that your lunch arrives in under 10 minutes. It&apos;s faster than walking down to the office food court.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-700">
                  <span className="font-bold text-neutral-900">Pre-staged thermal pods:</span> Meals are packed right before the lunch bell in insulated thermal totes.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-700">
                  <span className="font-bold text-neutral-900">Dedicated desk delivery:</span> Our runner is already at your building lobby, avoiding traffic delays.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-700">
                  <span className="font-bold text-neutral-900">No surge fees:</span> Zero inflated peak-hour delivery charges or platform fees.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <MagneticButton href="/passes" variant="primary" withArrow>
                Experience 10-Minute Delivery
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: 45-min vs 10-min Visual Comparison Bar */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200/80 shadow-sm space-y-6">
              <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider">
                Lunchtime Wait Comparison
              </h3>

              {/* Standard Food Apps (45 - 60 mins) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-neutral-700 font-bold">
                    <XCircle className="w-4 h-4 text-neutral-400" />
                    <span>Typical Food Apps</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-neutral-500">
                    45 – 55 Mins
                  </span>
                </div>

                {/* Long Progress Bar */}
                <div className="h-3 w-full bg-neutral-100 rounded-full overflow-hidden">
                  <div className="h-full bg-neutral-300 rounded-full w-[88%]" />
                </div>

                <div className="flex items-center justify-between text-[11px] text-neutral-400">
                  <span>Order placed</span>
                  <span>Kitchen delay</span>
                  <span>Rider traffic</span>
                  <span>Cold food arrives</span>
                </div>
              </div>

              {/* Lunch Bag Pre-Staged (Under 10 mins) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-brand-red shadow-lg shadow-brand-red/10 space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-red text-white text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                  4.5x Faster
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-brand-red font-black">
                    <Zap className="w-5 h-5 text-brand-red fill-brand-red" />
                    <span className="text-base font-display">Lunch Bag Pre-Staged Hub</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-xl font-black text-brand-red">
                      &lt; 10 Mins
                    </span>
                  </div>
                </div>

                {/* Animated Fast Progress Bar */}
                <div className="h-3 w-full bg-red-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "22%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-brand-red rounded-full"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] text-neutral-600 font-medium text-center">
                  <div className="p-2 rounded-xl bg-red-50/60 border border-red-100/50">
                    <span className="block font-bold text-neutral-900">01. Tap</span>
                    Select your meal
                  </div>
                  <div className="p-2 rounded-xl bg-red-50/60 border border-red-100/50">
                    <span className="block font-bold text-neutral-900">02. Hub Dispatch</span>
                    Piped from local pod
                  </div>
                  <div className="p-2 rounded-xl bg-brand-red text-white font-bold shadow-xs">
                    <span className="block">03. At Desk</span>
                    Steaming hot in 10m
                  </div>
                </div>
              </div>

              {/* Food Court Walking Comparison */}
              <div className="p-3.5 rounded-xl bg-neutral-100/70 border border-neutral-200/60 flex items-center justify-between text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-neutral-500" />
                  <span>Walking to Mall Food Court + Standing in Queue</span>
                </div>
                <span className="font-mono font-bold text-neutral-700">~25 Mins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
