import React from 'react'
import Button from './button'
import { useDispatch } from 'react-redux'
import { destroyLoggedInData } from '../freatures/auth-slice'

export default function Logout() {
  const dispatch = useDispatch()
  return (
    <div>
      <Button onClick={() => dispatch(destroyLoggedInData())}>Logout</Button>
    </div>
  )
}
