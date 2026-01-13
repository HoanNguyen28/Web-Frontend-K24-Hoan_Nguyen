'use client';
import Link from 'next/link';
import { useWishlist } from '@/components/wishlist/wishlist-context';
import { useCart } from '@/components/cart/cart-context';
import { WishlistEmpty } from '@/components/wishlist/wishlist-empty';
import { Button } from '@/components/ui/button';

import toast from 'react-hot-toast';
import { WishlistTable } from '@/components/wishlist/whishlist-table';

export default function WishlistPage() {
  const { items } = useWishlist();
  const { addToCart } = useCart();

  const handleAddAllToCart = () => {
    items.forEach(item => {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      });
    });
    toast.success('Đã thêm tất cả sản phẩm yêu thích vào giỏ hàng!');
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Header */}
      <div className="bg-gray-50/50 py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex text-sm text-gray-500 mb-4 items-center gap-2">
            <Link href="/" className="hover:text-[#D31243] transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">Wishlist</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">My Wishlist</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        {items.length === 0 ? (
          <WishlistEmpty />
        ) : (
          <>
            <WishlistTable />

            <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
              <Link href="/courses">
                <Button variant="outline" className="rounded-full px-8 border-gray-300 hover:bg-gray-50">
                  Continue Shopping
                </Button>
              </Link>
              
              
            </div>
          </>
        )}
      </div>
    </div>
  );
}