import React from 'react'
export default function Badge({children}:{children:React.ReactNode}){
  return <span className="inline-block bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">{children}</span>
}