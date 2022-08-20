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
export const saveItems = async (newItems: Array<[boolean, string, string]>) => {
  await delayDefinition(20)
  localStorage.setItem('items', JSON.stringify(newItems))
}

export const getLocalStorage = (): [boolean, string, string][] => {
  localStorage.setItem('inicialization', JSON.stringify('inicializace localStorage'))
  if (localStorage.length === 1) {
    localStorage.setItem('items', JSON.stringify([[true, 'Welcome in my to do App!', '1']]))
    var parse = JSON.parse(localStorage.getItem('items') as string)
    return Array.from(parse)
  } else {
    var parse = JSON.parse(localStorage.getItem('items') as string)
    return Array.from(parse)
  }
}
