import { Route, Router, Routes } from 'react-router'
import './App.css'
import AuthLayout from './layout/auth-layout'
import SignUp from './pages/sign-up'
import SignIn from './pages/sign-in'
import { Provider } from 'react-redux'
import store from './store'
import RootLayout from './layout/root-layout'
import AdminLayout from './layout/admin-layout'
import CheckLocalStorage from './components/check-local-storage'
import Logout from './components/logout'
import Users from './pages/users'

function App() {
  return (
    <Provider store={store}>
      <CheckLocalStorage />
      <Routes>
        <Route index element={<RootLayout />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Provider>
  )
}

export default App
