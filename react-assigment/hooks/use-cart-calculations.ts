'use client';

import { useCart } from '@/components/cart/cart-context';

export function useCartCalculations() {
  const { items } = useCart();

  const subtotal = items.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);
  const shipping = 0; 
  const total = subtotal + shipping;

  return {
    subtotal,
    total,
    shipping,
    isEmpty: items.length === 0
  };
}