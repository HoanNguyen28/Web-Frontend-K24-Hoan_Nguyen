'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutSchema } from "@/lib/validations/checkout";
import type { CheckoutFormData } from "@/lib/validations/checkout";
import { useCart } from '@/components/cart/cart-context';

export function useCheckout() {
  const { items, clearCart } = useCart();
  const [shippingMethod, setShippingMethod] = useState<'flat' | 'free'>('flat');

  const form = useForm<CheckoutFormData>({
   resolver: zodResolver(checkoutSchema) as any,
    defaultValues: {
      firstName: '',
      lastName: '',
      country: 'Vietnam',
      address: '',
      city: '',
      state: '',
      postcode: '',
      email: '',
      phone: '',
      paymentMethod: 'bank_transfer',
      createAccount: false,
      shipToDifferentAddress: false,
      companyName: '',
      apartment: '',
      orderNotes: '',
    },
  });

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = shippingMethod === 'flat' ? 7.0 : 0;
  const orderTotal = subtotal + shippingFee;

  return {
    form,
    items,
    shippingMethod,
    setShippingMethod,
    subtotal,
    shippingFee,
    orderTotal,
  };
}