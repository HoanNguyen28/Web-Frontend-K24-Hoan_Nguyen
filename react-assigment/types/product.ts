

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  hoverImage: string;
  rating: number;
  reviews: number;
  category: string;
  color?: string; 
  brand?: string;
}