import React from 'react'
import { twMerge } from 'tailwind-merge'
import Input from './input'
import Button from './button'
import { useForm } from 'react-hook-form'
import PasswordInput from './password-input'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { saveLoggedInData } from '../freatures/auth-slice'

export default function SignUpForm({ className, ...props }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isLoading, isSubmitting },
  } = useForm()

  const loading = isLoading || isSubmitting
  const password = watch('password') // Watch the password field
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    delete data.confirmPassword
    delete data.agreeTerms

    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/auth/register`,
      {
        ...data,
        userType: 'CLIENT',
      },
    )
    if (res.status === 201) {
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
            name="phone"
            {...register('phone', {
              required: 'Contact number is required',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Only numbers are allowed',
              },
            })}
          />
          {errors.phone && (
            <p className="text-rose-600 tracking-wide text-sm font-semibold">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* WhatsApp No */}
        <div className="flex flex-col gap-y-3">
          <label className="text-primary-foreground text-[16px]">
            WhatsApp No.
          </label>
          <Input
            disabled={loading}

            name="whatsappNo"
            {...register('whatsappNo', {
              required: 'WhatsApp number is required',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Only numbers are allowed',
              },
            })}
          />
          {errors.whatsappNo && (
            <p className="text-rose-600 tracking-wide text-sm font-semibold">
              {errors.whatsappNo.message}
            </p>
          )}
        </div>

        {/* Username */}
        <div className="flex flex-col gap-y-3">
          <label className="text-primary-foreground text-[16px]">Email</label>
          <Input
            disabled={loading}

            name="email"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && (
            <p className="text-rose-600 tracking-wide text-sm font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>
        {/* State */}
        <div className="flex flex-col gap-y-3">
          <label className="text-primary-foreground text-[16px]">State</label>
          <Input
            disabled={loading}

            name="state"
            {...register('state', { required: 'State is required' })}
          />
          {errors.state && (
            <p className="text-rose-600 tracking-wide text-sm font-semibold">
              {errors.state.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-y-3">
          <label className="text-primary-foreground text-[16px]">
            Password
          </label>
          <PasswordInput
            disabled={loading}

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
            disabled={loading}

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
          <Button
            disabled={loading}
            type="submit"
            className="w-full bg-black text-white py-2 text-lg"
          >
            Register
          </Button>
          <Link className="w-full" to={'/auth/sign-in'}>
            <Button
              disabled={loading}
              type="button"
              className="w-full py-2 text-lg"
            >
              Login
            </Button>
          </Link>
        </div>
      </form>
    </div>
  )
}
