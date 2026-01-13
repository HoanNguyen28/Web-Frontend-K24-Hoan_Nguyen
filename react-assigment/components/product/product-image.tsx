'use client';

import Image from 'next/image';

interface ProductImageProps {
  image: string;
  hoverImage?: string;
  alt: string;
}

export function ProductImage({
  image,
  hoverImage,
  alt,
}: ProductImageProps) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg">
 
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover transition-opacity duration-300 group-hover:opacity-0"
      />


      {hoverImage && (
        <Image
          src={hoverImage}
          alt={alt}
          fill
          className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
    </div>
  );
}
