'use client';

import { useState, useMemo } from 'react';
import { products } from '@/data/products';

export type ProductTabId = 'all' | 'popular' | 'sale' | 'rated';


function getRandomProducts(list: typeof products, count: number) {
  return [...list]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export function useMemoTabProduct() {
  const [activeTab, setActiveTab] = useState<ProductTabId>('all');

  const filteredProducts = useMemo(() => {
    if (activeTab === 'all') {
    
      return products.slice(0, 10);
    }


    return getRandomProducts(products, 10);
  }, [activeTab]);

  return {
    activeTab,
    setActiveTab,
    filteredProducts,
  };
}
