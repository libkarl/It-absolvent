import './animation.css'
import React from 'react'

const Main_header = () => {
  return (
    <div className='container mx-auto justify-center flex mt-10 gap-16 '>
      <div className='circles flex-none'>
        <div></div>
        <div></div>
        <div></div>
        <span></span>
      </div>

      <div className='block my-auto'>
        <div className=' flex items-center '>
          <div className='typewriter'>
            <h1 className='font-semibold arial text-2xl mr-10  hidden 2xl:block '>
              This is my IT absolvent homework library.
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main_header
