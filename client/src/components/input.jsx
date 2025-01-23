import React from 'react'
import { twMerge } from 'tailwind-merge'

const icons = {
  profile: '/profile.svg',
  phone: '/phone.svg',
}

export default function Input({ className, icon = 'profile', ...props }) {
  return (
    <div
      className={twMerge(
        'border flex flex-row items-center bg-primary-foreground rounded-md border-primary-foreground focus-within:ring-1 ring-cyan-100 focus-within:shadow-md',
        className,
      )}
    >
      <input
        {...props}
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
}
