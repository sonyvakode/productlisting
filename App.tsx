import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ProductCard from './components/ProductCard'
import Pagination from './components/Pagination'
import Footer from './components/Footer'
import products from './data/products'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.slice(0, 9).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
      <Pagination />
      <Footer />
    </div>
  )
}
