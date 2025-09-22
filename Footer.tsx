import React from 'react'
export default function Footer(){
  return (
    <footer className="mt-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <div className="font-semibold">Brand</div>
            <div className="mt-2">© {new Date().getFullYear()} Brand — All rights reserved</div>
          </div>
          <div className="flex gap-6">
            <div>
              <div className="font-medium">Company</div>
              <a className="block">About</a>
              <a className="block">Careers</a>
            </div>
            <div>
              <div className="font-medium">Support</div>
              <a className="block">Help Center</a>
              <a className="block">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}