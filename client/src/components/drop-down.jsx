import React from 'react'
import { twMerge } from 'tailwind-merge'

const DropDown = React.forwardRef(
  ({ className, items = [], ...props }, ref) => {
    return (
      <div
        className={twMerge(
          'border flex overflow-hidden flex-row items-center bg-primary-foreground rounded-md focus-within:ring-1 ring-cyan-100 focus-within:shadow-md disabled:opacity-70 border-[#0C0B0B]',
          className,
        )}
      >
        <select
          ref={ref}
          className="focus-visible:ring-0 text-lg py-2 px-3 w-full focus-visible:outline-none focus-visible:ring-ring disabled:bg-zinc-900/20 disabled:text-neutral-500/30 disabled:animate-pulse"
          {...props}
        >
          {items.map((item, index) => (
            <option key={index} value={item} className="capitalize">
              {item}
            </option>
          ))}
        </select>
      </div>
    )
  },
)

export default DropDown
