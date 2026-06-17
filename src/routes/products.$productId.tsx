import { createFileRoute } from '@tanstack/react-router'

import { ProductDetailShell } from '@/components'
import { getProductDetail } from '@/features/storefront/data/product-detail'

export const Route = createFileRoute('/products/$productId')({
  component: ProductDetailPage,
})

function ProductDetailPage() {
  const { productId } = Route.useParams()
  const product = getProductDetail(productId)

  return <ProductDetailShell product={product} />
}
