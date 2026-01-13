'use client';

import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useWishlist } from "@/components/wishlist/wishlist-context";
import Link from "next/link";

export const WishlistButton = () => {
  const { itemCount } = useWishlist();

  return (
    <Link
      href="/wishlist"
      className="relative flex items-center cursor-pointer hover:opacity-80 transition"
    >
      <Heart size={22} />

      {itemCount > 0 && (
        <Badge
          count={itemCount}
          className="absolute -top-2 -right-2"
        />
      )}
    </Link>
  );
};