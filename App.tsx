import React, {useMemo, useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ProductCard from './components/ProductCard'
import Pagination from './components/Pagination'
import Footer from './components/Footer'
import {PRODUCTS} from './data/products'

const PAGE_SIZE = 8

function useQueryState(key:string, initial:string|null){
  const [state, setState] = useState<string|null>(()=> {
    const p = new URLSearchParams(window.location.search).get(key)
    return p ?? initial
  })
  useEffect(()=> {
    const qp = new URLSearchParams(window.location.search)
    if(state===null) qp.delete(key); else qp.set(key,state)
    const s = qp.toString()
    history.replaceState(null,'', s ? `?${s}` : location.pathname)
  },[key,state])
  return [state, setState] as const
}

export default function App(){
  const [category, setCategory] = useQueryState('category', null)
  const [color, setColor] = useQueryState('color', null)
  const [sort, setSort] = useQueryState('sort', 'name')
  const [pageStr, setPageStr] = useQueryState('page','1')
  const page = Number(pageStr || '1')

  const [query, setQuery] = useState('')

  const filtered = useMemo(()=> {
    let out = [...PRODUCTS]
    if(category) out = out.filter(p=>p.category===category)
    if(color) out = out.filter(p=>p.colors.includes(color))
    if(query) out = out.filter(p=>p.name.toLowerCase().includes(query.toLowerCase()))
    if(sort==='price_asc') out.sort((a,b)=>a.discountPrice-b.discountPrice)
    else if(sort==='price_desc') out.sort((a,b)=>b.discountPrice-a.discountPrice)
    else if(sort==='pop') out.sort((a,b)=>b.ratingValue-b.ratingValue)
    else out.sort((a,b)=>a.name.localeCompare(b.name))
    return out
  },[category,color,sort,query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  useEffect(()=>{ if(page>totalPages) setPageStr('1') },[page,totalPages])

  const paged = filtered.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="max-w-7xl mx-auto px-4 py-6 w-full flex-1">
        <div className="flex gap-6">
          <div className="hidden lg:block w-72">
            <Sidebar onCategory={(c)=>setCategory(c===category?null:c)} activeCategories={category?[category]:[]} onColor={(c)=>setColor(c)} activeColor={color}/>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <select value={sort||'name'} onChange={e=>setSort(e.target.value)} className="border rounded px-2 py-1 text-sm">
                  <option value="name">Name</option>
                  <option value="price_asc">Price ↑</option>
                  <option value="price_desc">Price ↓</option>
                  <option value="pop">Popularity</option>
                </select>
                <input placeholder="Search" value={query} onChange={e=>setQuery(e.target.value)} className="border rounded px-2 py-1 text-sm"/>
              </div>
              <div className="text-sm text-gray-600">Showing {filtered.length} results</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {paged.length===0 ? (
                <div className="col-span-full bg-white p-6 rounded shadow text-center">
                  <div className="font-semibold">No products found</div>
                  <button onClick={()=>{
                    setQuery(''); setCategory(null); setColor(null)
                  }} className="mt-3 px-3 py-1 bg-gray-900 text-white rounded">Reset filters</button>
                </div>
              ): paged.map(p=>(
                <ProductCard key={p.id} p={p} selectedColor={color??undefined}/>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <Pagination page={page} total={totalPages} onPage={(n)=>setPageStr(String(n))}/>
              <div className="text-sm text-gray-600">Page {page} of {totalPages}</div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}