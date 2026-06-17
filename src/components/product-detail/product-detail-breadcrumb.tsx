import { Link } from '@tanstack/react-router'

import type { ProductDetail } from '@/features/storefront/data/product-detail'
import { ROUTES } from '@/config/routes'

import { MaterialIcon } from '@/components/common/material-icon'

type ProductDetailBreadcrumbProps = {
  product: ProductDetail
}

export function ProductDetailBreadcrumb({ product }: ProductDetailBreadcrumbProps) {
  return (
    <div className="mb-site-lg flex items-center gap-site-xs font-label-sm tracking-wider text-secondary uppercase">
      <Link to={ROUTES.home} className="hover:text-primary">
        Shop
      </Link>
      <MaterialIcon name="chevron_right" size={14} />
      <Link to={ROUTES.collections} className="hover:text-primary">
        {product.category}
      </Link>
      <MaterialIcon name="chevron_right" size={14} />
      <span className="text-on-surface">{product.name}</span>
    </div>
  )
}
