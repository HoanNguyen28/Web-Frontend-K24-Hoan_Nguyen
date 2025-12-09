"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function ProductFilter({ onFilterChange }: { onFilterChange: (filters: any) => void }) {
  const [price, setPrice] = useState<number>(100);
  const [colors, setColors] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  const handleColorChange = (color: string) => {
    const updated = colors.includes(color) ? colors.filter(c => c !== color) : [...colors, color];
    setColors(updated);
    onFilterChange({ price, colors: updated, brands });
  };

  const handleBrandChange = (brand: string) => {
    const updated = brands.includes(brand) ? brands.filter(b => b !== brand) : [...brands, brand];
    setBrands(updated);
    onFilterChange({ price, colors, brands: updated });
  };

  return (
    <div className="space-y-6 p-4 border rounded-lg w-full max-w-xs">
      <div className="space-y-2">
        <Label>Filter</Label>
        <Slider
          value={[price]}
          max={500}
          onValueChange={(val) => {
            setPrice(val[0]);
            onFilterChange({ price: val[0], colors, brands });
          }}
        />
        <div className="text-sm mt-1">${price}</div>
      </div>

    <div className="space-y-2">
        <Label >Color</Label>
        {["Black", "Blue", "Gray", "Green", "Red"].map(color => (
          <div key={color} className="flex items-center space-x-2">
            <Checkbox checked={colors.includes(color)} onCheckedChange={() => handleColorChange(color)} />
            <span className="text-sm">{color}</span>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <Label>Brand</Label>
        {["Adidas", "Balenciaga", "Balmain", "Burberry", "Chloe"].map(brand => (
          <div key={brand} className="flex items-center space-x-2">
            <Checkbox checked={brands.includes(brand)} onCheckedChange={() => handleBrandChange(brand)} />
            <span className="text-sm">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
