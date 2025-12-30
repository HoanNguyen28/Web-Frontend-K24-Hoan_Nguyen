"use client";

import { Suspense, lazy } from "react";
import { Spinner } from "@/components/ui/spinner";

const ProductList = lazy(() => import("@/components/product/product-list"));

export default function ProductListPage() {
  return (
    <Suspense fallback={<Spinner aria-label="Loading Products..." />}>
      <ProductList />
    </Suspense>
  );
}