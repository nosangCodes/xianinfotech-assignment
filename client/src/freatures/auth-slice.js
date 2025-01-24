import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    saveLoggedInData: (state, action) => {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
      if (action.payload.accessToken) {
        state.isLoggedIn = true
      }
      window.localStorage.setItem(
        'admin-access-token',
        action.payload.accessToken,
      )
      window.localStorage.setItem(
        'admin-refresh-token',
        action.payload.refreshToken,
      )
    },
    destroyLoggedInData: (state) => {
      state.isLoggedIn = false
      state.accessToken = null
      state.refreshToken = null

      window.localStorage.removeItem('admin-access-token')
      window.localStorage.removeItem('admin-refresh-token')
    },
  },
})

export const { destroyLoggedInData, saveLoggedInData } = authSlice.actions
export default authSlice.reducer
