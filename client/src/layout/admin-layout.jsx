import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import AdminSidebar from '../components/admin-sidebar'

export default function AdminLayout() {
  const { isLoggedIn } = useSelector((state) => state.auth)

  return isLoggedIn ? (
    <div>
      <AdminSidebar />
      <div className="ml-[230px] flex bg-primary min-h-screen p-4 pl-0">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to={'/auth/sign-in'} />
  )
}
