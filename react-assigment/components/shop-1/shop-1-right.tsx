'use client';

import React from 'react';
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Label } from '@/components/ui/label';

interface Shop1RightProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  priceRange: number[];
  onPriceChange: (value: number[]) => void;
  selectedColor: string;
  onColorChange: (value: string) => void;
}

export function Shop1Right({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
  selectedColor,
  onColorChange,
}: Shop1RightProps) {
  return (
    <div className="space-y-10">
      {/* Category Filter */}
      <div className="space-y-4">
        <h2 className="font-bold text-lg uppercase tracking-tight text-[#222]">Category</h2>
        <RadioGroup value={selectedCategory} onValueChange={onCategoryChange} className="space-y-3">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center space-x-3">
              <RadioGroupItem value={cat} id={`cat-${cat}`} className="border-gray-300" />
              <Label htmlFor={`cat-${cat}`} className="text-sm text-gray-600 cursor-pointer hover:text-rose-500 transition-colors capitalize font-normal">
                {cat}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Price Filter */}
      <div className="space-y-6">
        <h2 className="font-bold text-lg uppercase tracking-tight text-[#222]">Price Range</h2>
        <div className="px-2">
          <Slider
            max={100}
            step={1}
            value={priceRange}
            onValueChange={onPriceChange}
            className="[&_[role=slider]]:bg-rose-500 [&_[role=slider]]:border-rose-500"
          />
        </div>
        <div className="flex justify-between items-center font-bold text-sm">
          <span className="text-gray-400 font-normal">Max:</span>
          <span className="text-rose-600">${priceRange[0]}</span>
        </div>
      </div>

      <Separator />

      
      <div className="space-y-4">
        <h2 className="font-bold text-lg uppercase tracking-tight text-[#222]">Color</h2>
        <RadioGroup value={selectedColor} onValueChange={onColorChange} className="space-y-3">
          {['all', 'Black', 'Blue', 'Gray', 'Green', 'Red'].map((color) => (
            <div key={color} className="flex items-center space-x-3">
              <RadioGroupItem value={color} id={`color-${color}`} className="border-gray-300" />
              <Label htmlFor={`color-${color}`} className="text-sm text-gray-600 cursor-pointer font-normal capitalize">
                {color}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}