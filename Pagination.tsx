import React from 'react'
export default function Pagination({page, total, onPage}:{page:number,total:number,onPage:(n:number)=>void}){
  const pages = Array.from({length: total}).map((_,i)=>i+1)
  return (
    <nav className="flex items-center gap-2">
      {pages.map(n=>(
        <button key={n} onClick={()=>onPage(n)} className={`px-3 py-1 rounded ${n===page ? 'bg-gray-900 text-white' : 'bg-white'}`}>{n}</button>
      ))}
    </nav>
  )
}