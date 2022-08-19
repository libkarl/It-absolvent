import { AiOutlineDelete } from 'react-icons/ai'
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

export const Delete: React.FunctionComponent<DeleteProps> = ({ onClick }) => (
  <Button_Delete
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
    <AiOutlineDelete size={40} />
  </Button_Delete>
)
