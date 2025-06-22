import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const skeletonVariants = cva(
  'animate-pulse rounded-md bg-gray-200 dark:bg-gray-700',
  {
    variants: {
      variant: {
        default: '',
        card: 'rounded-lg'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={skeletonVariants({ variant, className })}
        {...props}
      />
    )
  }
)
Skeleton.displayName = 'Skeleton'

export { Skeleton }