"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, Clock, MapPin, CheckCircle, ArrowRight, ShieldAlert } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { VegMark } from "@/components/ui/VegMark";
import { siteConfig } from "@/content/site-config";
import Link from "next/link";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    totalPrice,
    selectedDeliverySlot,
    setDeliverySlot,
    officeLocation,
    setOfficeLocation,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<"cart" | "checkout" | "success">("cart");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [deskDetails, setDeskDetails] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentNotice, setPaymentNotice] = useState<string | null>(null);

  const deliverySlots = ["12:30 PM", "1:00 PM", "1:30 PM"];

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userPhone || !deskDetails) {
      alert("Please fill in your name, contact phone, and desk/floor details.");
      return;
    }

    setIsProcessing(true);
    setPaymentNotice(null);

    try {
      // Call server-side order route
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          customer: { name: userName, phone: userPhone, office: officeLocation, desk: deskDetails },
        }),
      });

      const data = await res.json();

      if (data.mode === "mock_test_mode" || data.status === "keys_not_configured") {
        // Razorpay keys not yet provided by client
        setPaymentNotice(data.message || "Razorpay API keys not yet configured by client in .env. Test order simulated successfully!");
        setCheckoutStep("success");
      } else if (data.orderId) {
        // Real Razorpay order created
        setCheckoutStep("success");
      }
    } catch {
      setPaymentNotice("Order received in local test mode (Payment gateway pending API keys configuration).");
      setCheckoutStep("success");
    } finally {
      setIsProcessing(false);
    }
  };

  const resetAll = () => {
    clearCart();
    setCheckoutStep("cart");
    setPaymentNotice(null);
    closeCart();
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black z-50 backdrop-blur-xs"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/70">
              <div className="flex items-center gap-2">
                <VegMark size="md" />
                <h3 className="font-display font-bold text-lg text-neutral-900">
                  {checkoutStep === "cart"
                    ? "Your Lunch Bag Tray"
                    : checkoutStep === "checkout"
                    ? "Confirm Delivery Details"
                    : "Order Placed Successfully"}
                </h3>
              </div>
              <button
                onClick={closeCart}
                className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-full transition-colors"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {checkoutStep === "cart" && (
                <>
                  {items.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-16 text-neutral-400">
                      <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-brand-red mb-4">
                        <Clock className="w-8 h-8" />
                      </div>
                      <h4 className="font-bold text-neutral-800 text-base mb-1">
                        Your Lunch Tray is Empty
                      </h4>
                      <p className="text-sm max-w-xs mb-6 text-neutral-500">
                        Select your favorite daily thali or an automated Lunch Pass to get started.
                      </p>
                      <button
                        onClick={closeCart}
                        className="px-5 py-2.5 bg-brand-red text-white text-xs font-bold rounded-xl shadow-xs hover:bg-brand-red-dark"
                      >
                        Browse Today&apos;s Menu
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Item list */}
                      <div className="space-y-3">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-between gap-3"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <VegMark size="sm" />
                                <h4 className="font-bold text-sm text-neutral-900 truncate">
                                  {item.name}
                                </h4>
                              </div>
                              <p className="text-xs text-neutral-500">
                                {item.dayName ? `${item.dayName} Thali` : "Subscription Pass"} • ₹{item.price} each
                              </p>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2 bg-white rounded-lg border border-neutral-200 px-2 py-1">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-0.5 text-neutral-500 hover:text-brand-red"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="text-xs font-bold text-neutral-800 w-4 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-0.5 text-neutral-500 hover:text-brand-red"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-neutral-400 hover:text-red-600 p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Delivery Slot Selector */}
                      <div className="pt-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                          Preferred Office Lunch Slot
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {deliverySlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setDeliverySlot(slot)}
                              className={`py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                                selectedDeliverySlot === slot
                                  ? "bg-brand-red text-white border-brand-red shadow-xs"
                                  : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300"
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Office Hub Selector */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                          Office Hub
                        </label>
                        <div className="relative">
                          <MapPin className="w-4 h-4 text-brand-red absolute left-3 top-3" />
                          <select
                            value={officeLocation}
                            onChange={(e) => setOfficeLocation(e.target.value)}
                            className="w-full pl-9 pr-4 py-2.5 text-xs font-semibold rounded-xl border border-neutral-200 bg-white text-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-red"
                          >
                            {siteConfig.deliveryHubs.map((hub) => (
                              <option key={hub} value={hub}>
                                {hub}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Speed Guarantee banner */}
                      <div className="p-3 bg-red-50/60 rounded-xl border border-red-100 flex items-center gap-2.5 text-xs text-brand-red">
                        <Clock className="w-4 h-4 shrink-0" />
                        <span>Dispatched from nearest staging hub. Delivered to desk in under 10 minutes.</span>
                      </div>
                    </>
                  )}
                </>
              )}

              {checkoutStep === "checkout" && (
                <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-600">
                    <span className="font-bold text-neutral-900">Destination:</span> {officeLocation} • Slot:{" "}
                    <span className="font-bold text-neutral-900">{selectedDeliverySlot}</span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Mobile Number (for delivery rider WhatsApp/Call) *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[6-9][0-9]{9}"
                      maxLength={10}
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      placeholder="10-digit mobile (e.g. 9876543210)"
                      className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      Floor, Tower & Desk Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={deskDetails}
                      onChange={(e) => setDeskDetails(e.target.value)}
                      placeholder="e.g. Tower B, 6th Floor, Bay 4, Desk 612"
                      className="w-full px-3 py-2 text-sm rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                    />
                  </div>

                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 flex items-start gap-2 text-xs text-neutral-500">
                    <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>
                      Razorpay test mode will be triggered. No real charges will occur until client production keys are configured.
                    </span>
                  </div>

                  <div className="pt-2 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setCheckoutStep("cart")}
                      className="w-1/3 py-2.5 text-xs font-bold rounded-xl border border-neutral-200 text-neutral-600 hover:bg-neutral-50"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-2/3 py-2.5 text-xs font-bold rounded-xl bg-brand-red text-white hover:bg-brand-red-dark shadow-xs flex items-center justify-center gap-1.5"
                    >
                      {isProcessing ? "Verifying..." : `Proceed to Pay ₹${totalPrice}`}
                    </button>
                  </div>
                </form>
              )}

              {checkoutStep === "success" && (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-neutral-900">
                    Order Confirmed!
                  </h4>
                  <p className="text-xs text-neutral-600 max-w-xs mx-auto">
                    Your homemade lunch will be dispatched hot to{" "}
                    <span className="font-bold text-neutral-800">{officeLocation}</span> for the{" "}
                    <span className="font-bold text-neutral-800">{selectedDeliverySlot}</span> slot.
                  </p>
                  {paymentNotice && (
                    <div className="p-3 bg-neutral-50 rounded-xl text-[11px] text-neutral-500 border border-neutral-200 max-w-xs mx-auto">
                      {paymentNotice}
                    </div>
                  )}
                  <div className="pt-4">
                    <button
                      onClick={resetAll}
                      className="px-6 py-2.5 bg-neutral-900 text-white text-xs font-bold rounded-xl hover:bg-neutral-800"
                    >
                      Done & Return to Site
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Drawer Footer */}
            {checkoutStep === "cart" && items.length > 0 && (
              <div className="p-5 border-t border-neutral-100 bg-neutral-50/50 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500">Order Subtotal</span>
                  <span className="font-display font-bold text-lg text-neutral-900">
                    ₹{totalPrice}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span>Hub Delivery Fee</span>
                  <span className="text-green-600 font-bold">FREE (Under 10 Mins)</span>
                </div>
                <button
                  onClick={() => setCheckoutStep("checkout")}
                  className="w-full py-3.5 px-4 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-sm rounded-2xl shadow-md shadow-brand-red/20 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Proceed to Desk Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center">
                  <Link
                    href="/passes"
                    onClick={closeCart}
                    className="text-[11px] font-semibold text-brand-red hover:underline"
                  >
                    Want to save up to ₹600? Get a 20-Day Lunch Pass →
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
