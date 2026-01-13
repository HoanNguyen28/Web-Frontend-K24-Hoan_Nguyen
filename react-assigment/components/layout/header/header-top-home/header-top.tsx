'use client';
import { useState } from "react";
import { HeaderTopLeft } from "./header-top-left";
import { HeaderTopCenter } from "./header-top-center";
import { HeaderTopRight } from "./header-top-right";
import CartSidebar from "@/components/cart/cart-sidebar"

export default function HeaderTop() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-50">
        <div className="container mx-auto px-6 flex items-center h-20">
          <HeaderTopLeft />
          <HeaderTopCenter />

          <HeaderTopRight
            onCartClick={() => setIsCartOpen(true)}
          />
        </div>
      </div>

   
      <CartSidebar
       
      />
    </>
  );
}
