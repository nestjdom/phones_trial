"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useCart, UseCartReturn } from "@/hooks/useCart";

const CartContext = createContext<UseCartReturn | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const cart = useCart();

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext(): UseCartReturn {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
} 