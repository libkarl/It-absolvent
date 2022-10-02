import { AiFillFacebook } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { theme } from '../../helpers/theme'
import ME from '../../assets/me.png'
import React from 'react'
import styled from 'styled-components'

const Div_HeaderSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 3rem;
  &:after {
    content: '';
    width: 2px;
    height: 3rem;
    background: ${theme.colors.colorprimary};
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`

const Div_CTA = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`

const Header_Portfolioheader = styled.header`
  height: 80vh;
  padding-top: 7rem;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    height: 68vh;
  }
  @media screen and (max-width: 600px) {
    header {
      height: 100vh;
    }
  }
`

const Div_Me = styled.div`
  background: linear-gradient(${theme.colors.colorprimary}, transparent);
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: calc(50% - 11rem);
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding: 5rem 1.5rem 1.5rem;
  margin-top: 4rem;
`

const Div_ContainerHeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
  width: ${theme.sizes.containerLG}%;
  margin: 0 auto;
`

const A_Scrolldown = styled.a`
  position: absolute;
  right: -2.3rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0.9rem;
  color: ${theme.colors.colorprimary};
  @media screen and (max-width: 600px) {
    display: none;
  }
`

export const A_BasicBtn = styled.a`
  width: max-content;
  display: inline-block;
  color: ${theme.colors.colorprimary};
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid ${theme.colors.colorprimary};
  transition: all 400ms ease;
  &:hover {
    background: ${theme.colors.white};
    color: ${theme.background.colorbg};
    border-color: transparent;
  }
`

export const A_PrimaryBtn = styled(A_BasicBtn)`
  background: ${theme.colors.colorprimary};
  color: ${theme.background.colorbg};
`

export const Header = () => {
  return (
    <Header_Portfolioheader>
      <Div_ContainerHeaderContainer>
        <h5>Hello I am</h5>
        <h1>Karel Kopřiva</h1>
        <h5 className='text-light'>Junior Software Developer</h5>
        <Div_CTA>
          <A_BasicBtn
            href={require('../../assets/cv.pdf')}
            download='cv'
            target='_blank'
            rel='noreferrer'
          >
            Download CV
          </A_BasicBtn>
          <A_PrimaryBtn href='#contact'>Contact me</A_PrimaryBtn>
        </Div_CTA>
        <Div_HeaderSocials>
          <a href='https://www.facebook.com/karel.kopriva.56' target='blank'>
            <AiFillFacebook size={20}></AiFillFacebook>
          </a>
          <a href='http://linkedin.com/' target='blank'>
            <BsLinkedin></BsLinkedin>
          </a>
          <a href='https://github.com/libkarl/' target='blank'>
            <BsGithub></BsGithub>
          </a>
        </Div_HeaderSocials>
        <Div_Me>
          <img src={ME} alt='developer' />
        </Div_Me>

        <A_Scrolldown href='#contact'>Scroll Down</A_Scrolldown>
      </Div_ContainerHeaderContainer>
    </Header_Portfolioheader>
  )
}
