import { AiFillInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { theme } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
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
  ${theme.breakpoints.sm} {
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
  ${theme.breakpoints.sm} {
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
      <A_PortfolioFooterLogo href={urls.portfolioNav.home}>DEV Portfolio</A_PortfolioFooterLogo>
      <UL_PortfolioFooterPermalinks>
        <li>
          <a href={urls.portfolioNav.home}>Home</a>
        </li>
        <li>
          <a href={urls.portfolioNav.about}>About</a>
        </li>
        <li>
          <a href={urls.portfolioNav.experience}>Experience</a>
        </li>
        <li>
          <a href={urls.portfolioNav.portfolio}>Portfolio</a>
        </li>
        <li>
          <a href={urls.portfolioNav.contact}>Contact</a>
        </li>
      </UL_PortfolioFooterPermalinks>
      <Div_PortfolioFooterSocials>
        <A_PortfolioFooterSocials
          href={urls.portfolioSocials.facebook}
          target='_blank'
          rel='noreferrer'
        >
          <FaFacebookF />
        </A_PortfolioFooterSocials>
        <A_PortfolioFooterSocials
          href={urls.portfolioSocials.instagram}
          target='_blank'
          rel='noreferrer'
        >
          <AiFillInstagram />
        </A_PortfolioFooterSocials>
        <A_PortfolioFooterSocials
          href={urls.portfolioSocials.twitter}
          target='_blank'
          rel='noreferrer'
        >
          <BsTwitter />
        </A_PortfolioFooterSocials>
      </Div_PortfolioFooterSocials>
      <Div_PortfolioFooterCopyright>
        <small>&copy; DEV Portfolio. All rights reserved.</small>
      </Div_PortfolioFooterCopyright>
    </Footer_PortfolioFooter>
  )
}
