import { HomeIcon } from './SvgHome'
import Angular from '../../../assets/angular.png'
import JSLogo from '../../../assets/JScriptLogo.png'
import Node from '../../../assets/node.png'
import React from 'react'
import ReactIcon from '../../../assets/react.png'
import Vue from '../../../assets/vue.png'
import tw from 'tailwind-styled-components'

const Div_Home = tw.div`
  relative 
  pt-[120px] 
  lg:pt-[150px] 
  pb-[110px] 
  bg-white 
  mt-36 
  mx-auto
`
const Div_HomeContainer = tw.div`
  container
  mx-auto
`
const Div_HomeFlex = tw.div`
  flex 
  flex-wrap 
  -mx-4
`
const Div_HomeSize = tw.div`
  w-full 
  lg:w-5/12 
  px-4
`
const H1_Home = tw.h1`
  text-dark
  font-bold
  text-4xl
  text-blue-600
  sm:text-[42px]
  lg:text-[40px]  
  xl:text-[42px]
  leading-snug
  mb-3
`
const P_Home = tw.p`
  mb-8 
  text-body-color
  max-w-3xl 
  text-lg
`

const Div_Technology = tw.div`
  pt-16 
`

const H6_Technology = tw.h6`
  text-dark
  font-bold
  text-3xl
  leading-snug
  mb-3
`

const Span_Technology = tw.span`
  w-8 
  h-[1px] 
  bg-body-color 
  inline-block
  ml-2 
`
const Div_FlexTechnology_Icons = tw.div`
  flex 
  items-center 
  gap-5
`
const Div_Technology_Icons_Size = tw.div`
  w-full 
  py-3 
  mr-4
`
const Div_LogoSize = tw.div`
  w-full 
  lg:w-6/12 
  px-4
`

const Div_LogoPosition = tw.div`
  lg:text-right 
  lg:ml-auto
`
const Div_HomeIcon = tw.div`
  relative 
  inline-block 
  z-10 
  pt-11 
  lg:pt-0
`
const Img_Home_JsLogo = tw.img`
  max-w-full 
  lg:ml-auto
`
const Span_Home_JsLogo = tw.span`
  absolute 
  -left-8 
  -bottom-8 
  z-[-1]
`

const Home = () => {
  return (
    <Div_Home>
      <Div_HomeContainer>
        <Div_HomeFlex>
          <Div_HomeSize>
            <H1_Home>
              WebDeveloper <br />
              Education Website <br />
            </H1_Home>
            <P_Home>
              JavaScript was created at Netscape Communications by Brendan Eich in 1995. Netscape
              and Eich designed JavaScript as a scripting language for use with the company is
              flagship web browser, Netscape Navigator. Initially known as LiveScript, Netscape
              changed the name to JavaScript so they could position it as a companion for the Java
              language, a product of their partner, Sun Microsystems. Apart from some superficial
              syntactic similarities, though, JavaScript is in no way related to the Java
              programming language.
            </P_Home>

            <Div_Technology>
              <H6_Technology>
                JavaScript based Technologies
                <Span_Technology></Span_Technology>
              </H6_Technology>
              <Div_FlexTechnology_Icons>
                <Div_Technology_Icons_Size>
                  <img src={ReactIcon} alt='ayroui' />
                </Div_Technology_Icons_Size>
                <Div_Technology_Icons_Size>
                  <img src={Angular} alt='graygrids' />
                </Div_Technology_Icons_Size>
                <Div_Technology_Icons_Size>
                  <img src={Vue} alt='uideck' />
                </Div_Technology_Icons_Size>
                <Div_Technology_Icons_Size>
                  <img src={Node} alt='uideck' />
                </Div_Technology_Icons_Size>
              </Div_FlexTechnology_Icons>
            </Div_Technology>
          </Div_HomeSize>
          <Div_LogoSize>
            <Div_LogoPosition>
              <Div_HomeIcon>
                <Img_Home_JsLogo src={JSLogo} alt='hero' />
                <Span_Home_JsLogo>
                  <HomeIcon />
                </Span_Home_JsLogo>
              </Div_HomeIcon>
            </Div_LogoPosition>
          </Div_LogoSize>
        </Div_HomeFlex>
      </Div_HomeContainer>
    </Div_Home>
  )
}

export default Home
