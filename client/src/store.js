import { configureStore } from '@reduxjs/toolkit'
import authReducer from './freatures/auth-slice'

export default configureStore({
  reducer: {
    auth: authReducer,
  },
})
