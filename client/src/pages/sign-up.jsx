import React from 'react'
import SignUpForm from '../components/sign-up-form'

export default function SignUp() {
  return (
    <section>
      <div className="bg-primary rounded-md overflow-clip min-h-[800px] mx-[6rem] my-[4rem] flex">
        <div className="w-full">
          <img className='object-cover h-full w-full' src="/sign-up-image.png" alt="sign up image " />
        </div>
        <SignUpForm className={' bg-primary'} />
      </div>
    </section>
  )
}
