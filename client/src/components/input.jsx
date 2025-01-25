import React from 'react'
import { twMerge } from 'tailwind-merge'

const icons = {
  profile: '/profile.svg',
  phone: '/phone.svg',
  whatsapp: '/whatsapp.svg',
  mail: '/mail.svg',
}

const Input = React.forwardRef(({ className, icon, ...props }, ref) => {
  return (
    <div
      className={twMerge(
        'border flex overflow-hidden flex-row items-center bg-primary-foreground rounded-md border-primary-foreground focus-within:ring-1 ring-cyan-100 focus-within:shadow-md ',
        className,
      )}
    >
      <input
        ref={ref}
        {...props}
        className="focus-visible:ring-0 text-lg py-2 px-3 w-full focus-visible:outline-none focus-visible:ring-ring disabled:bg-zinc-900/20 disabled:text-neutral-500/30 disabled:animate-pulse "
      />
      {icon && (
        <img
          src={icons[icon]}
          className="max-h-[28px] w-[30px] object-cover mr-3"
        />
      )}
    </div>
  )
})

export default Input
