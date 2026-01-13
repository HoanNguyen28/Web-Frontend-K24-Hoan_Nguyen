'use client';
import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';

interface Shop1LeftProps {
  products: Product[];
}

export function Shop1Left({ products }: Shop1LeftProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-400 border border-dashed rounded-lg">
        <p>No products found matching your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
      {products.map((product) => (
        <div key={product.id} className="group cursor-pointer">
          <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-[#F3F4F6] rounded-sm">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <Image
              src={product.hoverImage}
              alt={product.name}
              fill
              className="object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
          <h3 className="text-sm font-medium text-gray-400 mb-1">{product.name}</h3>
          <p className="font-bold text-black">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}