import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

export default function AdminLayout() {
  const { isLoggedIn } = useSelector((state) => state.auth)

  return isLoggedIn ? (
    <div>
      <Outlet />
    </div>
  ) : (
    <Navigate to={'/auth/sign-in'} />
  )
}
