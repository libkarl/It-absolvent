import JS_logo from '../../../assets/Js_logo.png'
import React from 'react'
import tw from 'tailwind-styled-components'

const JS_header = tw.div`
  absolute 
  z-50
  w-full
  left-0 
  top-0 
`

const JS_header_tag_a = tw.a`
  text-base
  font-medium
  text-dark
  hover:text-primary
  py-2
  lg:inline-flex
  flex
  lg:ml-12
`

const JS_nav = tw.nav`
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
`

const JS_header_button = tw.button`
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
`

const JS_image_tag_a = tw.a`
  w-full 
  block py-5
`

const JS_header_ul = tw.ul`
  block 
  lg:flex
`

const JS_header_span = tw.span`
  relative 
  w-[30px] 
  h-[2px] 
  my-[6px] 
  block 
  bg-body-color
`
const JS_header_container = tw.div`
  container
  rounded-lg
  mb-24 
  mx-auto
`

const JS_header_img = tw.img`
  chat-notification-logo
  w-6 h-8 
  scale-85
`

const JS_div_logo = tw.div`
  px-4 
  w-60 
  chat-notification-logo
`
const JS_div_navbar = tw.div`
  ml-16
  flex
  px-4
  justify-between
  items-center
  w-full
`

const JS_header_child_container = tw.div`
  flex
  -mx-4
  items-center
  justify-between
  relative mt-10
`

const Nav_bar = () => {
  return (
    <div>
      <JS_header
        x-data='
        {
          navbarOpen: false,
        }
      '
        id='home'
      >
        <JS_header_container>
          <JS_header_child_container>
            <JS_div_logo>
              <JS_image_tag_a href='javascript:void(0)'>
                <JS_header_img src={JS_logo} alt='logo' />
              </JS_image_tag_a>
            </JS_div_logo>
            <JS_div_navbar>
              <div>
                <JS_header_button>
                  <JS_header_span />
                  <JS_header_span />
                  <JS_header_span />
                </JS_header_button>
                <JS_nav>
                  <JS_header_ul>
                    <li>
                      <JS_header_tag_a href='#home'>Home</JS_header_tag_a>
                    </li>
                    <li>
                      <JS_header_tag_a href='#timeline'>Timeline</JS_header_tag_a>
                    </li>
                    <li>
                      <JS_header_tag_a href='#possibilities'>Possibilities</JS_header_tag_a>
                    </li>
                    <li>
                      <JS_header_tag_a href='#trend'>Trend</JS_header_tag_a>
                    </li>
                  </JS_header_ul>
                </JS_nav>
              </div>
            </JS_div_navbar>
          </JS_header_child_container>
        </JS_header_container>
      </JS_header>
    </div>
  )
}

export default Nav_bar
