import { IoMdAddCircle } from 'react-icons/io'
import { delayDefinition } from '../../helpers/functions'
import React from 'react'
import tw from 'tailwind-styled-components'

const Button_Add = tw.button`
 flex 
 justify-center 
 items-center 
 focus:ring-gray-400 
 focus:ring-offset-gray-200 
 text-white transition ease-in 
 duration-200 
 text-center 
 text-base 
 font-semibold 
 focus:outline-none 
 focus:ring-2 
 focus:ring-offset-2  
 w-8 
 h-8 
 rounded-2xl 
 bg-yellow-400 
 ml-1
`

type AddProps = {
  onClick(): void
}

export const Add: React.FunctionComponent<AddProps> = ({ onClick }) => (
  <Button_Add
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
    <IoMdAddCircle size={50} />
  </Button_Add>
)
