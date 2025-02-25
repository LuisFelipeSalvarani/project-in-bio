import { cn } from '@/app/lib/utils'
import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  variants?: 'primary' | 'secondary' | 'ghost'
}

export function Button({
  children,
  variants,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'whitespace-nowrap rounded-xl p-3 font-bold text-white hover:opacity-95 disabled:opacity-70',
        variants === 'primary' && 'bg-accent-purple',
        variants === 'secondary' && 'bg-background-tertiary',
        variants === 'ghost' && 'border-border-primary',
        className
      )}
      {...props}
    />
  )
}
