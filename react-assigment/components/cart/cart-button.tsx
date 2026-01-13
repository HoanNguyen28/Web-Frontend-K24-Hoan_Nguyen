'use client';

import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/components/cart/cart-context";

export const CartButton = () => {
  const { itemCount, toggleCart } = useCart();

  return (
    <button
      type="button"
      onClick={toggleCart}
      className="relative flex items-center cursor-pointer hover:opacity-80 transition"
    >
      <ShoppingCart size={22} />

      {itemCount > 0 && (
        <Badge
          count={itemCount}
          className="absolute -top-2 -right-2"
        />
      )}
    </button>
  );
};