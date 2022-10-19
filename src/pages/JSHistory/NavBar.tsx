import * as React from 'react'
import { GrMenu } from 'react-icons/gr'
import { List, ListItem } from '@mui/material'
import { urls } from '../../helpers/urls'
import Button from '@mui/material/Button'
import JSLogoHistory from '../../assets/jSLogo.png'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import tw from 'tailwind-styled-components'

const PopUpMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <GrMenu size={25} />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <A_header href={'#' + urls.jsHistoryHome}>Home</A_header>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <A_header href={'#' + urls.jsHistoryTimeline}>Timeline</A_header>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <A_header href={'#' + urls.jsHistoryPossibilities}>Possibilities</A_header>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <A_header href={'#' + urls.jsHistoryTrend}>Trend</A_header>
        </MenuItem>
      </Menu>
    </div>
  )
}

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
  hidden
  lg: visible
`

const Button_header = tw.button`
  block
  absolute
  right-4
  top-1/2
  mr-10
  -translate-y-1/2
  lg:hidden
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
  gap-2
  block 
  lg:flex
`

const Div_header = tw.div`
  relative 
  w-[30px] 
  h-[2px] 
  my-[6px] 
  block 
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
const Div_PopUpMenuPosition = tw.div`
  lg:hidden
  mr-20
`
export const Nav_bar = () => {
  return (
    <div>
      <Div_Header
        x-data='
        {
          navbarOpen: false,
        }
      '
        id={urls.jsHistoryHome}
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
                <Nav>
                  <Ul_header>
                    <li>
                      <A_header href={'#' + urls.jsHistoryHome}>Home</A_header>
                    </li>
                    <li>
                      <A_header href={'#' + urls.jsHistoryTimeline}>Timeline</A_header>
                    </li>
                    <li>
                      <A_header href={'#' + urls.jsHistoryPossibilities}>Possibilities</A_header>
                    </li>
                    <li>
                      <A_header href={'#' + urls.jsHistoryTrend}>Trend</A_header>
                    </li>
                  </Ul_header>
                </Nav>
              </DivHeader>
            </Div_navbar>
            <Div_PopUpMenuPosition>
              <PopUpMenu />
            </Div_PopUpMenuPosition>
          </Div_child_container>
        </Div_header_container>
      </Div_Header>
    </div>
  )
}
