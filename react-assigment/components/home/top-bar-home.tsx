
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#f5e6d3] text-gray-800 py-1">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-left text-lg">
          <p className="flex items-center gap-2 text-base font-bold">
            Welcome to our international shop! Enjoy free shipping on orders $100 up.
            <Link href="/shop" className="text-red-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}