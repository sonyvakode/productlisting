import Badge from './Badge';
import Rating from './Rating';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  selectedColor?: string;
}

export default function ProductCard({ product, selectedColor }: ProductCardProps) {
  const displayImage = selectedColor ? `${product.imageUrl}&bg=${selectedColor}` : product.imageUrl;
  return (
    <div className="border rounded p-4 flex flex-col">
      <div className="relative">
        <img src={displayImage} alt={product.name} className="w-full h-48 object-cover rounded" />
        {product.isHot && <Badge label="HOT" />}
      </div>
      <h2 className="font-bold mt-2">{product.name}</h2>
      <div className="flex items-center space-x-2">
        <span className="line-through text-gray-400">${product.price}</span>
        <span className="text-green-600 font-bold">${product.discountPrice}</span>
        <span className="text-red-500">({product.discountPercent}%)</span>
      </div>
      <Rating value={product.ratingValue} count={product.ratingCount} />
    </div>
  );
}
