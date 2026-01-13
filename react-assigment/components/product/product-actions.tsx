'use client';

import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { useCart } from '@/components/cart/cart-context';
import { useWishlist } from '@/components/wishlist/wishlist-context';
import toast from 'react-hot-toast';

interface ProductActionsProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

export function ProductActions({ product }: ProductActionsProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    
    toast.success(`"${product.name}" đã được thêm vào giỏ hàng!`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.success('Đã xóa khỏi wishlist!');
    } else {
      addToWishlist(product);
      toast.success('Đã thêm vào wishlist!');
    }
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
   
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <button 
        onClick={handleAddToCart}
        className="rounded-full bg-white p-2 hover:bg-red-500 hover:text-white transition"
        title="Add to cart"
      >
        <ShoppingCart size={18} />
      </button>

      <button 
        onClick={handleWishlist}
        className={`rounded-full p-2 transition ${
          inWishlist 
            ? 'bg-red-500 text-white hover:bg-red-600' 
            : 'bg-white hover:bg-red-500 hover:text-white'
        }`}
        title={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <Heart size={18} fill={inWishlist ? 'currentColor' : 'none'} />
      </button>

      <button 
        onClick={handleQuickView}
        className="rounded-full bg-white p-2 hover:bg-red-500 hover:text-white transition"
        title="Quick view"
      >
        <Eye size={18} />
      </button>
    </div>
  );
}