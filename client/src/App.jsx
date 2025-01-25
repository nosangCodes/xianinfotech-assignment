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
import ProtectRoute from './components/protect-route'

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
        <Route element={<ProtectRoute />}>
          <Route path="admin" element={<AdminLayout />}>
            <Route path="users" element={<Users />} />
            <Route
              path="*"
              element={
                <div className="bg-white rounded-2xl flex flex-col flex-1 py-[2.6rem] px-[2.8rem]">
                  <h1 className="text-primary font-black text-6xl">
                    In Progress
                  </h1>
                </div>
              }
            />
          </Route>
        </Route>
      </Routes>
    </Provider>
  )
}

export default App
