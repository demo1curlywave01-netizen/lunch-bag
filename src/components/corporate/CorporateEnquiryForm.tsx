"use client";

import React, { useState } from "react";
import { corporateBenefits, corporateSteps } from "@/content/corporate-data";
import { siteConfig } from "@/content/site-config";
import { TiltCard } from "@/components/ui/TiltCard";
import { VegMark } from "@/components/ui/VegMark";
import {
  Building2,
  Users,
  CheckCircle2,
  Clock,
  Heart,
  DollarSign,
  Award,
  Smile,
  Send,
} from "lucide-react";
import Image from "next/image";
import { mediaSlots } from "@/content/media-slots";

export function CorporateEnquiryForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    designation: "",
    workEmail: "",
    phone: "",
    teamSize: "20-50 employees",
    officeArea: siteConfig.deliveryHubs[0],
    message: "",
    // Spam honeypot field
    botTrapField: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    status: "idle" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });

  const getBenefitIcon = (name: string) => {
    switch (name) {
      case "clock":
        return <Clock className="w-6 h-6 text-brand-red" />;
      case "heart":
        return <Heart className="w-6 h-6 text-brand-red" />;
      case "dollar-sign":
        return <DollarSign className="w-6 h-6 text-brand-red" />;
      case "award":
        return <Award className="w-6 h-6 text-brand-red" />;
      case "building":
        return <Building2 className="w-6 h-6 text-brand-red" />;
      case "smile":
      default:
        return <Smile className="w-6 h-6 text-brand-red" />;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side regex checks
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.workEmail)) {
      alert("Please enter a valid work email address.");
      return;
    }

    setIsSubmitting(true);
    setSubmitResult({ status: "idle", message: "" });

    try {
      const res = await fetch("/api/corporate-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitResult({
          status: "success",
          message:
            data.message ||
            "Thank you! Your corporate tasting request has been logged. Our partnership team will contact you within 4 business hours.",
        });
        setFormData({
          companyName: "",
          contactPerson: "",
          designation: "",
          workEmail: "",
          phone: "",
          teamSize: "20-50 employees",
          officeArea: siteConfig.deliveryHubs[0],
          message: "",
          botTrapField: "",
        });
      } else {
        setSubmitResult({
          status: "error",
          message: data.error || "Failed to submit enquiry. Please try again.",
        });
      }
    } catch {
      setSubmitResult({
        status: "error",
        message: "An unexpected error occurred. Please try WhatsApp support directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-24">
      {/* Top Banner with Image */}
      <div className="bg-white rounded-3xl border border-red-100 p-8 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              Corporate Lunch Perks
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-tight">
              A Company Perk Your Team Will Actually Use Every Single Day.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Companies can subsidize or sponsor daily Lunch Bag deliveries for their entire staff as a monthly workplace perk. Boost focus, eradicate midday lethargy from greasy restaurant food, and bring your team together over authentic home-style meals.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-bold text-neutral-500">
              <div className="flex items-center gap-2">
                <VegMark size="sm" />
                <span>100% Pure Veg & Separate Kitchen</span>
              </div>
              <span>•</span>
              <span>Consolidated GST Billing</span>
              <span>•</span>
              <span className="text-brand-red">Free Onsite Tasting Session</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
              <Image
                src={mediaSlots.corporateHero.path}
                alt={mediaSlots.corporateHero.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-bold">
                Tech teams in Cyber City enjoying hot Lunch Bag thalis
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Benefits Cards */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <h3 className="font-display text-3xl font-extrabold text-neutral-900">
            Why HR Leaders Choose Lunch Bag
          </h3>
          <p className="text-sm text-neutral-500">
            Delightful dining designed around modern corporate schedules and health consciousness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corporateBenefits.map((benefit) => (
            <TiltCard key={benefit.title} className="p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                  {getBenefitIcon(benefit.iconName)}
                </div>
                <h4 className="font-display text-lg font-bold text-neutral-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 text-[11px] font-bold text-green-700">
                ✓ Proven Workplace Impact
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* 3 Step Process for Companies */}
      <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
            Effortless Rollout
          </span>
          <h3 className="font-display text-3xl font-extrabold text-white">
            Setup Your Team in 3 Days
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {corporateSteps.map((step) => (
            <div key={step.step} className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700 space-y-3">
              <span className="font-display font-black text-3xl text-brand-red">
                {step.step}
              </span>
              <h4 className="font-display font-bold text-lg text-white">
                {step.title}
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Enquiry Form Section */}
      <div id="enquiry-form" className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-red-100 shadow-xl">
        <div className="text-center max-w-lg mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider">
            Schedule a Free Tasting
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-black text-neutral-900">
            Request Office Pilot & Pricing
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500">
            Tell us about your team. We&apos;ll arrange complimentary sample hot thalis delivered to your office for HR and leadership review.
          </p>
        </div>

        {submitResult.status === "success" ? (
          <div className="p-8 text-center space-y-4 rounded-2xl bg-green-50 border border-green-200">
            <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
            <h4 className="font-display font-bold text-xl text-green-900">
              Enquiry Received!
            </h4>
            <p className="text-sm text-green-800 max-w-md mx-auto">
              {submitResult.message}
            </p>
            <button
              onClick={() => setSubmitResult({ status: "idle", message: "" })}
              className="mt-4 px-6 py-2.5 bg-green-700 text-white text-xs font-bold rounded-xl hover:bg-green-800"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot hidden input for spam bots */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.botTrapField}
                onChange={(e) =>
                  setFormData({ ...formData, botTrapField: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Company / Organization Name *
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  placeholder="e.g. Acme Technologies India"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  maxLength={70}
                  value={formData.contactPerson}
                  onChange={(e) =>
                    setFormData({ ...formData, contactPerson: e.target.value })
                  }
                  placeholder="e.g. Ananya Sharma"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Designation / Role *
                </label>
                <input
                  type="text"
                  required
                  maxLength={70}
                  value={formData.designation}
                  onChange={(e) =>
                    setFormData({ ...formData, designation: e.target.value })
                  }
                  placeholder="e.g. Head of People & Culture / Team Lead"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Official Work Email *
                </label>
                <input
                  type="email"
                  required
                  maxLength={100}
                  value={formData.workEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, workEmail: e.target.value })
                  }
                  placeholder="ananya@acme.com"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  10-Digit Mobile Number (Indian) *
                </label>
                <input
                  type="tel"
                  required
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="e.g. 9876543210"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Estimated Team Size *
                </label>
                <select
                  value={formData.teamSize}
                  onChange={(e) =>
                    setFormData({ ...formData, teamSize: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-red"
                >
                  <option value="10-25 employees">10–25 employees</option>
                  <option value="25-50 employees">25–50 employees</option>
                  <option value="50-100 employees">50–100 employees</option>
                  <option value="100-250 employees">100–250 employees</option>
                  <option value="250+ employees">250+ enterprise staff</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Office Location / Tech Park Hub *
              </label>
              <select
                value={formData.officeArea}
                onChange={(e) =>
                  setFormData({ ...formData, officeArea: e.target.value })
                }
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-red"
              >
                {siteConfig.deliveryHubs.map((hub) => (
                  <option key={hub} value={hub}>
                    {hub}
                  </option>
                ))}
                <option value="Other Hub in Delhi-NCR">[Other NCR Hub - Client to specify]</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Specific Team Preferences or Questions (Optional)
              </label>
              <textarea
                rows={3}
                maxLength={500}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Mention any specific timing requirements, subsidized vs employee-paid structure, or preferred dates for tasting..."
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-red resize-none"
              />
            </div>

            {submitResult.status === "error" && (
              <div className="p-3 bg-red-50 text-brand-red text-xs rounded-xl border border-red-200">
                {submitResult.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-brand-red hover:bg-brand-red-dark text-white font-display font-bold text-sm rounded-2xl shadow-lg shadow-brand-red/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? "Submitting Request..." : "Request Free Office Tasting & Proposal"}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
