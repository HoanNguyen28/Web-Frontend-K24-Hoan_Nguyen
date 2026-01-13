'use client';

import React from 'react';
import { products } from '@/data/products';
import { useProductFilter } from '@/hooks/use-product-filter';
import { Shop1Left } from '@/components/shop-1/shop-1-left';
import { Shop1Right } from '@/components/shop-1/shop-1-right';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LayoutGrid, List } from 'lucide-react';

export default function ShopPage() {
  const {
    selectedCategory,
    selectedColor,
    priceRange,
    filteredProducts,
    categories,
    setSelectedCategory,
    setSelectedColor,
    setPriceRange,
    setSortBy
  } = useProductFilter(products);

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
   
        <div className="flex flex-wrap items-center justify-between bg-[#F9F9F9] p-4 mb-8 rounded-sm text-sm text-gray-600">
          <div>
            <span className="font-semibold text-black">{filteredProducts.length}</span> Item(s) Found
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span>Sort by:</span>
              <Select onValueChange={setSortBy} defaultValue="default">
                <SelectTrigger className="w-[160px] h-9 bg-white border-none shadow-none focus:ring-0">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="low-to-high">Price: Low to High</SelectItem>
                  <SelectItem value="high-to-low">Price: High to Low</SelectItem>
                  <SelectItem value="name">Product Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2 border-l pl-4 border-gray-300">
              <List className="h-4 w-4 cursor-pointer hover:text-rose-500" />
              <LayoutGrid className="h-4 w-4 cursor-pointer text-rose-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
    
          <div className="lg:col-span-9">
            <Shop1Left products={filteredProducts} />
          </div>

          <div className="lg:col-span-3">
            <Shop1Right 
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              selectedColor={selectedColor}
              onColorChange={setSelectedColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}