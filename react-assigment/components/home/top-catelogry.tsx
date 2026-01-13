'use client';

import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/categories';
import { Badge } from "@/components/ui/badge";

export default function CategorySection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-left mb-12">
            <span className="text-gray-900">Top </span>
             <span className="text-red-600 font-serif ">Categories</span>
        </h2>

        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 divide-x divide-gray-200">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={`/shop?category=${category.slug}`}
              className="group"
            >
              <div className=" rounded-lg p-6 text-center  transition-shadow">

                <div className="relative w-30 h-30 mx-auto mb-4">
                  <Image
                    src={category.icon}
                    alt={category.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform bg-gray-200 rounded-full p-6"
                  />
                   
               <Badge
                count={category.productCount}
                className="absolute top-3 right-3 transform translate-x-1/2 -translate-y-1/2 text-red-600 bg-white text-base w-10 h-10 "
                />
                </div>
                
              

                <h3 className="font-medium text-sm group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}