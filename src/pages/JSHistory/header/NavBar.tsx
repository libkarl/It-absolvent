import {
  JsHistoryHome,
  JsHistoryPossibilities,
  JsHistoryTimeline,
  JsHistoryTrend,
} from '../../../helpers/urls'
import JSLogoHistory from '../../../assets/JSLogo.png'
import React from 'react'
import tw from 'tailwind-styled-components'

const Div_Header = tw.div`
  absolute 
  z-50
  w-full
  left-0 
  top-0 
`

const DivHeader = tw.div`
 ml-42
`

const A_header = tw.a`
  text-base
  font-medium
  text-dark
  hover:text-primary
  py-2
  lg:inline-flex
  flex
  lg:ml-12
`

const Nav = tw.nav`
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

const Button_header = tw.button`
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

const A_image = tw.a`
  scale-150
  ml-14
  w-full 
  block py-5
`

const Ul_header = tw.ul`
  ml-40
  gap-2
  block 
  lg:flex
`

const Span_header = tw.span`
  relative 
  w-[30px] 
  h-[2px] 
  my-[6px] 
  block 
  bg-body-color
`
const Div_header_container = tw.div`
  container
  rounded-lg
  mb-24 
  mx-auto
`

const Img_header = tw.img`
  height: 20rem
  scale-120
  
  
`

const Div_logo = tw.div`
  px-4 
  w-60 
  height: 9rem;
  width: 35vh;

`
const Div_navbar = tw.div`
  ml-16
  flex
  px-4
  justify-between
  items-center
  w-full
`

const Div_child_container = tw.div`  
  flex
  -mx-4
  items-center
  justify-between
  relative mt-10
`

const Nav_bar = () => {
  return (
    <div>
      <Div_Header
        x-data='
        {
          navbarOpen: false,
        }
      '
        id='home'
      >
        <Div_header_container>
          <Div_child_container>
            <Div_logo>
              <A_image>
                <Img_header src={JSLogoHistory} alt='logo' />
              </A_image>
            </Div_logo>
            <Div_navbar>
              <DivHeader>
                <Button_header>
                  <Span_header />
                  <Span_header />
                  <Span_header />
                </Button_header>
                <Nav>
                  <Ul_header>
                    <li>
                      <A_header href={JsHistoryHome}>Home</A_header>
                    </li>
                    <li>
                      <A_header href={JsHistoryTimeline}>Timeline</A_header>
                    </li>
                    <li>
                      <A_header href={JsHistoryPossibilities}>Possibilities</A_header>
                    </li>
                    <li>
                      <A_header href={JsHistoryTrend}>Trend</A_header>
                    </li>
                  </Ul_header>
                </Nav>
              </DivHeader>
            </Div_navbar>
          </Div_child_container>
        </Div_header_container>
      </Div_Header>
    </div>
  )
}

export default Nav_bar
