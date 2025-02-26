import { cn } from '@/app/lib/utils'
import type { ComponentProps } from 'react'

interface TextInputProps extends ComponentProps<'input'> {}

export function TextInput({ className, ...props }: TextInputProps) {
  return (
    <input
      className={cn(
        'w-full rounded-xl border border-transparent bg-background-secondary p-3 text-white placeholder:text-content-placeholder hover:border-border-secondary hover:text-content-body active:border-border-tertiary',
        className
      )}
      {...props}
    />
  )
}
