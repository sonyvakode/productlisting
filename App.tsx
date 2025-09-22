import { useState } from 'react';
import { products, Product } from './data/products';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

const categories = Array.from(new Set(products.map(p => p.category)));

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const filteredProducts: Product[] = products
    .filter(p => !selectedCategory || p.category === selectedCategory)
    .filter(p => !selectedColor || p.colors.includes(selectedColor));

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const pageProducts = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4 font-bold">My Store</header>
      <div className="flex flex-1">
        <Sidebar categories={categories} onCategorySelect={setSelectedCategory} />
        <main className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pageProducts.length > 0 ? (
            pageProducts.map(p => <ProductCard key={p.id} product={p} selectedColor={selectedColor || undefined} />)
          ) : (
            <p>No products found. <button className="underline" onClick={() => setSelectedCategory(null)}>Reset</button></p>
          )}
        </main>
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      <Footer />
    </div>
  );
}
