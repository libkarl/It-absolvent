import { IconType } from 'react-icons'
import { activeDoc } from '../../helpers/functions'
import React from 'react'
import tw from 'tailwind-styled-components'

const Button = tw.button`
  flex 
  justify-center 
  items-center 
  focus:ring-gray-400 
  focus:ring-offset-gray-200 
  text-gray 
  transition 
  ease-in 
  duration-200 
  text-center 
  text-base 
  font-semibold 
  focus:outline-none 
  focus:ring-2 
  focus:ring-offset-2  
  w-8 
  h-8 
  rounded-xl 
`

type ButtonProps = {
  onClick(): void
  icon: IconType
  size: number
}

export const ToDoAppReduxButton = (props: ButtonProps) => (
  <Button type='button' onClick={activeDoc(props)}>
    <props.icon size={props.size} />
  </Button>
)
