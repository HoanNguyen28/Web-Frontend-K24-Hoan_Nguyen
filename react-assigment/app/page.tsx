'use client';
import { HeaderHome } from "@/components/layout/header/header-home";
import CategorySection from "@/components/home/top-catelogry";
import PopularProduct from "@/components/home/popular-product";
import DealSection from "@/components/home/deal-section";
import TopBar from "@/components/home/top-bar-home";

export default function Home() {
  return (
    <>
    <TopBar />
      <HeaderHome />
      <CategorySection />

      <div className="my-3 border-t border-gray-300" />

      <PopularProduct />

      <DealSection />
    </>
  );
}
