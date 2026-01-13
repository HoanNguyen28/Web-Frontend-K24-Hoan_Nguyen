'use client';

import Link from 'next/link';
import { useCart } from '@/components/cart/cart-context';
import { useCartCalculations } from '@/hooks/use-cart-calculations';
import { CartTable } from '@/components/cart/view-cart/cart-table';
import { CartTotals } from '@/components/cart/view-cart/cart-totals';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { clearCart } = useCart();
  const { isEmpty } = useCartCalculations();

  return (
    <div className="min-h-screen bg-white pb-20">
    
      <div className="bg-gray-50/50 py-16 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <nav className="flex text-sm text-gray-500 mb-4 items-center gap-2">
            <Link href="/" className="hover:text-[#D31243] transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">Your Shopping Cart</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Cart</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        {isEmpty ? (
          <div className="text-center py-32 border-2 border-dashed rounded-2xl bg-gray-50/30">
            <div className="inline-flex p-4 rounded-full bg-gray-100 mb-4">
              <ShoppingBag className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Giỏ hàng trống</h2>
            <p className="text-gray-500 mb-8">Có vẻ như bạn chưa thêm khóa học nào vào giỏ hàng.</p>
            <Link href="/courses">
              <Button className="bg-[#D31243] hover:bg-rose-700 rounded-full px-8">
                Khám phá khóa học ngay
              </Button>
            </Link>
          </div>
        ) : (
          <>

            <CartTable />


            <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-6 p-6 bg-gray-50/50 rounded-xl border border-gray-100">
              <div className="flex gap-2 w-full md:w-auto">
                <Input
                  type="text"
                  placeholder="Mã giảm giá (Coupon)"
                  className="w-full md:w-72 bg-white focus-visible:ring-[#D31243] border-gray-200"
                />
                <Button 
                  variant="outline" 
                  className="border-[#D31243] text-[#D31243] hover:bg-rose-50 font-bold px-6"
                >
                  Áp dụng
                </Button>
              </div>
              
              <Button 
                variant="ghost"
                onClick={clearCart}
                className="text-gray-500 hover:text-red-600 hover:bg-red-50 font-medium px-6"
              >
                Xóa sạch giỏ hàng
              </Button>
            </div>

    
            <div className="mt-16 flex justify-end">
             
              <CartTotals />
            </div>
          </>
        )}
      </div>
    </div>
  );
}