'use client';

import { UseFormRegister, FieldErrors, UseFormSetValue } from 'react-hook-form';
import { CheckoutFormData } from '@/lib/validations/checkout';

interface OrderSummaryProps {
  items: any[];
  subtotal: number;
  shippingFee: number;
  orderTotal: number;
  shippingMethod: 'flat' | 'free';
  setShippingMethod: (val: 'flat' | 'free') => void;

  register: UseFormRegister<CheckoutFormData>;
  errors: FieldErrors<CheckoutFormData>;
  setValue: UseFormSetValue<CheckoutFormData>;
  selectedPayment: string;
  isSubmitting: boolean;
}

export function OrderSummary({
  items,
  subtotal,
  shippingFee,
  orderTotal,
  shippingMethod,
  setShippingMethod,
  register,
  errors,
  setValue,
  selectedPayment,
  isSubmitting
}: OrderSummaryProps) {
  return (
    <div className="border-[1.5px] border-rose-100 p-8 rounded-sm">
      <h2 className="text-2xl font-semibold mb-8">Your order</h2>

      <table className="w-full text-sm mb-6">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left font-medium py-4 uppercase text-gray-500">Product</th>
            <th className="text-right font-medium py-4 uppercase text-gray-500">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-50">
              <td className="py-4 text-gray-600">{item.name} <span className="text-xs">× {item.quantity}</span></td>
              <td className="py-4 text-right font-medium">${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
          <tr className="border-b border-gray-50">
            <td className="py-4 font-medium">Cart Subtotal</td>
            <td className="py-4 text-right font-bold">${subtotal.toFixed(2)}</td>
          </tr>
          <tr className="border-b border-gray-50">
            <td className="py-4 font-medium align-top">Shipping</td>
            <td className="py-4 text-right">
              <div className="flex flex-col gap-2 items-end">
                <label className="flex items-center gap-2 cursor-pointer">
                  <span className="text-xs text-gray-500">Flat Rate: $7.00</span>
                  <input 
                    type="radio" 
                    name="shipping_radio" 
                    checked={shippingMethod === 'flat'} 
                    onChange={() => setShippingMethod('flat')} 
                    className="accent-rose-500" 
                  />
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <span className="text-xs text-gray-500">Free Shipping:</span>
                  <input 
                    type="radio" 
                    name="shipping_radio"
                    checked={shippingMethod === 'free'} 
                    onChange={() => setShippingMethod('free')} 
                    className="accent-rose-500" 
                  />
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td className="py-6 text-lg font-bold">Order Total</td>
            <td className="py-6 text-right text-lg font-bold">${orderTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

 
      <div className="space-y-4 mb-8">
        {[
          { id: 'bank_transfer', label: 'Direct Bank Transfer', desc: 'Make your payment directly into our bank account. Please use your Order ID as the payment reference.' },
          { id: 'cheque', label: 'Cheque Payment', desc: 'Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.' },
          { id: 'paypal', label: 'PayPal', desc: 'Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.' }
        ].map((method) => (
          <div key={method.id} className="border-b border-gray-50 pb-4 last:border-0">

            <input 
              {...register('paymentMethod')}
              type="radio"
              value={method.id}
              id={method.id}
              className="hidden"
            />
            <label 
              htmlFor={method.id}
              className="flex items-center justify-between cursor-pointer py-2"
              onClick={() => setValue('paymentMethod', method.id as any)}
            >
              <span className={`font-semibold text-sm ${selectedPayment === method.id ? 'text-black' : 'text-gray-500'}`}>
                {method.label}
              </span>
              <span>{selectedPayment === method.id ? '−' : '+'}</span>
            </label>
            
            {selectedPayment === method.id && method.desc && (
              <p className="text-xs text-gray-500 leading-relaxed mt-2 bg-gray-50 p-3 rounded-sm">
                {method.desc}
              </p>
            )}
          </div>
        ))}
        {errors.paymentMethod && (
          <p className="text-xs text-red-500 mt-2">{errors.paymentMethod.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#D11F41] text-white font-bold rounded-sm hover:bg-black transition-colors uppercase tracking-wider text-sm disabled:bg-gray-400"
      >
        {isSubmitting ? 'Processing...' : 'Place order'}
      </button>
    </div>
  );
}