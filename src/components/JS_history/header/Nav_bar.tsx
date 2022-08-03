import JS_logo from '../../../assets/Js_logo.png'
import React from 'react'

const Nav_bar = () => {
  return (
    <div>
      <header
        x-data='
        {
          navbarOpen: false,
        }
      '
        className='absolute z-50 w-full left-0 top-0 '
        id='home'
      >
        <div className='container  rounded-lg mb-24 mx-auto'>
          <div className='flex -mx-4 items-center justify-between relative mt-10'>
            <div className='px-4 w-60 chat-notification-logo'>
              <a href='javascript:void(0)' className='w-full block py-5'>
                <img src={JS_logo} alt='logo' className='chat-notification-logo w-6 h-6' />
              </a>
            </div>
            <div className='flex px-4 justify-between items-center w-full'>
              <div>
                <button
                  className='
                  block
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  lg:hidden
                  focus:ring-2
                  ring-primary
                  px-3
                  py-[6px]
                  rounded-lg
                '
                >
                  <span className='relative w-[30px] h-[2px] my-[6px] block bg-body-color'></span>
                  <span className='relative w-[30px] h-[2px] my-[6px] block bg-body-color'></span>
                  <span className='relative w-[30px] h-[2px] my-[6px] block bg-body-color'></span>
                </button>
                <nav
                  className='
                  absolute
                  py-5
                  px-6
                  bg-white
                  shadow
                  rounded-lg
                  max-w-[250px]
                  w-full
                  lg:max-w-full lg:w-full
                  right-2
                  lg:block lg:static lg:shadow-none
                  transition-all
                  top-full
                  mt-5
                  ml-96
                '
                >
                  <ul className='blcok lg:flex'>
                    <li>
                      <a
                        href='#home'
                        className='
                        text-base
                        font-medium
                        text-dark
                        hover:text-primary
                        py-2
                        lg:inline-flex
                        flex
                        lg:ml-12
                        
                      '
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href='#timeline'
                        className='
                        text-base
                        font-medium
                        text-dark
                        hover:text-primary
                        py-2
                        lg:inline-flex
                        flex
                        lg:ml-12
                        
                      '
                      >
                        Timeline
                      </a>
                    </li>
                    <li>
                      <a
                        href='#possibilities'
                        className='
                        text-base
                        font-medium
                        text-dark
                        hover:text-primary
                        py-2
                        lg:inline-flex
                        flex
                        lg:ml-12
                        
                      '
                      >
                        Possibilities
                      </a>
                    </li>
                    <li>
                      <a
                        href='#trend'
                        className='
                        text-base
                        font-medium
                        text-dark
                        hover:text-primary
                        py-2
                        lg:inline-flex
                        flex
                        lg:ml-12
                        
                      '
                      >
                        Trend
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Nav_bar
