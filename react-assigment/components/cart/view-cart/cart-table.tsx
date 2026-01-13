'use client';

import { useCart } from '@/components/cart/cart-context';
import { X } from 'lucide-react';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function CartTable() {
  const { items, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="rounded-xl border border-gray-100 bg-white overflow-hidden shadow-sm">
      <Table>
        <TableHeader className="bg-gray-50/80">
          <TableRow className="hover:bg-transparent border-b border-gray-100">
            <TableHead className="w-[150px] text-center font-bold text-gray-700 py-5">Images</TableHead>
            <TableHead className="font-bold text-gray-700">Courses</TableHead>
            <TableHead className="font-bold text-gray-700">Unit Price</TableHead>
            <TableHead className="text-center font-bold text-gray-700">Quantity</TableHead>
            <TableHead className="font-bold text-gray-700">Total</TableHead>
            <TableHead className="text-center font-bold text-gray-700">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id} className="group transition-colors hover:bg-gray-50/50 border-b border-gray-50">
              {/* Images */}
              <TableCell className="py-6 flex justify-center">
                <div className="relative w-20 h-20 bg-gray-50 rounded-lg overflow-hidden border border-gray-100 shadow-sm group-hover:border-[#D31243]/30 transition-colors">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </TableCell>

              {/* Courses Name */}
              <TableCell className="font-semibold text-gray-800">
                {item.name}
              </TableCell>

              {/* Unit Price */}
              <TableCell className="text-gray-600 font-medium">
                ${item.price.toFixed(2)}
              </TableCell>

              {/* Quantity */}
              <TableCell>
                <div className="flex justify-center">
                  <Input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                    className="w-20 h-10 text-center focus-visible:ring-[#D31243] border-gray-200 rounded-lg font-bold"
                  />
                </div>
              </TableCell>

              {/* Total */}
              <TableCell className="font-bold text-[#D31243]">
                ${(item.price * item.quantity).toFixed(2)}
              </TableCell>

              {/* Remove Action */}
              <TableCell className="text-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all"
                >
                  <X className="w-5 h-5" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}