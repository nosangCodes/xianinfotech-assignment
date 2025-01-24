import React from 'react'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import Input from './input'
import { Link, useNavigate } from 'react-router'
import Button from './button'
import PasswordInput from './password-input'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { saveLoggedInData } from '../freatures/auth-slice'

export default function SignInForm({ className }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loading = isLoading || isSubmitting

  const onSubmit = async (data) => {
    console.log('Form Submitted:', data)
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
      data,
    )
    if (res.status === 200) {
      // loggedin successfully
      dispatch(
        saveLoggedInData({
          ...res.data?.data,
        }),
      )
      // redirect to /
      navigate('/')
    }
  }
  return (
    <div
      className={twMerge(
        'w-full overflow-hidden py-[4rem] px-[2rem]',
        className,
      )}
    >
      <div className="flex flex-col gap-1 justify-center items-center">
        <h2 className="text-primary-foreground text-4xl font-semibold">
          Login
        </h2>
        <p className="text-primary-foreground text-sm">
          Fill in your credentials and click on the Sign Up button
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-2 flex flex-col gap-y-4 mt-[3rem]"
      >
        <div className="flex flex-col gap-y-3">
          <label className="text-primary-foreground text-[16px]">
            Email Address
          </label>
          <Input
            disabled={loading}
            name="email"
            type="email"
            {...register('email', { required: 'Email address is required' })}
          />
          {errors.email && (
            <p className="text-rose-600 tracking-wide text-sm font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-y-3">
          <label className="text-primary-foreground text-[16px]">
            Password
          </label>
          <PasswordInput
            disabled={loading}
            name="password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && (
            <p className="text-rose-600 tracking-wide text-sm font-semibold">
              {errors.password.message}
            </p>
          )}
          <Link to={'#'} className="text-primary-foreground text-right">
            Forgot Password?
          </Link>
        </div>
        <Button
          disabled={loading}
          type="submmit"
          className={'w-fit px-[3.3rem]'}
        >
          Login
        </Button>
        <Link to={'/auth/sign-up'} className="text-primary-foreground">
          Don&apos;t have an account?
          <span className="font-semibold"> Sign Up</span>
        </Link>
      </form>
    </div>
  )
}
