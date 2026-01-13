
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export function MainMenu() {
  return (
    <nav className="flex gap-10 ml-8 text-sm font-bold">
      <Link href="/" className="flex items-center gap-1 hover:text-rose-600 transition-colors">
        Home
        <ChevronDown className="h-4 w-4" />
      </Link>
<Link href="/shop/shop-1" className="flex items-center gap-1 transition-colors">
        Shop
        <ChevronDown className="h-4 w-4" />
      </Link>
      
      <Link href="/pages" className="flex items-center gap-1 hover:text-rose-600 transition-colors">
        Pages
        <ChevronDown className="h-4 w-4" />
      </Link>
      
      <Link href="/blog" className="hover:text-rose-600 transition-colors">
        Blog
      </Link>
      
      <Link href="/contact" className="hover:text-rose-600 transition-colors">
        Contact
      </Link>
    </nav>
  );
}