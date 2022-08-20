import { AiOutlineDelete } from 'react-icons/ai'
import { activeDoc } from '../../helpers/functions'
import { delayDefinition } from '../../helpers/functions'
import React from 'react'
import tw from 'tailwind-styled-components'

const Button_Delete = tw.button`
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

type DeleteProps = {
  onClick(): void
}

export const Delete = (props: DeleteProps) => (
  <Button_Delete type='button' onClick={activeDoc(props)}>
    <AiOutlineDelete size={40} />
  </Button_Delete>
)
