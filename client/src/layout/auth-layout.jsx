import React from 'react'
import { Navigate, Outlet } from 'react-router'
import AuthNav from './auth-nav'
import Footer from '../components/footer'
import { useSelector } from 'react-redux'

export default function AuthLayout() {
  const { isLoggedIn } = useSelector((state) => state.auth)

  return isLoggedIn ? (
    <Navigate to={'/admin/users'} />
  ) : (
    <section className="flex flex-col min-h-screen">
      <AuthNav />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </section>
  )
}
