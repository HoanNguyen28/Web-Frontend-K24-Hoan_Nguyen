'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface WishlistItem {
  quantity: number;
  id: number;
  name: string;
  price: number;
  image: string;
}

interface WishlistContextType {
  items: WishlistItem[];
  itemCount: number;
  isWishlistOpen: boolean;
  addToWishlist: (product: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;

  updateQuantity: (id: number, quantity: number) => void;

  isInWishlist: (id: number) => boolean;
  clearWishlist: () => void;
  openWishlist: () => void;
  closeWishlist: () => void;
  toggleWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const itemCount = items.length;

  const addToWishlist = (product: WishlistItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        return prevItems;
      }
      

      return [...prevItems, { ...product, quantity: product.quantity || 1 }];
    });
  };

  const removeFromWishlist = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };


  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };


  const isInWishlist = (id: number) => {
    return items.some((item) => item.id === id);
  };

  const clearWishlist = () => {
    setItems([]);
  };

  const openWishlist = () => setIsWishlistOpen(true);
  const closeWishlist = () => setIsWishlistOpen(false);
  const toggleWishlist = () => setIsWishlistOpen((prev) => !prev);

  return (
    <WishlistContext.Provider
      value={{
        items,
        itemCount,
        isWishlistOpen,
        addToWishlist,
        removeFromWishlist,
        updateQuantity,
        isInWishlist,
        clearWishlist,
        openWishlist,
        closeWishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};