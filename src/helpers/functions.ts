import React, { useCallback, useEffect, useState } from 'react'

type ActiveDocProps = {
  onClick(): void
}

export const delayDefinition = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
// The activeElement returns the deepest element in the document through which or to which key events are being routed.
// When i got access to the activeElement i can use blur for him.
export const activeDoc = (props: ActiveDocProps) => async () => {
  await delayDefinition(300)
  props.onClick()
  let activeEl = document.activeElement
  if (activeEl === null || !(activeEl instanceof HTMLElement)) {
    return
  }
  activeEl.blur()
}

export function useLocalStorage<T>(key: string, initialValue?: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      throw new Error('Get item error')
    }
  })

  const setStoredValue = useCallback(
    (val: React.SetStateAction<T>) => {
      try {
        const valueToStore = val instanceof Function ? val(value) : val
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      } catch (error) {
        throw new Error('Set item error')
      }
    },
    [value, key]
  )

  useEffect(() => {
    setStoredValue(value)
  }, [value, setStoredValue])

  return [value, setValue] as const
}

export const shuffleArray = <T>(array: T[]) => {
  const mix = array.sort(() => Math.random() - 0.5)
  return mix
}

export const setQueryByName = (name: string) => {
  return `${process.env.REACT_APP_BACKEND_URL}?search=${name}`
}
