import { v1 } from 'uuid'
import React, { useEffect, useState } from 'react'

type ActiveDocProps = {
  onClick(): void
}

export const delayDefinition = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
export const activeDoc = (props: ActiveDocProps) => async () => {
  await delayDefinition(300)
  props.onClick()
  let activeEl = document.activeElement
  if (activeEl === null || !(activeEl instanceof HTMLElement)) {
    return
  }
  activeEl.blur()
}

export const useLocalStorage = () => {
  const [items, setItems] = useState((): [boolean, string, string][] => {
    let currentValue: [boolean, string, string][] = []
    try {
      currentValue = Array.from(JSON.parse(localStorage.getItem('items') as string))
      return currentValue
    } catch (error) {
      console.log(error)
      currentValue[0] = [true, 'Welcome in my to do App!', v1()]
      return currentValue
    }
  })

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  return [items, setItems] as const
}
