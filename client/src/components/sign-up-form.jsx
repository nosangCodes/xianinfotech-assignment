import React from 'react'
import { twMerge } from 'tailwind-merge'
import Input from './input'
import Button from './button'

export default function SignUpForm({ className, ...props }) {
  return (
    <div className={twMerge('w-full py-[4rem] px-[2rem]', className)}>
      <div className="flex flex-col gap-1 justify-center items-center">
        <h2 className="text-primary-foreground text-4xl font-semibold">
          Sign Up
        </h2>
        <p className="text-primary-foreground text-sm">
          Fill in your credentials and click on the the Sign up button
        </p>
      </div>

      <form action="" className="px-2 flex flex-col gap-y-4 mt-[3rem]">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-y-3">
            <label className="text-primary-foreground text-[16px]" htmlFor="">
              First Name
            </label>
            <Input />
          </div>
          <div className="flex flex-col gap-y-3">
            <label className="text-primary-foreground text-[16px]" htmlFor="">
              Last Name
            </label>
            <Input />
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <label className="text-primary-foreground text-[16px]" htmlFor="">
            Contact No.
          </label>
          <Input icon="phone" />
        </div>
        <div className="flex flex-col gap-y-3">
          <label className="text-primary-foreground text-[16px]" htmlFor="">
            WhatsApp No.
          </label>
          <Input icon="phone" />
        </div>
        <div className="flex flex-col gap-y-3">
          <label className="text-primary-foreground text-[16px]" htmlFor="">
            Username
          </label>
          <Input icon="phone" />
        </div>
        <div className="flex flex-col gap-y-3">
          <label className="text-primary-foreground text-[16px]" htmlFor="">
            State
          </label>
          <Input icon="phone" />
        </div>
        <div className="flex flex-col gap-y-3">
          <label className="text-primary-foreground text-[16px]" htmlFor="">
            Referral Code
          </label>
          <Input icon="phone" />
        </div>
        <div className="flex flex-col gap-y-3">
          <label className="text-primary-foreground text-[16px]" htmlFor="">
            Password
          </label>
          <Input icon="phone" />
        </div>
        <div className="flex flex-col gap-y-3">
          <label className="text-primary-foreground text-[16px]" htmlFor="">
            Confirm Password
          </label>
          <Input icon="phone" />
        </div>
        <div className="flex gap-x-2 items-center">
          <input
            name="aggree-terms"
            id="terms"
            type="checkbox"
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

        <div className="flex flex-row gap-x-6 mt-4">
          <Button type="submit" className={'w-full bg-black py-2 text-lg'}>
            Register
          </Button>
          <Button type="button" className={'w-full py-2 text-lg'}>
            Login
          </Button>
        </div>
      </form>
    </div>
  )
}
