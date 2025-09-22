export interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  discountPercent: number;
  ratingValue: number;
  ratingCount: number;
  isHot: boolean;
  colors: string[];
  category: string;
  imageUrl: string;
}

export const products: Product[] = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: 100 + i * 10,
  discountPrice: 80 + i * 8,
  discountPercent: 20,
  ratingValue: Math.floor(Math.random() * 5) + 1,
  ratingCount: Math.floor(Math.random() * 100),
  isHot: i % 4 === 0,
  colors: ['red', 'blue', 'green'],
  category: i % 2 === 0 ? 'Category A' : 'Category B',
  imageUrl: 'https://via.placeholder.com/300x300.png?text=Product+' + (i + 1),
}));
