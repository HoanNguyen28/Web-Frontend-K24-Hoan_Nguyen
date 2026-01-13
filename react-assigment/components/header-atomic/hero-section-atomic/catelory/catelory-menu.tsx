

import Link from 'next/link';
import { Flame, Gift, Droplet, Crown, Gem, LucideIcon } from 'lucide-react';

interface CategoryItem {
  name: string;
  slug: string;
  icon: LucideIcon;
}

const categories: CategoryItem[] = [
  { name: 'Candles', slug: 'candles', icon: Flame },
  { name: 'Handmade', slug: 'handmade', icon: Gift },
  { name: 'Gift Sets', slug: 'gift-sets', icon: Gift },
  { name: 'Plastic Gifts', slug: 'plastic-gifts', icon: Gem },
  { name: 'Handy Cream', slug: 'handy-cream', icon: Droplet },
  { name: 'Cosmetics', slug: 'cosmetics', icon: Crown },
  { name: 'Silk Accessories', slug: 'silk-accessories', icon: Gem },
];

export default function CategoryMenu() {
  return (
    <div className="w-[240px] h-[450px] bg-white rounded-b-lg overflow-hidden shadow-sm">

      <div className="py-2">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/shop?category=${cat.slug}`}
            className="flex items-center gap-2 px-4 py-2
                       hover:bg-gray-50 hover:text-pink-600
                       transition-colors"
          >
            <cat.icon className="w-5 h-5 text-pink-600" />
            <span>{cat.name}</span>
          </Link>
        ))}
      </div>

  
      <div className="border-t py-2 bg-gray-200">
        <Link href="/shop" className="block px-6 py-3 hover:bg-gray-50 hover:text-pink-600 font-medium">
          Value of the Day
        </Link>
        <Link href="/shop" className="block px-6 py-3 hover:bg-gray-50 hover:text-pink-600 font-medium">
          Top 100 Offers
        </Link>
        <Link href="/shop" className="block px-6 py-3 hover:bg-gray-50 hover:text-pink-600 font-medium">
          New Arrivals
        </Link>
      </div>
    </div>
  );
}