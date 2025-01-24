import React from 'react'
import { twMerge } from 'tailwind-merge'
import SignInForm from '../components/sign-in-form'

export default function SignIn() {
  return (
    <section
      className={twMerge(
        'bg-primary rounded-xl mx-4 md:mx-[6rem] my-[4rem] flex md:items-center md:h-[85vh]',
      )}
    >
      {/* Image Section */}
      <div className="w-1/2 h-full max-md:hidden">
        <img
          className="object-cover w-full h-full rounded-l-md"
          src="/sign-in-img.png"
          alt="sign in image"
        />
      </div>
      <SignInForm className="bg-primary w-full md:w-1/2" />
    </section>
  )
}
