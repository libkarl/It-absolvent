import { AiFillInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { theme } from '../../helpers/theme'
import React from 'react'
import styled from 'styled-components'

const Footer_PortfolioFooter = styled.footer`
  background: ${theme.colors.colorprimary};
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;
`

const A_PortfolioFooter = styled.a`
  color: ${theme.background.colorbg};
`
const A_PortfolioFooterLogo = styled(A_PortfolioFooter)`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  display: inline-block;
`
const UL_PortfolioFooterPermalinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto 3rem;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`
const Div_PortfolioFooterSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  &:hover {
    background: transparent;
    color: ${theme.background.colorbg};
    border-color: ${theme.background.colorbg};
  }
`
const A_PortfolioFooterSocials = styled.a`
  background: ${theme.background.colorbg};
  color: ${theme.colors.white};
  padding: 0.8rem;
  border-radius: 0.7rem;
  display: flex;
  border: 1px solid transparent;
  @media screen and (max-width: 600px) {
    margin-bottom: 2.6rem;
  }
`
const Div_PortfolioFooterCopyright = styled.div`
  margin-bottom: 4rem;
  color: ${theme.background.colorbg};
`

export const Footer = () => {
  return (
    <Footer_PortfolioFooter id='footer'>
      <A_PortfolioFooterLogo href='#'>DEV Portfolio</A_PortfolioFooterLogo>
      <UL_PortfolioFooterPermalinks>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </UL_PortfolioFooterPermalinks>
      <Div_PortfolioFooterSocials>
        <A_PortfolioFooterSocials href='https://facebook.com' target='_blank' rel='noreferrer'>
          <FaFacebookF />
        </A_PortfolioFooterSocials>
        <A_PortfolioFooterSocials href='https://instagram.com' target='_blank' rel='noreferrer'>
          <AiFillInstagram />
        </A_PortfolioFooterSocials>
        <A_PortfolioFooterSocials href='https://twitter.com' target='_blank' rel='noreferrer'>
          <BsTwitter />
        </A_PortfolioFooterSocials>
      </Div_PortfolioFooterSocials>
      <Div_PortfolioFooterCopyright>
        <small>&copy; DEV Portfolio. All rights reserved.</small>
      </Div_PortfolioFooterCopyright>
    </Footer_PortfolioFooter>
  )
}
