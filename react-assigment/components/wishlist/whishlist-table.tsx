'use client';

import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useWishlist } from '@/components/wishlist/wishlist-context';
import { useCart } from '@/components/cart/cart-context';
import toast from 'react-hot-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function WishlistTable() {
  const { items, removeFromWishlist, updateQuantity } = useWishlist();
  const { addToCart } = useCart();

const handleAddToCart = (item: any) => {
  
  const cartData: any = {
    id: item.id,
    name: item.name,
    price: item.price,
    image: item.image,
    quantity: item.quantity || 1,
  };

  addToCart(cartData); 
  toast.success(`"${item.name}" đã được thêm vào giỏ hàng!`);
};

  return (
    <div className="border border-gray-200">
      <Table className="border-collapse">
        <TableHeader>
          <TableRow className="hover:bg-transparent border-b border-gray-200 bg-white">
            <TableHead className="h-14 text-center font-bold text-gray-900 border-r border-gray-200 uppercase text-[15px]">Images</TableHead>
            <TableHead className="h-14 text-center font-bold text-gray-900 border-r border-gray-200 uppercase text-[15px]">Courses</TableHead>
            <TableHead className="h-14 text-center font-bold text-gray-900 border-r border-gray-200 uppercase text-[15px]">Unit Price</TableHead>
            <TableHead className="h-14 text-center font-bold text-gray-900 border-r border-gray-200 uppercase text-[15px]">Quantity</TableHead>
            <TableHead className="h-14 text-center font-bold text-gray-900 border-r border-gray-200 uppercase text-[15px]">Total</TableHead>
            <TableHead className="h-14 text-center font-bold text-gray-900 uppercase text-[15px]">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id} className="hover:bg-transparent border-b border-gray-200 bg-white">
              {/* Image Column */}
              <TableCell className="py-8 text-center border-r border-gray-200">
                <div className="relative w-[100px] h-[100px] mx-auto bg-gray-50 overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                </div>
              </TableCell>

              {/* Name Column */}
              <TableCell className="text-center border-r border-gray-200 text-gray-700 font-medium px-4">
                {item.name}
              </TableCell>

              {/* Unit Price Column */}
              <TableCell className="text-center border-r border-gray-200 text-gray-600 font-medium">
                ${item.price.toFixed(0)}
              </TableCell>

              {/* Quantity Column - Khôi phục theo ảnh */}
              <TableCell className="text-center border-r border-gray-200 p-4">
                <div className="flex justify-center">
                  <Input
                    type="number"
                    min="1"
                    value={item.quantity || 1}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                    className="w-[120px] h-[50px] text-center border-gray-200 rounded-none focus-visible:ring-0 focus:border-gray-400 text-lg font-bold"
                  />
                </div>
              </TableCell>

              {/* Total Column - Khôi phục theo ảnh */}
              <TableCell className="text-center border-r border-gray-200 text-gray-600 font-medium">
                ${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
              </TableCell>

              {/* Remove/Action Column */}
              <TableCell className="text-center p-4">
                <div className="flex flex-col items-center gap-3">
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="text-gray-500 hover:text-red-600 transition-colors text-sm"
                  >
                    Remove
                  </button>
                  <Button 
                    onClick={() => handleAddToCart(item)}
                    className="bg-[#D31243] hover:bg-rose-700 text-white rounded-md px-4 py-2 text-xs"
                  >
                    ADD TO CART
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}