'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WishlistEmpty() {
  return (
    <div className="text-center py-24 border-2 border-dashed rounded-2xl bg-gray-50/30">
      <div className="inline-flex p-5 rounded-full bg-rose-50 mb-6 text-[#D31243]">
        <Heart className="w-12 h-12" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Wishlist của bạn đang trống</h2>
      <p className="text-gray-500 mb-8 max-w-sm mx-auto">
        Hãy thêm những sản phẩm yêu thích để dễ dàng theo dõi và mua sắm sau này.
      </p>
      <Link href="/">
        <Button className="bg-[#D31243] hover:bg-rose-700 rounded-full px-10 py-6 text-lg font-bold transition-all">
          Tiếp tục khám phá
        </Button>
      </Link>
    </div>
  );
}