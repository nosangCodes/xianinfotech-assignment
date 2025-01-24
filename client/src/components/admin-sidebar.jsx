import React from 'react'

export default function AdminSidebar() {
  return (
    <div className="w-[230px] bg-primary inset-y-0 fixed left-0">
      <img
        src="/sidebar-logo.svg"
        className="w-[130px] p-4 object-cover max-h-[120px]"
        alt="sidebar logo"
      />

      <ul className="mt-[4rem] flex flex-col [&>li]:py-1 [&>li]:border-white [&>li]:border-b [&>li:first-child]:border-t [&>li>p]:py-1">
        <li>
          <p className="bg-primary-foreground text-primary font-semibold text-lg px-4">
            User List
          </p>
        </li>
        <li>
          <p className="text-primary-foreground font-semibold text-lg px-4">
            Transaction List
          </p>
        </li>
        <li>
          <p className="text-primary-foreground font-semibold text-lg px-4">
            Video Management
          </p>
        </li>
        <li>
          <p className="text-primary-foreground font-semibold text-lg px-4">
            Top Receivers List
          </p>
        </li>
      </ul>
    </div>
  )
}
