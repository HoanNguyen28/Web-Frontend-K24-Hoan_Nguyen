import { useState, useMemo } from 'react';
import { Product } from '@/types/product';

export function useProductFilter(products: Product[]) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [priceRange, setPriceRange] = useState([100]);
  const [sortBy, setSortBy] = useState('default');

  // Lấy danh sách Categories duy nhất từ dữ liệu
  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map((p) => p.category)));
    return ['all', ...cats];
  }, [products]);

  // Logic lọc và sắp xếp chính
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Lọc theo Category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Lọc theo Giá
    result = result.filter((p) => p.price <= priceRange[0]);

    // Lọc theo Màu (Nếu data của bạn có trường color, hiện tại đang giả lập UI)
    // if (selectedColor !== 'all') { ... }

    // Sắp xếp
    if (sortBy === 'low-to-high') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'high-to-low') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'name') result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [products, selectedCategory, priceRange, sortBy]);

  return {
    // States
    selectedCategory,
    selectedColor,
    priceRange,
    sortBy,
    // Setters
    setSelectedCategory,
    setSelectedColor,
    setPriceRange,
    setSortBy,
    // Computed data
    categories,
    filteredProducts,
  };
}