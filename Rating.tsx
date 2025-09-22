import React from 'react'
export default function Rating({value,count}:{value:number,count:number}){
  const full = Math.round(value)
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="flex">
        {Array.from({length:5}).map((_,i)=>(
          <svg key={i} className={`w-4 h-4 ${i<full ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.165L12 18.896 4.664 23.162l1.402-8.165L.132 9.21l8.2-1.192z"/>
          </svg>
        ))}
      </div>
      <span className="text-gray-600">({count})</span>
    </div>
  )
}