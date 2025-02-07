import React from 'react'
import { twMerge } from 'tailwind-merge'

const variants = {
  default: 'bg-white text-primary',
  outline: '',
}
export default function Button({ className, variant = 'default', ...props }) {
  return (
    <button
      {...props}
      className={twMerge(
        'cursor-pointer px-[25px] py-1 rounded-xs text-[16px] font-[600] border border-primary-foreground text-primary-foreground hover:shadow-md transition-shadow disabled:opacity-45',
        variants[variant],
        className,
      )}
    >
      {props.children}
    </button>
  )
}
