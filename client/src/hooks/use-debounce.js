import React, { useEffect } from 'react'

export default function useDebounce(callback, delay = 1000, dependencies = []) {
  useEffect(() => {
    const handler = setTimeout(() => {
      callback()
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [...dependencies])
}
