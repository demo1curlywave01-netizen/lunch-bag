"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, Clock, MapPin, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
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
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState<string>("");

  const deliverySlots = [
    "12:00 – 1:00 PM",
    "1:00 – 2:00 PM",
    "2:00 – 3:00 PM",
  ];

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userPhone || !deskDetails) {
      alert("Please fill in your name, contact phone, and desk/floor details.");
      return;
    }

    const itemsSummary = items
      .map((i) => `• ${i.name} (Qty: ${i.quantity}) - ₹${i.price * i.quantity}`)
      .join("\n");

    const message = [
      "🍱 *NEW ORDER - LUNCH BAG (HYDERABAD)* 🍱",
      "------------------------------------------",
      "👤 *Customer Details:*",
      `• *Name:* ${userName}`,
      `• *Phone:* ${userPhone}`,
      "",
      "📍 *Delivery Address:*",
      `• *Hub:* ${officeLocation}`,
      `• *Desk / Floor / Tower:* ${deskDetails}`,
      `• *Delivery Slot:* ${selectedDeliverySlot}`,
      "",
      "🛒 *Items Ordered:*",
      itemsSummary,
      "",
      `💰 *Total Amount:* ₹${totalPrice}`,
      "------------------------------------------",
      "Please confirm my order for desk delivery!",
    ].join("\n");

    const waUrl = `https://wa.me/${siteConfig.whatsAppNumber}?text=${encodeURIComponent(message)}`;
    setLastWhatsAppUrl(waUrl);

    // Open WhatsApp in a new tab/window
    window.open(waUrl, "_blank");

    setCheckoutStep("success");
  };

  const resetAll = () => {
    clearCart();
    setCheckoutStep("cart");
    setLastWhatsAppUrl("");
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
            className="fixed inset-0 bg-[#2D140D] z-50 backdrop-blur-xs"
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
            <div className="p-5 border-b border-[#EFE4D6] flex items-center justify-between bg-[#FAF6EE]">
              <div className="flex items-center gap-2">
                <VegMark size="md" />
                <h3 className="font-display font-bold text-lg text-[#2D140D]">
                  {checkoutStep === "cart"
                    ? "Your Lunch Bag Tray"
                    : checkoutStep === "checkout"
                    ? "Confirm Delivery Details"
                    : "Order Placed Successfully"}
                </h3>
              </div>
              <button
                onClick={closeCart}
                className="p-2 text-[#6B5249] hover:text-[#2D140D] hover:bg-[#F5EDE2] rounded-full transition-colors"
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
                    <div className="h-full flex flex-col items-center justify-center text-center py-16 text-[#9C8278]">
                      <div className="w-16 h-16 rounded-full bg-[#FDF6F0] flex items-center justify-center text-[#C85A27] mb-4">
                        <Clock className="w-8 h-8" />
                      </div>
                      <h4 className="font-bold text-[#2D140D] text-base mb-1">
                        Your Lunch Tray is Empty
                      </h4>
                      <p className="text-sm max-w-xs mb-6 text-[#6B5249]">
                        Select our Special North + South Indian combo meal (₹179) or a Lunch Pass to begin.
                      </p>
                      <Link
                        href="/menu"
                        onClick={closeCart}
                        className="px-5 py-2.5 bg-[#C85A27] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#B34B1B] cursor-pointer inline-block transition-colors"
                      >
                        Browse Today&apos;s Menu
                      </Link>
                    </div>
                  ) : (
                    <>
                      {/* Item list */}
                      <div className="space-y-3">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="p-3.5 rounded-2xl bg-[#FAF6EE] border border-[#EFE4D6] flex items-center justify-between gap-3"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <VegMark size="sm" />
                                <h4 className="font-bold text-sm text-[#2D140D] truncate">
                                  {item.name}
                                </h4>
                              </div>
                              <p className="text-xs text-[#6B5249]">
                                {item.dayName ? `${item.dayName} Combo` : "Meal Plan"} • ₹{item.price} each
                              </p>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2 bg-white rounded-lg border border-[#EFE4D6] px-2 py-1">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-0.5 text-[#6B5249] hover:text-[#C85A27]"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="text-xs font-bold text-[#2D140D] w-4 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-0.5 text-[#6B5249] hover:text-[#C85A27]"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-[#9C8278] hover:text-[#C85A27] p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Delivery Slot Selector */}
                      <div className="pt-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#6B5249] mb-2">
                          Preferred Office Lunch Slot
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {deliverySlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setDeliverySlot(slot)}
                              className={`py-2 px-2 text-center text-xs font-bold rounded-xl border transition-all ${
                                selectedDeliverySlot === slot
                                  ? "bg-[#C85A27] text-white border-[#C85A27] shadow-xs"
                                  : "bg-white text-[#2D140D] border-[#EFE4D6] hover:border-[#C85A27]/40"
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Office Hub Selector (Visible Chips - No Dropdown) */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#6B5249]">
                            Office Hub in Hyderabad
                          </label>
                          <span className="text-[11px] font-bold text-[#C85A27]">
                            Selected: {officeLocation}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto p-2 bg-[#FAF6EE] rounded-2xl border border-[#EFE4D6]">
                          {siteConfig.deliveryHubs.map((hub) => (
                            <button
                              key={hub}
                              type="button"
                              onClick={() => setOfficeLocation(hub)}
                              className={`text-left px-2.5 py-1.5 text-[11px] font-medium rounded-lg border transition-all flex items-center gap-1.5 ${
                                officeLocation === hub
                                  ? "bg-[#C85A27] text-white border-[#C85A27] font-bold shadow-xs"
                                  : "bg-white text-[#2D140D] border-[#EFE4D6] hover:border-[#C85A27]/40"
                              }`}
                            >
                              <MapPin className="w-3 h-3 shrink-0" />
                              <span className="truncate max-w-[240px]">{hub}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Speed Guarantee banner */}
                      <div className="p-3 bg-[#FDF6F0] rounded-xl border border-[#F5D6C4] flex items-center gap-2.5 text-xs text-[#C85A27]">
                        <Clock className="w-4 h-4 shrink-0" />
                        <span>Dispatched from nearest Hyderabad hub. Delivered to desk in under 10 minutes.</span>
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

                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-start gap-2 text-xs text-emerald-900">
                    <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Order details will be sent directly to WhatsApp (<strong>{siteConfig.contactPhone}</strong>) for instant confirmation and dispatch.
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
                      className="w-2/3 py-2.5 text-xs font-bold rounded-xl bg-emerald-700 text-white hover:bg-emerald-800 shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirm on WhatsApp (₹{totalPrice})</span>
                    </button>
                  </div>
                </form>
              )}

              {checkoutStep === "success" && (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-neutral-900">
                    Order Details Sent to WhatsApp!
                  </h4>
                  <p className="text-xs text-neutral-600 max-w-xs mx-auto">
                    Your order details have been prepared for dispatch to{" "}
                    <span className="font-bold text-neutral-800">{officeLocation}</span> ({selectedDeliverySlot}).
                  </p>
                  {lastWhatsAppUrl && (
                    <div className="pt-2">
                      <a
                        href={lastWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-xs"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Open WhatsApp ({siteConfig.contactPhone})</span>
                      </a>
                    </div>
                  )}
                  <div className="pt-3">
                    <button
                      onClick={resetAll}
                      className="px-6 py-2 bg-neutral-900 text-white text-xs font-bold rounded-xl hover:bg-neutral-800 cursor-pointer"
                    >
                      Done &amp; Clear Tray
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

