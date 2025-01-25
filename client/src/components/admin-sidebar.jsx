import React from 'react'
import Logout from './logout'
import { Link, NavLink } from 'react-router'

export default function AdminSidebar() {
  return (
    <div className="w-[230px] flex flex-col bg-primary inset-y-0 fixed left-0">
      <img
        src="/sidebar-logo.svg"
        className="w-[130px] p-4 object-cover max-h-[120px]"
        alt="sidebar logo"
      />

      <ul className="mt-[4rem] flex flex-1 flex-col [&>li]:py-1 [&>li]:border-white [&>li]:border-b [&>li:first-child]:border-t [&>li>p]:py-1">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? '[&>p]:text-primary [&>p]:bg-primary-foreground'
                : '[&>p]:text-primary-foreground '
            }
            to={'/admin/users'}
          >
            <p className="transition-colors font-semibold text-lg px-4">User List</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? '[&>p]:text-primary [&>p]:bg-primary-foreground'
                : '[&>p]:text-primary-foreground transition-colors'
            }
            to={'/admin/transaction'}
          >
            <p className="font-semibold text-lg px-4">Transaction List</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? '[&>p]:text-primary [&>p]:bg-primary-foreground'
                : '[&>p]:text-primary-foreground '
            }
            to={'/admin/video-management'}
          >
            <p className=" transition-colors font-semibold text-lg px-4">
              Video Management
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? '[&>p]:text-primary [&>p]:bg-primary-foreground'
                : '[&>p]:text-primary-foreground '
            }
            to={'/admin/receiver-list'}
          >
            <p className="transition-colors font-semibold text-lg px-4">
              Top Receivers List
            </p>
          </NavLink>
        </li>
      </ul>
      <Logout className={' mb-4 ml-auto mx-2'} />
    </div>
  )
}
