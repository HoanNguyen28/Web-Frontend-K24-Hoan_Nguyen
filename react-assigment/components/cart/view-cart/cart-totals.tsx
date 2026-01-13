'use client';

import Link from 'next/link';
import { useCartCalculations } from '@/hooks/use-cart-calculations';

export function CartTotals() {
  const { subtotal, total } = useCartCalculations();

  return (
    <div className="w-full md:w-96">
      <h2 className="text-2xl font-bold mb-6">Cart Totals</h2>
      <div className="border rounded-lg overflow-hidden">
        <div className="flex justify-between p-4 border-b">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between p-4 bg-gray-50">
          <span className="text-lg font-bold">Total</span>
          <span className="text-lg font-bold text-gray-900">${total.toFixed(2)}</span>
        </div>
      </div>
      <Link
        href="/checkout"
        className="block w-full text-center bg-[#D31243] text-white py-4 mt-6 rounded font-bold hover:bg-rose-700 transition uppercase tracking-wider"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}