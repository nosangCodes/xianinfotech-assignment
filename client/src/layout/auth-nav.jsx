import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router'

export default function AuthNav() {
  return (
    <div className="bg-primary w-full py-3 px-10 flex flex-row items-center justify-between">
      <img src="/logo.png" className="h-[50px] object-cover" />
      <div className="flex flex-row gap-x-4">
        <Link to={'/auth/sign-in'}>
          <Button>Login</Button>
        </Link>
        <Link to={'/auth/sign-up'}>
          <Button variant={'outline'}>Sign Up</Button>
        </Link>
      </div>
    </div>
  )
}
