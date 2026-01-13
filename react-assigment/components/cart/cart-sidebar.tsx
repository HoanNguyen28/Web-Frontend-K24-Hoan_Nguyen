'use client';

import { X, Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from './cart-context';
import { useCartCalculations } from '@/hooks/use-cart-calculations'; // Hook vừa tạo
import Image from 'next/image';
import Link from 'next/link';

export default function CartSidebar() {
  const { items, isCartOpen, closeCart, updateQuantity, removeFromCart } = useCart();
  
 
  const { subtotal, isEmpty } = useCartCalculations();

  return (
    <>
  
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={closeCart}
        />
      )}

 
      <div
        className={`
          fixed top-0 right-0 z-50
          h-full w-full max-w-md
          bg-white shadow-2xl
          transform transition-transform duration-300 ease-in-out
          flex flex-col
          ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
    
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            Your Cart {!isEmpty && `(${items.length})`}
          </h2>

          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

      
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ShoppingCart size={64} className="mb-4 opacity-20" />
              <p className="text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
             
                  <div className="relative w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 border">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

               
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-[#D31243] font-bold">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
            
                      <div className="flex items-center border rounded-full px-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-[#D31243] transition"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-xs font-bold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-[#D31243] transition"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-600 transition p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

       
        {!isEmpty && (
          <div className="px-6 py-6 border-t bg-gray-50/50 space-y-4">
            <div className="flex items-center justify-between text-lg font-bold">
              <span className="text-gray-600">Subtotal:</span>
              <span className="text-[#D31243]">${subtotal.toFixed(2)}</span>
            </div>

            <div className="space-y-3">
              <Link href="/cart/view-cart" onClick={closeCart} className="block">
                <button className="w-full py-3 border-2 border-[#D31243] text-[#D31243] rounded-full font-bold hover:bg-rose-50 transition uppercase text-sm tracking-wider">
                  View Cart
                </button>
              </Link>
              
              <Link href="/checkout" onClick={closeCart} className="block">
                <button className="w-full py-3 bg-[#D31243] text-white rounded-full font-bold hover:bg-rose-700 transition uppercase text-sm tracking-wider shadow-lg shadow-rose-200">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}