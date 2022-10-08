import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookBookmark } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import { TiContacts } from 'react-icons/ti'
import { theme } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'

const Nav_PortfolioContainer = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
`

const A_Navbar = styled.a`
  background: transparent;
  padding: 1.2rem;
  border-radius: 50%;
  display: flex;
  color: ${theme.colors.white};
  opacity: 0.6;
  font-size: 1.1rem;
  &:hover {
    background: ${theme.background.colorbg};
  }
`

export const Nav = () => {
  return (
    <Nav_PortfolioContainer>
      <A_Navbar href={urls.portfolioNav.home}>
        <AiOutlineHome />
      </A_Navbar>
      <A_Navbar href={urls.portfolioNav.about}>
        <AiOutlineUser />
      </A_Navbar>
      <A_Navbar href={urls.portfolioNav.experience}>
        <BiBookBookmark />
      </A_Navbar>
      <A_Navbar href={urls.portfolioNav.portfolio}>
        <FaGithub />
      </A_Navbar>
      <A_Navbar href={urls.portfolioNav.footer}>
        <TiContacts />
      </A_Navbar>
    </Nav_PortfolioContainer>
  )
}
