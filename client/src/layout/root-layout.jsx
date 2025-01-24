import React from 'react'
import { Link } from 'react-router'
import Button from '../components/button'
import { useDispatch } from 'react-redux'
import { saveLoggedInData } from '../freatures/auth-slice'

export default function RootLayout() {
  

  return (
    <section className=" h-screen bg-primary gap-2 w-full flex justify-center items-center">
      <Link to={'/auth/sign-up'}>
        <Button className={''}>Auth</Button>
      </Link>
      <Link to={'/admin/users'}>
        <Button>Admin</Button>
      </Link>
    </section>
  )
}
