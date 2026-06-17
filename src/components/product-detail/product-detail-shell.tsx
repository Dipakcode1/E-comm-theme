import type { ProductDetail } from '@/features/storefront/data/product-detail'

import { ProductDetailBreadcrumb } from './product-detail-breadcrumb'
import { ProductDetailDetailsSection } from './product-detail-details-section'
import { ProductDetailFooter } from './product-detail-footer'
import { ProductDetailGallery } from './product-detail-gallery'
import { ProductDetailNavbar } from './product-detail-navbar'
import { ProductDetailPurchasePanel } from './product-detail-purchase-panel'
import { ProductDetailRelated } from './product-detail-related'

type ProductDetailShellProps = {
  product: ProductDetail
}

export function ProductDetailShell({ product }: ProductDetailShellProps) {
  return (
    <div className="bg-surface antialiased">
      <ProductDetailNavbar />
      <main className="mx-auto max-w-container-max px-gutter py-site-lg">
        <ProductDetailBreadcrumb product={product} />
        <div className="grid grid-cols-1 gap-site-xl lg:grid-cols-12">
          <ProductDetailGallery product={product} />
          <ProductDetailPurchasePanel product={product} />
        </div>
        <ProductDetailDetailsSection product={product} />
        <ProductDetailRelated product={product} />
      </main>
      <ProductDetailFooter />
    </div>
  )
}
