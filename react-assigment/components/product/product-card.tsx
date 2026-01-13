'use client';

import Link from 'next/link';
import { ProductActions } from './product-actions';
import { ProductRating } from './product-rating';
import { ProductPrice } from './product-price';
import { ProductImage } from './product-image';

interface ProductCardProps {
  id: number;  
  name: string;
  image: string;
  hoverImage?: string;
  price: number;
  rating?: number;
}

export function ProductCard({
  id,
  name,
  image,
  hoverImage,
  price,
  rating = 5,
}: ProductCardProps) {
  return (
    <div className="group">
      <div className="rounded-xl bg-gray-100 p-4 transition-shadow hover:shadow-xl">
        

        <div className="relative">
          <Link href={`/product/${id}`}>
            <ProductImage
              image={image}
              hoverImage={hoverImage}
              alt={name}
            />
          </Link>
          
         
          <ProductActions 
            product={{
              id,
              name,
              price,
              image
            }} 
          />
        </div>

    
        <Link href={`/product/${id}`} className="block">
          <div className="mt-4 space-y-1">
            <h3 className="text-sm font-medium text-gray-800">{name}</h3>
            <ProductRating value={rating} />
            <ProductPrice price={price} />
          </div>
        </Link>
      </div>
    </div>
  );
}