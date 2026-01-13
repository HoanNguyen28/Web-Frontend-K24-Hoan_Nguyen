// components/hero-section-atomic/main-slide/main-slide.tsx

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  { id: 1, image: '/assets/img/slider/banner-1.jpg', discount: '40%' },
  { id: 2, image: '/assets/img/slider/banner-2.jpg', discount: '35%' },
  { id: 3, image: '/assets/img/slider/banner-3.jpg', discount: '45%' },
];

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      loop
      className="w-full h-full"
    >
      {slides.map(({ id, image, discount }) => (
        <SwiperSlide key={id}>
          <div className="relative w-full h-full bg-gray-100">
            <Image 
              src={image} 
              alt={`Banner ${id}`}
              fill 
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover" 
              priority 
            />

            <div className="absolute inset-0 z-10 flex items-center px-12">
              <div>
                <p className="mb-2 text-sm text-pink-600">Accessories</p>
                <h2 className="mb-4 text-4xl font-bold">
                  Up To <span className="text-pink-600">{discount} Off</span>
                  <br />
                  latest Creations
                </h2>

                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 rounded bg-white px-6 py-3 font-medium text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  Shop Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}