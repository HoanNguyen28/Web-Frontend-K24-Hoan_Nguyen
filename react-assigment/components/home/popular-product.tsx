'use client';

import { ProductCard } from '@/components/product/product-card';
import { ProductTabs } from '@/components/product/product-tabs';
import { useMemoTabProduct } from '@/hooks/usememo-tabs-product';


export default function PopularProduct() {
  const { activeTab, setActiveTab, filteredProducts } = useMemoTabProduct();

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-extrabold">
            <span className="text-gray-900">Popular </span>
            <span className="text-red-600 font-serif">Product</span>
          </h2>

          <ProductTabs
            value={activeTab}
            onChange={setActiveTab}
          />
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredProducts.slice(0, 10).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              hoverImage={product.hoverImage}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
