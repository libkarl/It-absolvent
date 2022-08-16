import { IoMdAddCircle } from 'react-icons/io'
import React from 'react'

type AddProps = {
  onClick(): void
}

const Add: React.FunctionComponent<AddProps> = ({ onClick }) => (
  <button
    type='button'
    className='flex justify-center items-center focus:ring-gray-400 focus:ring-offset-gray-200 text-white transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2  w-8 h-8 rounded-2xl bg-yellow-400 ml-1'
    onClick={() =>
      setTimeout(() => {
        onClick()
        let activeEl = document.activeElement
        if (activeEl === null || !(activeEl instanceof HTMLElement)) {
          return
        }
        activeEl.blur()
      }, 300)
    }
  >
    <IoMdAddCircle size={50} />
  </button>
)

export default Add
