import { Route, Router, Routes } from 'react-router'
import './App.css'
import AuthLayout from './layout/auth-layout'
import SignUp from './pages/sign-up'
import SignIn from './pages/sign-in'

function App() {
  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App
