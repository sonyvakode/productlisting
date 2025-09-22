import { useState } from 'react';
import { Product } from '../data/products';

interface SidebarProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

export default function Sidebar({ categories, onCategorySelect }: SidebarProps) {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (cat: string) => setOpen(prev => ({ ...prev, [cat]: !prev[cat] }));

  return (
    <div className="w-64 p-4 border-r hidden md:block">
      {categories.map(cat => (
        <div key={cat}>
          <button className="w-full text-left font-bold" onClick={() => toggleCategory(cat)}>
            {cat}
          </button>
          {open[cat] && (
            <ul className="pl-4 mt-2 space-y-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <li key={i}>
                  <button onClick={() => onCategorySelect(cat)}>Item {i + 1}</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
