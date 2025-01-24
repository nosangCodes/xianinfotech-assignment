import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const PasswordInput = React.forwardRef(
  ({ className, type = 'password', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(type !== 'password')
    return (
      <div
        className={twMerge(
          'border flex flex-row items-center bg-primary-foreground rounded-md border-primary-foreground focus-within:ring-1 ring-cyan-100 focus-within:shadow-md disabled:opacity-70',
          className,
        )}
      >
        <input
          ref={ref}
          {...props}
          type={showPassword ? 'text' : 'password'}
          className="focus-visible:ring-0 text-lg py-2 px-3 w-full focus-visible:outline-none focus-visible:ring-ring"
        />
        <img
          onClick={() => setShowPassword((prev) => !prev)}
          src={'/eye.svg'}
          className={twMerge(
            'max-h-[28px] cursor-pointer w-[30px] object-cover mr-3 transition-transform',
            showPassword ? 'scale-[0.8]' : 'scale-100',
          )}
        />
      </div>
    )
  },
)

export default PasswordInput
