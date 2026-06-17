import {
  DEMO_COLORS,
  DEMO_PRODUCTS,
  DEMO_SPECS,
  demoProductImage,
  demoRelatedProducts,
  getDemoProduct,
} from './demo-products'

export type ProductColorOption = {
  id: string
  label: string
  swatchClassName: string
}

export type ProductSpec = {
  label: string
  value: string
}

export type RelatedProduct = {
  id: string
  category: string
  name: string
  price: number
  image: string
  imageAlt: string
}

export type ProductDetail = {
  id: string
  name: string
  category: string
  price: number
  rating: number
  reviewCount: number
  badge?: string
  description: string[]
  specs: ProductSpec[]
  colors: ProductColorOption[]
  images: Array<{ src: string; alt: string }>
  relatedProducts: RelatedProduct[]
}

function buildDemoProductDetail(productId: string): ProductDetail {
  const demo = getDemoProduct(productId)

  return {
    id: demo.id,
    name: demo.name,
    category: demo.category,
    price: demo.price,
    rating: 4.5,
    reviewCount: 24,
    badge: demo.badge === 'new' ? 'Demo New' : demo.badge === 'sale' ? 'Demo Sale' : 'Demo',
    description: demo.description,
    specs: DEMO_SPECS.map((spec) => ({
      ...spec,
      value: `${spec.value} (${demo.id})`,
    })),
    colors: DEMO_COLORS.map((color) => ({ ...color })),
    images: [
      { src: demoProductImage(demo.id, 1000, 1000), alt: demo.imageAlt },
      { src: demoProductImage(`${demo.id}-2`, 400, 400), alt: `${demo.name} alternate view` },
      { src: demoProductImage(`${demo.id}-3`, 400, 400), alt: `${demo.name} detail view` },
      { src: demoProductImage(`${demo.id}-4`, 400, 400), alt: `${demo.name} lifestyle view` },
    ],
    relatedProducts: demoRelatedProducts(demo.id).map((related) => ({
      id: related.id,
      category: related.category,
      name: related.name,
      price: related.price,
      image: demoProductImage(related.id, 500, 500),
      imageAlt: related.imageAlt,
    })),
  }
}

export const PRODUCT_DETAILS: Record<string, ProductDetail> = Object.fromEntries(
  DEMO_PRODUCTS.map((product) => [product.id, buildDemoProductDetail(product.id)]),
)

export function getProductDetail(productId: string): ProductDetail {
  return PRODUCT_DETAILS[productId] ?? buildDemoProductDetail(DEMO_PRODUCTS[0].id)
}

export function formatProductPrice(amount: number) {
  return `$${amount.toFixed(2)}`
}

export function productDetailPath(productId: string) {
  return `/products/${productId}` as const
}
