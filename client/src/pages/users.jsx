import React, { useCallback, useEffect, useState } from 'react'
import axiosInstance from '../axios'
import DataTable from '../components/data-table'
import SearchInput from '../components/search-input'
import Button from '../components/button'
import ResponsivePagination from 'react-responsive-pagination'
import 'react-responsive-pagination/themes/classic.css'
import useDebounce from '../hooks/use-debounce'
import ViewEditUserModal from '../components/view-edit-user-modal'

const labels = ['Name', 'Email', 'Phone', 'Status', 'View']

export default function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [pages, setPages] = useState(2)
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedUser, setSelectedUser] = useState(null)
  // Memoize the fetchUsers function
  const fetchUsers = useCallback(async () => {
    if (searchQuery) return
    try {
      setLoading(true)
      const res = await axiosInstance.get(
        `/api/user?page=${parseInt(currentPage)}`,
      )
      setPages(res.data?.pages)
      setUsers(res.data?.users)
      return res
    } catch (error) {
      console.error('error fetching users', error)
    } finally {
      setLoading(false)
    }
  }, [currentPage, searchQuery]) // Dependency array includes currentPage

  const searchUsers = useCallback(async () => {
    if (!searchQuery) {
      // fetchUsers()
      return
    }
    try {
      setLoading(true)
      const res = await axiosInstance.get(
        `/api/user/search?search=${searchQuery}`,
      )
      setPages(res.data?.pages)
      setUsers(res.data?.users)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }, [searchQuery, fetchUsers])

  useDebounce(searchUsers, 1000, [searchQuery])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers]) // Add fetchUsers as a dependency

  const tableData = []
  users.map((user) => {
    const row = [
      `${user.firstName} ${user.lastName}`,
      user.email,
      user.phone,
      user.status ? 'Active' : 'InActive',
      <Button
        onClick={() => setSelectedUser(user.id)}
        className={
          'bg-primary hover:bg-primary/90 rounded-lg text-sm py-[7px] text-primary-foreground'
        }
      >
        View
      </Button>,
    ]

    tableData.push(row)
  })

  return (
    <>
      <div className="bg-white rounded-2xl  flex flex-col flex-1 py-[2.6rem] px-[2.8rem]">
        <div className="flex flex-col gap-y-3">
          <h1 className="text-primary text-3xl font-bold">Dashboard</h1>
          <p className="text-neutral-500/80 text-sm">01 - 25 March, 2020</p>
        </div>
        <img src="/stats.svg" className="md:w-[60%] h-[50px] md:h-[80px]" />
        <div className="flex flex-col gap-y-3 mt-[2rem] flex-1">
          <h2 className="text-2xl font-semibold text-primary">User List</h2>
          {/* <input className="border" type="text" /> */}
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
          <DataTable loading={loading} data={tableData} labels={labels} />
          <ResponsivePagination
            current={currentPage}
            total={pages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
      <ViewEditUserModal
        open={Boolean(selectedUser)}
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </>
  )
}
