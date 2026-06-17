import {
  DEMO_PRODUCTS,
  demoProductImage,
  type DemoProduct,
} from './demo-products'
import type { ProductBadge } from './products'

export type CollectionProduct = {
  id: string
  category: string
  name: string
  price: number
  compareAtPrice?: number
  image: string
  imageAlt: string
  badge?: ProductBadge
}

function toCollectionProduct(demo: DemoProduct): CollectionProduct {
  return {
    id: demo.id,
    category: demo.category,
    name: demo.name,
    price: demo.price,
    compareAtPrice: demo.compareAtPrice,
    image: demoProductImage(demo.id, 600, 800),
    imageAlt: demo.imageAlt,
    badge: demo.badge,
  }
}

export const COLLECTION_CATEGORIES = [
  'All Products',
  'Furniture',
  'Tech Accessories',
  'Stationery',
] as const

export const COLLECTION_COLOR_SWATCHES = [
  { id: 'black', className: 'bg-on-surface' },
  { id: 'stone', className: 'bg-[#E5E5E1]' },
  { id: 'green', className: 'bg-primary' },
  { id: 'terracotta', className: 'bg-tertiary' },
  { id: 'white', className: 'bg-white' },
] as const

export const COLLECTION_SORT_OPTIONS = [
  'Featured',
  'Newest Arrivals',
  'Price: Low to High',
  'Price: High to Low',
] as const

/** Collection grid products (demo catalog). */
export const COLLECTION_PRODUCTS: CollectionProduct[] = DEMO_PRODUCTS.map(toCollectionProduct)
