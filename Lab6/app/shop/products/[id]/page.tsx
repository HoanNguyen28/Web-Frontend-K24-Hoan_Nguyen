import ProductsDetail from "@/components/product/product-detail";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  return <ProductsDetail params={params} />;
}