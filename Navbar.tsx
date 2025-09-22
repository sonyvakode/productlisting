import React from 'react'

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow p-4 flex justify-between">
      <span className="font-bold">Shop</span>
      <div className="space-x-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Products</a>
      </div>
    </nav>
  )
}
