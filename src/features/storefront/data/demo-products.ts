import type { ProductBadge } from './products'

export type DemoProduct = {
  id: string
  category: string
  name: string
  price: number
  compareAtPrice?: number
  badge?: ProductBadge
  variant: string
  imageAlt: string
  description: string[]
}

/** Shared placeholder image — swap with real assets later. */
export function demoProductImage(productId: string, width = 800, height = 800) {
  return `https://picsum.photos/seed/minicom-${productId}/${width}/${height}`
}

export const DEMO_HERO_IMAGE = {
  src: demoProductImage('hero', 1200, 900),
  alt: 'Demo hero image for the Minicom storefront preview.',
}

export const DEMO_BENTO_IMAGE = {
  src: demoProductImage('bento', 1200, 800),
  alt: 'Demo editorial image for the Minicom storefront preview.',
}

const DEMO_DESCRIPTION = [
  'This is demo product copy for the Minicom storefront preview. Replace it with real merchandising content when your catalog is connected.',
  'Designed for layout testing: pricing, variants, imagery, and call-to-action placement all use placeholder data for now.',
]

const DEMO_SPECS = [
  { label: 'Material', value: 'Demo composite' },
  { label: 'Dimensions', value: '10 x 8 x 3 in' },
  { label: 'Weight', value: '1.2 lb' },
  { label: 'Warranty', value: '2 years (demo)' },
  { label: 'SKU', value: 'DEMO-001' },
]

export const DEMO_COLORS = [
  { id: 'teal', label: 'Teal', swatchClassName: 'bg-[#008080]' },
  { id: 'gray', label: 'Gray', swatchClassName: 'bg-[#808080]' },
  { id: 'black', label: 'Black', swatchClassName: 'bg-[#1a1a1a]' },
] as const

export const DEMO_PRODUCTS: DemoProduct[] = [
  {
    id: 'demo-headphones',
    category: 'Audio',
    name: 'Demo Essential Headphones',
    price: 299,
    badge: 'new',
    variant: 'Color: Demo Teal',
    imageAlt: 'Demo headphones product image.',
    description: DEMO_DESCRIPTION,
  },
  {
    id: 'demo-camera',
    category: 'Photography',
    name: 'Demo Prime Camera',
    price: 549,
    variant: 'Bundle: Demo 35mm Lens',
    imageAlt: 'Demo camera product image.',
    description: DEMO_DESCRIPTION,
  },
  {
    id: 'demo-watch',
    category: 'Accessories',
    name: 'Demo Horizon Watch',
    price: 185,
    variant: 'Color: Demo Silver',
    imageAlt: 'Demo watch product image.',
    description: DEMO_DESCRIPTION,
  },
  {
    id: 'demo-journal',
    category: 'Stationery',
    name: 'Demo Journal Set',
    price: 35,
    compareAtPrice: 45,
    badge: 'sale',
    variant: 'Set: Demo Linen (3 pack)',
    imageAlt: 'Demo journal set product image.',
    description: DEMO_DESCRIPTION,
  },
  {
    id: 'demo-lamp',
    category: 'Lighting',
    name: 'Demo Task Lamp',
    price: 185,
    badge: 'new',
    variant: 'Finish: Demo Matte White',
    imageAlt: 'Demo task lamp product image.',
    description: DEMO_DESCRIPTION,
  },
  {
    id: 'demo-chair',
    category: 'Furniture',
    name: 'Demo Mesh Chair',
    price: 640,
    variant: 'Color: Demo Charcoal',
    imageAlt: 'Demo office chair product image.',
    description: DEMO_DESCRIPTION,
  },
  {
    id: 'demo-stand',
    category: 'Tech',
    name: 'Demo Laptop Stand',
    price: 120,
    variant: 'Material: Demo Aluminum',
    imageAlt: 'Demo laptop stand product image.',
    description: DEMO_DESCRIPTION,
  },
  {
    id: 'demo-tray',
    category: 'Stationery',
    name: 'Demo Desk Tray',
    price: 55,
    variant: 'Color: Demo Birch',
    imageAlt: 'Demo desk tray product image.',
    description: DEMO_DESCRIPTION,
  },
]

export function getDemoProduct(productId: string): DemoProduct {
  return DEMO_PRODUCTS.find((product) => product.id === productId) ?? DEMO_PRODUCTS[0]
}

export function demoProductImageSrc(productId: string) {
  return demoProductImage(getDemoProduct(productId).id)
}

export function demoRelatedProducts(productId: string, limit = 4) {
  return DEMO_PRODUCTS.filter((product) => product.id !== productId).slice(0, limit)
}

export { DEMO_SPECS }
