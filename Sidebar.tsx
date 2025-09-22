import React from 'react'
import {CATEGORIES, ALL_COLORS} from '../data/products'

export default function Sidebar({onCategory,activeCategories,onColor,activeColor}:{onCategory:(c:string)=>void, activeCategories:string[], onColor:(c:string|null)=>void, activeColor:string|null}){
  return (
    <aside className="space-y-4">
      <div className="bg-white p-3 rounded shadow-sm">
        <h4 className="font-semibold mb-2">Categories</h4>
        {CATEGORIES.map(cat=>(
          <button key={cat} onClick={()=>onCategory(cat)} className={`block w-full text-left py-1 text-sm ${activeCategories.includes(cat)?'font-semibold':'text-gray-600'}`}>{cat}</button>
        ))}
      </div>

      <div className="bg-white p-3 rounded shadow-sm">
        <h4 className="font-semibold mb-2">Colors</h4>
        <div className="flex flex-wrap gap-2">
          <button aria-label="Clear color" onClick={()=>onColor(null)} className={`px-2 py-1 text-sm ${activeColor===null?'underline':''}`}>All</button>
          {ALL_COLORS.map(c=>(
            <button key={c} onClick={()=>onColor(c)} aria-pressed={activeColor===c} title={c}
              className="w-7 h-7 rounded-full border" style={{backgroundColor: c}}/>
          ))}
        </div>
      </div>
    </aside>
  )
}