import { AiOutlineEdit } from 'react-icons/ai'
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

export const Edit: React.FunctionComponent<EditProps> = ({ onClick }) => (
  <Button_Edit
    type='button'
    onClick={async () => {
      await delayDefinition(300)
      onClick()
      let activeEl = document.activeElement
      if (activeEl === null || !(activeEl instanceof HTMLElement)) {
        return
      }
      activeEl.blur()
    }}
  >
    <AiOutlineEdit size={40} />
  </Button_Edit>
)
