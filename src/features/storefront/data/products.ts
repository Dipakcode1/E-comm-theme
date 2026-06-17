import {
  DEMO_BENTO_IMAGE,
  DEMO_HERO_IMAGE,
  DEMO_PRODUCTS,
  demoProductImage,
  type DemoProduct,
} from './demo-products'

export type ProductBadge = 'new' | 'sale'

export type Product = {
  id: string
  category: string
  name: string
  price: number
  compareAtPrice?: number
  image: string
  imageAlt: string
  badge?: ProductBadge
}

function toHomeProduct(demo: DemoProduct): Product {
  return {
    id: demo.id,
    category: demo.category,
    name: demo.name,
    price: demo.price,
    compareAtPrice: demo.compareAtPrice,
    image: demoProductImage(demo.id),
    imageAlt: demo.imageAlt,
    badge: demo.badge,
  }
}

export const HERO_IMAGE = DEMO_HERO_IMAGE
export const BENTO_FEATURE_IMAGE = DEMO_BENTO_IMAGE

/** Home page featured products (demo catalog). */
export const PRODUCTS: Product[] = DEMO_PRODUCTS.slice(0, 4).map(toHomeProduct)

export const FOOTER_LINKS = ['About', 'Contact', 'Policies', 'Shipping', 'Returns'] as const
