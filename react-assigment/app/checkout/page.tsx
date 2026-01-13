'use client';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useCheckout } from '@/hooks/use-checkout';
import { BillingForm } from '@/components/checkout/billing-form';
import { OrderSummary } from '@/components/checkout/order-summary';
import { Button } from '@/components/ui/button'; 
import { Loader2 } from 'lucide-react'; 

export default function CheckoutPage() {
  const router = useRouter();
  
  const { 
    form, 
    items, 
    subtotal, 
    shippingFee, 
    orderTotal, 
    shippingMethod, 
    setShippingMethod 
  } = useCheckout();

  const handleOrderSubmit = async (data: any) => {
    try {
      console.log("Đang gửi đơn hàng:", { ...data, items, orderTotal });
      
      await new Promise(r => setTimeout(r, 2000));
      
      toast.success('Order placed successfully!');
      router.push('/order-success');
    } catch (error) {
      toast.error('Something went wrong! Please try again.');
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Your cart is currently empty.</h2>
    
        <Button 
          onClick={() => router.push('/')} 
          className="bg-[#D31243] hover:bg-black text-white px-10 py-6 rounded-full font-bold uppercase tracking-widest transition-all h-auto"
        >
          Return to shop
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <form 
          onSubmit={form.handleSubmit(handleOrderSubmit)} 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          <div className="lg:col-span-7">
            <BillingForm 
              register={form.register}
              errors={form.formState.errors} 
              setValue={form.setValue} 
            />
          </div>

          <div className="lg:col-span-5">
            <OrderSummary 
              items={items}
              subtotal={subtotal}
              shippingFee={shippingFee}
              orderTotal={orderTotal}
              shippingMethod={shippingMethod}
              setShippingMethod={setShippingMethod}
              register={form.register}
              errors={form.formState.errors}
              setValue={form.setValue}
              isSubmitting={form.formState.isSubmitting}
              selectedPayment={form.watch('paymentMethod')}
            />
            
          
          </div>
        </form>
      </div>
    </div>
  );
}