"use client";

import { CartButton } from "@/components/cart/cart-button";
import { WishlistButton } from "@/components/wishlist/wishlist-button";
import { UserAccountSection } from "@/components/auth/user-account-section"; // Import component mới
import { LanguageSelector } from "@/components/ui/language-selector";
import { CurrencySelector } from "@/components/ui/currency-selector";

interface HeaderTopRightProps {
  onCartClick: () => void;
}

export function HeaderTopRight({ onCartClick }: HeaderTopRightProps) {
  return (
    <div className="flex items-center justify-end gap-4 text-sm">
      <LanguageSelector label="EN" flagSrc="/assets/img/icon/lang-flag.png" />
      <CurrencySelector currentCurrency="USD" onClick={() => {}} />

      <CartButton
        
      />

      <UserAccountSection />

      <WishlistButton  />
    </div>
  );
}