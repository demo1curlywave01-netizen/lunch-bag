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
      desc: "Pick today's freshly rotating pure-veg thali or automate your weekday routine with a 5-day or 20-day Lunch Pass.",
      icon: <ShoppingBag className="w-6 h-6 text-brand-red" />,
      detail: "Daily rotating Mon–Fri menu",
    },
    {
      number: "02",
      title: "We Pre-Stage Near Your Hub",
      desc: "Fresh, piping hot batches travel in insulated temperature pods to strategic staging nodes right outside major corporate clusters.",
      icon: <Truck className="w-6 h-6 text-brand-red" />,
      detail: "Dispatched from nearby tech park pod",
    },
    {
      number: "03",
      title: "Desk Delivery Under 10 Mins",
      desc: "When lunchtime hits, our dedicated floor runner brings your hot, wholesome lunch bag straight to your desk or reception.",
      icon: <CheckCircle2 className="w-6 h-6 text-brand-red" />,
      detail: "Zero wait • Zero food court queues",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider">
            Frictionless Daily Routine
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            How Lunch Bag Works in 3 Steps
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Engineered specifically for busy corporate professionals who value their health, time, and afternoon productivity.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <TiltCard key={step.number} className="p-8 bg-neutral-50/70 flex flex-col justify-between relative group">
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-red-100 shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="font-display font-black text-3xl text-red-200 group-hover:text-brand-red transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-neutral-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/70 flex items-center justify-between text-xs">
                <span className="font-semibold text-brand-red">{step.detail}</span>
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
