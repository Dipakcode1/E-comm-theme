export type { ProductDetail, RelatedProduct } from './data/product-detail'
export {
  PRODUCT_DETAILS,
  formatProductPrice,
  getProductDetail,
  productDetailPath,
} from './data/product-detail'
export type { CheckoutLineItem, ShippingMethodId } from './data/checkout'
export {
  CHECKOUT_COUNTRIES,
  CHECKOUT_ITEMS,
  CHECKOUT_SHIPPING_METHODS,
  calculateCheckoutTotals,
  formatCheckoutMoney,
} from './data/checkout'
export type { CartLineItem } from './data/cart'
export {
  CART_SHIPPING,
  CART_TAX_RATE,
  INITIAL_CART_ITEMS,
  calculateCartTotals,
  formatCartMoney,
} from './data/cart'
export type { CollectionProduct } from './data/collection'
export {
  COLLECTION_CATEGORIES,
  COLLECTION_COLOR_SWATCHES,
  COLLECTION_PRODUCTS,
  COLLECTION_SORT_OPTIONS,
} from './data/collection'
export type { DemoProduct } from './data/demo-products'
export {
  DEMO_COLORS,
  DEMO_PRODUCTS,
  DEMO_SPECS,
  demoProductImage,
  getDemoProduct,
} from './data/demo-products'
export type { Product, ProductBadge } from './data/products'
export { BENTO_FEATURE_IMAGE, FOOTER_LINKS, HERO_IMAGE, PRODUCTS } from './data/products'
