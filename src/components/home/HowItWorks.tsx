"use client";

import React from "react";
import { TiltCard } from "@/components/ui/TiltCard";
import { ShoppingBag, Truck, CheckCircle2, ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Meal or Pass",
      desc: "Order today's North + South Indian combo meal (₹179) or automate your weekday routine with a 6-Day or 24-Day Lunch Pass.",
      icon: <ShoppingBag className="w-6 h-6 text-[#C85A27]" />,
      detail: "14-Item North + South Combo",
    },
    {
      number: "02",
      title: "We Pre-Stage Near Your Hub",
      desc: "Fresh, piping hot batches travel in insulated temperature pods to strategic staging nodes right outside 10 major Hyderabad corporate tech parks.",
      icon: <Truck className="w-6 h-6 text-[#C85A27]" />,
      detail: "Dispatched from nearby tech park pod",
    },
    {
      number: "03",
      title: "Desk Delivery Under 10 Mins",
      desc: "During your chosen lunchtime slot (12–1 PM, 1–2 PM, or 2–3 PM), our dedicated floor runner brings your hot lunch bag straight to your office desk.",
      icon: <CheckCircle2 className="w-6 h-6 text-[#C85A27]" />,
      detail: "Zero wait • Zero food court queues",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C85A27]/10 text-[#C85A27] text-xs font-bold uppercase tracking-wider">
            Frictionless Daily Routine
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#2D140D] tracking-tight">
            How Lunch Bag Works in 3 Steps
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Engineered specifically for busy corporate professionals in Hyderabad who value their health, time, and afternoon productivity.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <TiltCard key={step.number} className="p-8 bg-[#FAF6EE]/50 border border-[#C85A27]/15 flex flex-col justify-between relative group">
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#C85A27]/20 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="font-display font-black text-3xl text-[#C85A27]/25 group-hover:text-[#C85A27] transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#2D140D] mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/70 flex items-center justify-between text-xs">
                <span className="font-semibold text-[#C85A27]">{step.detail}</span>
                {idx < 2 && (
                  <ArrowRight className="w-4 h-4 text-neutral-300 hidden md:inline" />
                )}
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 text-center">
          <MagneticButton href="/menu" variant="primary" size="md" withArrow>
            Explore Today&apos;s Menu &amp; Order
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
