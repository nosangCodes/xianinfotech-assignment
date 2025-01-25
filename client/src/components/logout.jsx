import React from 'react'
import Button from './button'
import { useDispatch } from 'react-redux'
import { destroyLoggedInData } from '../freatures/auth-slice'

export default function Logout({ className }) {
  const dispatch = useDispatch()
  return (
    <Button
      className={className}
      onClick={() => dispatch(destroyLoggedInData())}
    >
      Logout
    </Button>
  )
}
