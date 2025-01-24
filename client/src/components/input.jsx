import React from 'react'
import { twMerge } from 'tailwind-merge'

const icons = {
  profile: '/profile.svg',
  phone: '/phone.svg',
}

const Input = React.forwardRef(
  ({ className, icon = 'profile', ...props }, ref) => {
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
          // {...register(props.name, { required: props.required })}
          className="focus-visible:ring-0 text-lg py-2 px-3 w-full focus-visible:outline-none focus-visible:ring-ring"
        />
        {icon && (
          <img
            src={icons[icon]}
            className="max-h-[28px] w-[30px] object-cover mr-3"
          />
        )}
      </div>
    )
  },
)

export default Input
