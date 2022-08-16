import React, { useEffect, useState } from 'react'

export const delayDefinition = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(() => {
    let storage

    try {
      storage = JSON.parse(localStorage.getItem(key) || String(defaultValue))
    } catch (error) {
      storage = defaultValue
    }

    return storage
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue] as const
}
