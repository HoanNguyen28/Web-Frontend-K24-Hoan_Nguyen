"use client";

import Link from "next/link";
import { products } from "@/data/products";
import { useRequireAuth } from "@/hooks/useRequire-auth";
import { Spinner } from "@/components/ui/spinner";

export default function ProductsList() {
  const { isAuthenticated, isLoading } = useRequireAuth();

  if (isLoading) return <Spinner />;
  if (!isAuthenticated) return null;

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Product List</h1>

      <ul className="divide-y divide-gray-200">
        {products.map((product) => (
          <li key={product.id}>
            <Link
              href={`/shop/products/${product.id}`}
              className="block py-3 px-2 hover:bg-gray-100 transition"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
