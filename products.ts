export type Product = {
  id: string
  name: string
  price: number
  discountPrice: number
  discountPercent: number
  ratingValue: number
  ratingCount: number
  isHot: boolean
  colors: string[]
  category: string
  imageUrl: string
}

const colors = ['red','blue','green','yellow','purple','black','white','gray']

const gen = (i:number):Product => {
  const base = 20 + (i % 10) * 5
  const discount = (i % 5) * 5
  const price = base + 100
  const discountPrice = Math.round(price * (1 - discount/100))
  return {
    id: `p-${i}`,
    name: `Product ${i+1}`,
    price,
    discountPrice,
    discountPercent: discount,
    ratingValue: Math.round((3 + (i%3) + Math.random())*10)/10,
    ratingCount: 10 + (i*3)%100,
    isHot: i % 7 === 0,
    colors: [colors[i%colors.length], colors[(i+2)%colors.length]],
    category: ['Shoes','Bags','Electronics','Accessories'][i%4],
    imageUrl: 'https://via.placeholder.com/320x240.png?text=Product+'+(i+1)
  }
}

export const PRODUCTS: Product[] = Array.from({length:24}).map((_,i)=>gen(i))
export const CATEGORIES = Array.from(new Set(PRODUCTS.map(p=>p.category)))
export const ALL_COLORS = Array.from(new Set(PRODUCTS.flatMap(p=>p.colors)))
