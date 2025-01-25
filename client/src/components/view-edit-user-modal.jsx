import React, { useCallback, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Input from './input'
import { useForm } from 'react-hook-form'
import Button from './button'
import DropDown from './drop-down'
import axiosInstance from '../axios'

export default function ViewEditUserModal({
  userId,
  open,
  onClose,
  editHandler,
}) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isLoading, isSubmitting },
    setValue,
  } = useForm()
  const [fetching, setFetching] = useState(false)
  const loading = isLoading || isSubmitting || fetching

  const fetchUserById = useCallback(async () => {
    console.log('🚀 ~ fetchUserById ~ userId:', userId)
    if (!userId) return
    try {
      setFetching(true)
      const res = await axiosInstance.get(
        `http://localhost:4000/api/user/${userId}`,
      )
      if (res.status === 200) {
        console.log('🚀 ~ fetchUserById ~ res:', res.data)
        setValue('firstName', res.data?.firstName)
        setValue('email', res.data?.email)
        setValue('phone', res.data?.phone)
        setValue('status', res.data?.status ? 'Active' : 'Inactive')
      }
    } catch (error) {
      console.error('error fetching user by id')
    } finally {
      setFetching(false)
    }
  }, [userId])

  useEffect(() => {
    fetchUserById()
    return () => {
      reset()
    }
  }, [fetchUserById])

  const onSubmit = async (data) => {
    delete data?.business_income
    delete data?.business_promoters
    delete data?.referred_by
    delete data?.receive_payment

    if (!userId) {
      console.log('missing user Id')
      return
    }

    console.log('🚀 ~ onSubmit ~ data:', data)
    console.log(data.status === 'Active')
    const res = await editHandler(userId, {
      ...data,
      status: data.status === 'Active' ? true : false,
    })
    console.log('🚀 ~ onSubmit ~ res:', res)
    if (res) {
      reset()
      onClose()
    }
  }
  return (
    <>
      <div
        className={twMerge(
          'fixed center-fix flex max-md:overflow-y-scroll flex-col z-20 max-h-[90vh] min-h-[500px] w-[90%] md:w-[70%] bg-white rounded-xl',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="bg-primary sticky top-0 text-primary-foreground py-4 text-center rounded-t-xl">
          <h1 className=" font-bold text-2xl">View & Edit List</h1>
        </div>
        <form
          className="flex pb-4 flex-1 flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex-1 grid gap-6 md:grid-cols-2 mx-7 md:mx-[3rem] my-[2rem]">
            <div className="flex flex-col gap-y-1">
              <label className="text-[16px]">First Name</label>
              <Input
                disabled={loading}
                name="firstName"
                {...register('firstName', {
                  required: 'First Name is required',
                })}
                className={'border border-[#0C0B0B]'}
              />
              {errors.firstName && (
                <p className="text-rose-600 tracking-wide text-sm font-semibold">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-[16px]">Email</label>
              <Input
                disabled={loading}
                name="email"
                {...register('email', {
                  required: 'Email is required',
                })}
                className={'border border-[#0C0B0B]'}
              />
              {errors.email && (
                <p className="text-rose-600 tracking-wide text-sm font-semibold">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-[16px]">Phone</label>
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
                className={'border border-[#0C0B0B]'}
              />
              {errors.phone && (
                <p className="text-rose-600 tracking-wide text-sm font-semibold">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-[16px]">Referred By</label>
              <Input
                disabled={loading}
                name="referred_by"
                {...register('referred_by')}
                className={'border border-[#0C0B0B]'}
              />
              {errors.referred_by && (
                <p className="text-rose-600 tracking-wide text-sm font-semibold">
                  {errors.referred_by.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-[16px]">Business Promoters</label>
              <Input
                disabled={loading}
                name="business_promoters"
                {...register('business_promoters')}
                className={'border border-[#0C0B0B]'}
              />
              {errors.business_promoters && (
                <p className="text-rose-600 tracking-wide text-sm font-semibold">
                  {errors.business_promoters.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-[16px]">Business Income</label>
              <Input
                disabled={loading}
                name="business_income"
                {...register('business_income')}
                className={'border border-[#0C0B0B]'}
              />
              {errors.business_income && (
                <p className="text-rose-600 tracking-wide text-sm font-semibold">
                  {errors.business_income.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-[16px]">Status</label>
              <DropDown
                disabled={loading}
                name="status"
                {...register('status', {
                  required: 'Status is required',
                })}
                items={['Active', 'Inactive']}
                className={'border border-[#0C0B0B]'}
              />
              {errors.status && (
                <p className="text-rose-600 tracking-wide text-sm font-semibold">
                  {errors.status.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-[16px]">Receive Payment</label>
              <DropDown
                disabled={loading}
                name="receive_payment"
                {...register('receive_payment')}
                items={['Accept', 'Decline']}
                className={'border border-[#0C0B0B]'}
              />
              {errors.receive_payment && (
                <p className="text-rose-600 tracking-wide text-sm font-semibold">
                  {errors.receive_payment.message}
                </p>
              )}
              <p className="text-sm font-semibold">
                To resolve a payment issue (472, 590 and 1180)
              </p>
            </div>
          </div>
          <Button
            disabled={loading}
            className={
              'mt-auto bg-primary rounded-lg text-lg text-primary-foreground py-3 mx-7 md:mx-auto'
            }
          >
            Save Changes
          </Button>
        </form>
      </div>
      <div
        onClick={onClose}
        className={twMerge(
          'fixed inset-0 z-10 bg-neutral-900/80',
          open ? 'block' : 'hidden',
        )}
      />
    </>
  )
}
