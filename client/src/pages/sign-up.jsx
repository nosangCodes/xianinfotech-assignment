import React from 'react'
import SignUpForm from '../components/sign-up-form'

export default function SignUp() {
  return (
    <section>
      <div className="bg-primary rounded-xl mx-4 md:mx-[6rem] my-[4rem] flex md:items-center md:h-[140vh]">
        {/* Image Section */}
        <div className="w-1/2 h-full max-md:hidden">
          <img
            className="object-cover w-full h-full rounded-l-md"
            src="/sign-up-image.png"
            alt="sign up image"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <SignUpForm className="bg-primary" />
        </div>
      </div>
    </section>
  )
}
