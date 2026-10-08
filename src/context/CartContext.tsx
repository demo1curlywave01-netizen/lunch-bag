"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  type: "thali" | "pass";
  dayName?: string;
  price: number;
  quantity: number;
  deliverySlot?: string;
  notes?: string;
}

interface CartContextType {
  items: CartItem[];
  isCartOpen: boolean;
  selectedDeliverySlot: string;
  officeLocation: string;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  setDeliverySlot: (slot: string) => void;
  setOfficeLocation: (loc: string) => void;
  totalItemsCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedDeliverySlot, setSelectedDeliverySlot] = useState("1:00 PM");
  const [officeLocation, setOfficeLocation] = useState("Cyber City, Building 10");

  // Read from localStorage only after component mounts on client
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("lunchbag_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
    setIsHydrated(true);
  }, []);

  // Save cart to local storage whenever items change after initial hydration
  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.localStorage.setItem("lunchbag_cart", JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items, isHydrated]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addItem = (newItem: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === newItem.id);
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const clearCart = () => setItems([]);

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        selectedDeliverySlot,
        officeLocation,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        setDeliverySlot: setSelectedDeliverySlot,
        setOfficeLocation,
        totalItemsCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
