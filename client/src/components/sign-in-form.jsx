import React from 'react'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import Input from './input'
import { Link } from 'react-router'
import Button from './button'
import PasswordInput from './password-input'

export default function SignInForm({ className }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log('Form Submitted:', data)
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
        <Button type="submmit" className={'w-fit px-[3.3rem]'}>
          Login
        </Button>
        <Link to={'/auth/sign-up'} className="text-primary-foreground">
          Don’t have an account?
          <span className="font-semibold"> Sign Up</span>
        </Link>
      </form>
    </div>
  )
}
