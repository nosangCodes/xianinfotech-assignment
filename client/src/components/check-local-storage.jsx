import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { saveLoggedInData } from '../freatures/auth-slice'

export default function CheckLocalStorage() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (window.localStorage) {
      const accessToken = window.localStorage.getItem('admin-access-token')
      const refreshToken = window.localStorage.getItem('admin-refresh-token')

      if (accessToken && refreshToken) {
        dispatch(
          saveLoggedInData({
            accessToken,
            refreshToken,
          }),
        )
      }
    }
  }, [dispatch])
  return null
}
