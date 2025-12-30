"use client";

import { useEffect, useState } from "react";
import { products } from "@/data/products";
import { useRequireAuth } from "@/hooks/useRequire-auth";

interface ProductsDetailProps {
  params: Promise<{ id: string }>;
}

export default function ProductsDetail({ params }: ProductsDetailProps) {
  const isAuthenticated = useRequireAuth();
  const [productId, setProductId] = useState<string>("");

  useEffect(() => {
    params.then((p) => setProductId(p.id));
  }, [params]);

  if (!isAuthenticated) {
    return null;
  }

  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return (
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-semibold text-red-600">
          Product not found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-500 mb-6">Product ID: {productId}</p>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Product Description:</h2>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
}