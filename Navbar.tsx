import React from 'react'

export default function Navbar(){
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="font-bold text-lg">Brand</div>
          <nav className="hidden md:flex gap-4 text-sm text-gray-600">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Shop</a>
            <a href="#" className="hover:underline">About</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <input aria-label="search" placeholder="Search products" className="hidden sm:block border rounded px-2 py-1 text-sm"/>
          <button className="px-3 py-1 rounded bg-gray-100">Cart</button>
        </div>
      </div>
    </header>
  )
}