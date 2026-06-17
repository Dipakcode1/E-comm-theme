import type { ProductDetail } from '@/features/storefront/data/product-detail'

import { MaterialIcon } from '@/components/common/material-icon'

type ProductDetailDetailsSectionProps = {
  product: ProductDetail
}

export function ProductDetailDetailsSection({ product }: ProductDetailDetailsSectionProps) {
  return (
    <div className="mt-site-xl grid grid-cols-1 gap-site-lg md:grid-cols-2">
      <div className="rounded-xl bg-surface-container-low p-site-lg">
        <h2 className="mb-site-md font-headline-lg text-headline-lg text-on-surface">
          Product Description
        </h2>
        {product.description.map((paragraph) => (
          <p
            key={paragraph.slice(0, 32)}
            className="mt-site-md font-body-lg text-body-lg leading-relaxed text-on-surface-variant first:mt-0"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex flex-col justify-between rounded-xl bg-surface-container-highest p-site-lg">
        <div>
          <h2 className="mb-site-md font-headline-lg text-headline-lg text-on-surface">
            Technical Specifications
          </h2>
          <ul className="space-y-site-sm">
            {product.specs.map((spec) => (
              <li
                key={spec.label}
                className="flex justify-between border-b border-outline-variant py-site-xs"
              >
                <span className="font-label-md tracking-wider text-secondary uppercase">
                  {spec.label}
                </span>
                <span className="font-body-md text-on-surface">{spec.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-site-lg">
          <button
            type="button"
            className="flex items-center gap-site-xs font-bold text-primary decoration-primary hover:underline"
          >
            Download Full Specs (PDF)
            <MaterialIcon name="download" size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
