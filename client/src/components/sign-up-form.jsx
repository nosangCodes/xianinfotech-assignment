import React from 'react'
import { twMerge } from 'tailwind-merge'
import Input from './input'
import Button from './button'
import { useForm } from 'react-hook-form'
import PasswordInput from './password-input'
import { Link } from 'react-router'

export default function SignUpForm({ className, ...props }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const password = watch('password') // Watch the password field

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
          Sign Up
        </h2>
        <p className="text-primary-foreground text-sm">
          Fill in your credentials and click on the Sign Up button
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-2 flex flex-col gap-y-4 mt-[3rem]"
      >
        {/* First Name */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-y-3">
            <label className="text-primary-foreground text-[16px]">
              First Name
            </label>
            <Input
              name="firstName"
              {...register('firstName', { required: 'First Name is required' })}
            />
            {errors.firstName && (
              <p className="text-rose-600 tracking-wide text-sm font-semibold">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-y-3">
            <label className="text-primary-foreground text-[16px]">
              Last Name
            </label>
            <Input
              name="lastName"
              {...register('lastName', { required: 'Last Name is required' })}
            />
            {errors.lastName && (
              <p className="text-rose-600 tracking-wide text-sm font-semibold">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Contact No */}
        <div className="flex flex-col gap-y-3">
          <label className="text-primary-foreground text-[16px]">
            Contact No.
          </label>
          <Input
            name="contactNo"
            {...register('contactNo', {
              required: 'Contact number is required',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Only numbers are allowed',
              },
            })}
          />
          {errors.contactNo && (
            <p className="text-rose-600 tracking-wide text-sm font-semibold">
              {errors.contactNo.message}
            </p>
          )}
        </div>

        {/* WhatsApp No */}
        <div className="flex flex-col gap-y-3">
          <label className="text-primary-foreground text-[16px]">
            WhatsApp No.
          </label>
          <Input
            name="whatsAppNo"
            {...register('whatsAppNo', {
              required: 'WhatsApp number is required',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Only numbers are allowed',
              },
            })}
          />
          {errors.whatsAppNo && (
            <p className="text-rose-600 tracking-wide text-sm font-semibold">
              {errors.whatsAppNo.message}
            </p>
          )}
        </div>

        {/* Username */}
        <div className="flex flex-col gap-y-3">
          <label className="text-primary-foreground text-[16px]">
            Username
          </label>
          <Input
            name="username"
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && (
            <p className="text-rose-600 tracking-wide text-sm font-semibold">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-y-3">
          <label className="text-primary-foreground text-[16px]">
            Password
          </label>
          <PasswordInput
            name="password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
            })}
          />
          {errors.password && (
            <p className="text-rose-600 tracking-wide text-sm font-semibold">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-y-3">
          <label className="text-primary-foreground text-[16px]">
            Confirm Password
          </label>
          <PasswordInput
            name="confirmPassword"
            type="password"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) =>
                value === password || 'Passwords do not match',
            })}
          />
          {errors.confirmPassword && (
            <p className="text-rose-600 tracking-wide text-sm font-semibold">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Terms and Conditions */}
        <div className="flex gap-x-2 items-center">
          <input
            name="agreeTerms"
            id="terms"
            type="checkbox"
            {...register('agreeTerms', {
              required: 'You must agree to the terms',
            })}
            className="text-3xl"
          />
          <label
            htmlFor="terms"
            className="text-primary-foreground text-[16px] select-none"
          >
            I agree to the{' '}
            <span className="font-semibold">Terms and Conditions</span> and{' '}
            <span className="font-semibold">Privacy Policy</span>.
          </label>
        </div>
        {errors.agreeTerms && (
          <p className="text-rose-600 tracking-wide text-sm font-semibold">
            {errors.agreeTerms.message}
          </p>
        )}

        {/* Buttons */}
        <div className="flex flex-row gap-x-6 mt-4">
          <Button type="submit" className="w-full bg-black text-white py-2 text-lg">
            Register
          </Button>
          <Link className="w-full" to={'/auth/sign-in'}>
            <Button type="button" className="w-full py-2 text-lg">
              Login
            </Button>
          </Link>
        </div>
      </form>
    </div>
  )
}
