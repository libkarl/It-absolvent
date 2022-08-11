import { AiFillYoutube } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FacebookURL, Linked, Twitter, Youtube } from '../../../helpers/urls'
import JsLogo from '../../../assets/JScriptLogo.png'
import Point from '../../../assets/point.svg'
import React from 'react'
import styled, { keyframes } from 'styled-components'
import tw from 'tailwind-styled-components'

const Div_CoreFooter = tw.div`
  bg-white
  pt-20 
  lg:pt-[120px] 
  pb-10 
  lg:pb-20 
  relative z-10 
`

const Div_Footer_Container = tw.div`
  container
  mx-auto
`
const Div_Flex = tw.div`
  flex 
  flex-wrap 
  -mx-4
  ml-52
`
const Div_JSLogo = tw.div`
  w-full 
  sm:w-2/3 
  lg:w-3/12
  px-4
`
const Div_LogoSize = tw.div`
  w-full 
  mb-10
  ml-10
`

const A_LogoImage = tw.a`
  inline-block
  max-w-[160px]
  mb-6
`
const P_FooterContact = tw.p`
  flex 
  items-center 
  text-sm 
  text-dark 
  font-medium
`
const Span_PhoneIcon = tw.span`
  text-primary
  mr-3
`
const A_FooterSocialMedia = tw.a`
  w-8
  h-8
  flex
  items-center
  justify-center
  rounded-full
  border border-[#E5E5E5]
  text-dark
  hover:text-white hover:bg-primary hover:border-primary
  mr-3
  sm:mr-4
  lg:mr-3
  xl:mr-4
`
const Div_PhoneIcon = tw.div`
  text-primary
  mr-3
`
const Div_Folow = tw.div`
  ml-36 
  w-full 
  sm:w-1/2 
  lg:w-3/12
  px-4 margin 
  mt-10
`
const Div_FolowSize = tw.div`
  w-full
  mb-10
  ml-96
`
const P_FolowContent = tw.div`
  text-base
  text-body-color
`
const H4_Folow = tw.h4`
  text-dark
  text-lg
  font-semibold
  mb-9
`
const DIV_SocilFlex = tw.div`
  flex
  items-center
  mb-6
`
const SPAN_Folow = tw.span`
  flex
  items-center
  mb-6
`

const Img_gradient = styled.img`
  filter: opacity(0.05) drop-shadow(0 0 0 violet);
`

const Footer = () => {
  return (
    <Div_CoreFooter>
      <Div_Footer_Container>
        <Div_Flex>
          <Div_JSLogo>
            <Div_LogoSize>
              <A_LogoImage>
                <img src={JsLogo}></img>
              </A_LogoImage>

              <P_FooterContact>
                <Span_PhoneIcon>
                  <BsTelephone size={20} />
                </Span_PhoneIcon>
                <span>+420 519 220 422</span>
              </P_FooterContact>
            </Div_LogoSize>
          </Div_JSLogo>

          <Div_Folow>
            <Div_FolowSize>
              <H4_Folow>Follow Us On</H4_Folow>
              <DIV_SocilFlex>
                <A_FooterSocialMedia href={FacebookURL} target='_blank' rel='noreferrer'>
                  <FaFacebookF />
                </A_FooterSocialMedia>
                <A_FooterSocialMedia href={Twitter} target='_blank' rel='noreferrer'>
                  <FaLinkedin />
                </A_FooterSocialMedia>
                <A_FooterSocialMedia href={Youtube} target='_blank' rel='noreferrer'>
                  <BsTwitter />
                </A_FooterSocialMedia>
                <A_FooterSocialMedia href={Linked} target='_blank' rel='noreferrer'>
                  <AiFillYoutube />
                </A_FooterSocialMedia>
              </DIV_SocilFlex>
              <P_FolowContent>&copy; 2022 WebDevEducation</P_FolowContent>
            </Div_FolowSize>
          </Div_Folow>
        </Div_Flex>
      </Div_Footer_Container>
      <div>
        <SPAN_Folow>
          <Img_gradient src={Point} alt='uideck' />
        </SPAN_Folow>
        <SPAN_Folow></SPAN_Folow>
      </div>
    </Div_CoreFooter>
  )
}

export default Footer
