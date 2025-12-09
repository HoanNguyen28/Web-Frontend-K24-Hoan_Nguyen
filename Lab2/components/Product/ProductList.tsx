"use client";

import { useState } from "react";
import ProductFilter from "./ProductFilter";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "Bradley Burgess 2", price: 20, image: "/images/product/product-1.jpg" },
  { id: 2, name: "Allie Sharp", price: 30, image: "/images/product/product-2.jpg" },
  { id: 3, name: "Nathaniel Baldwin", price: 40, image: "/images/product/product-3.jpg" },
  { id: 4, name: "Effie Rios", price: 40, image: "/images/product/product-4.jpg"},
  { id: 5, name: "Cameron Hanson", price: 50, image: "/images/product/product-5.jpg" },
  { id: 6, name: "Julian Mccarthy", price: 60, image: "/images/product/product-6.jpg" },
  { id: 7, name: "Lena Mccarthy", price: 70, image: "/images/product/product-7.jpg" }, 
  { id: 8, name: "Isaac Mccarthy", price: 80, image: "/images/product/product-8.jpg" },
  // ... thêm sản phẩm khác
];

export default function ProductList() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (filters: any) => {
    let temp = products.filter(p => p.price <= filters.price);
    setFilteredProducts(temp);
  };

  return (
    <div className="flex gap-3">
      {/* Product List bên trái */}
      <div className="flex-1">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="border rounded-lg p-2">
              <div className="w-full aspect-square mb-2">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
              <div className="text-sm font-medium">{product.name}</div>
              <div className="text-sm font-semibold">${product.price}</div>
            </div>
            </div>
          ))}
        </div>
      </div>

      <ProductFilter onFilterChange={handleFilterChange} />
    </div>
  );
}


