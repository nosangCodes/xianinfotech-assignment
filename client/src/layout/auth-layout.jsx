import React from 'react'
import { Outlet } from 'react-router'
import AuthNav from './auth-nav'
import Footer from '../components/footer'

export default function AuthLayout() {
  return (
    <section className="flex flex-col min-h-screen">
      <AuthNav />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </section>
  )
}
