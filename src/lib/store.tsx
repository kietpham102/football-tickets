'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Match, TicketCategory } from '@/data/matches';

export interface CartItem {
  matchId: string;
  categoryId: string;
  quantity: number;
  match: Match;
  category: TicketCategory;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (match: Match, category: TicketCategory, quantity: number) => void;
  removeFromCart: (matchId: string, categoryId: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (match: Match, category: TicketCategory, quantity: number) => {
    setItems(prevItems => {
      // Check if the item already exists in the cart
      const existingItemIndex = prevItems.findIndex(
        item => item.matchId === match.id && item.categoryId === category.id
      );

      if (existingItemIndex > -1) {
        // Update quantity if item exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        return updatedItems;
      } else {
        // Add new item if it doesn't exist
        return [...prevItems, {
          matchId: match.id,
          categoryId: category.id,
          quantity,
          match,
          category
        }];
      }
    });
  };

  const removeFromCart = (matchId: string, categoryId: string) => {
    setItems(prevItems => 
      prevItems.filter(item => !(item.matchId === matchId && item.categoryId === categoryId))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  const totalPrice = items.reduce(
    (total, item) => total + (item.category.price * item.quantity), 
    0
  );

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 