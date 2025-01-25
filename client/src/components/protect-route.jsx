import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

export default function ProtectRoute() {
  const { isLoggedIn } = useSelector((state) => state.auth)
  
  return isLoggedIn ? <Outlet /> : <Navigate to={'/auth/sign-in'} />
}
