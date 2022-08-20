import { AiOutlineEdit } from 'react-icons/ai'
import { activeDoc } from '../../helpers/functions'
import { delayDefinition } from '../../helpers/functions'
import React from 'react'
import tw from 'tailwind-styled-components'

const Button_Edit = tw.button`
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
  w-6 
  h-6 
  rounded-xl
`

type EditProps = {
  onClick(): void
}

export const Edit = (props: EditProps) => (
  <Button_Edit type='button' onClick={activeDoc(props)}>
    <AiOutlineEdit size={40} />
  </Button_Edit>
)
