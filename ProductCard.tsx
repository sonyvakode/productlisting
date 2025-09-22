import React from 'react'
import Badge from './Badge'
import Rating from './Rating'
import type {Product} from '../data/products'

export default function ProductCard({p, selectedColor}:{p:Product, selectedColor?:string}){
  const bg = selectedColor ? selectedColor : 'transparent'
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative h-44 flex items-center justify-center" style={{background:bg}}>
        {p.isHot && <div className="absolute top-2 left-2"><Badge>HOT</Badge></div>}
        <img src={p.imageUrl} alt={p.name} className="max-h-40 object-contain"/>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm">{p.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500 line-through">₹{p.price}</div>
            <div className="text-base font-semibold">₹{p.discountPrice} <span className="text-green-600 text-xs font-medium">-{p.discountPercent}%</span></div>
          </div>
          <Rating value={p.ratingValue} count={p.ratingCount}/>
        </div>
      </div>
    </article>
  )
}