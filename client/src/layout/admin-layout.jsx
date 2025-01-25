import React from 'react'
import { Outlet } from 'react-router'
import AdminSidebar from '../components/admin-sidebar'

export default function AdminLayout() {
  return (
    <div>
      <AdminSidebar />
      <div className="ml-[230px] flex bg-primary min-h-screen p-4 pl-0">
        <Outlet />
      </div>
    </div>
  )
}
