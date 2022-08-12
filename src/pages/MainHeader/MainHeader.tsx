import { TypeWriter } from '../../components/Animations/Typewritter'
import { theme } from '../../helpers/theme'
import React from 'react'
import styled, { keyframes } from 'styled-components'
import tw from 'tailwind-styled-components'

const Div_LibraryHeader = tw.div`
  container 
  mx-auto 
  justify-center 
  flex 
  mt-10 
  gap-16  
`

const Div_Typewritter = tw.div`
  block 
  my-auto 
  w-6/12
`
const Div_TypewritterFlex = tw.div`
  mx-auto
  flex 
  justify-center
`

const H1_TypewritterAnimation = tw.h1`
  font-semibold 
  arial 
  text-2xl 
  mr-10  
  hidden 
  2xl:block 
`

const Anim1 = keyframes`
from {
  transform: rotateZ(120deg) rotateX(66deg) rotateZ(0);
}
to {
  transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);

}
`

const Anim2 = keyframes`
from {
  transform: rotateZ(240deg) rotateX(66deg) rotateZ(0);
}
to {
  transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
  
}
`

const Anim3 = keyframes`
from {
  transform: rotateZ(360deg) rotateX(66deg) rotateZ(0);
}
to {
  transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
  
}
`

const Div_Circle1 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-left: 13.32px solid;
  border-right: 5.12307px solid;
  border-top: 13.32px solid transparent;
  border-radius: 100%;
  animation: ${Anim1} 0.7s steps(44) infinite normal;
`
const Div_Circle2 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-left: 13.32px solid;
  border-right: 5.12307px solid;
  border-top: 13.32px solid transparent;
  border-radius: 100%;
  animation: ${Anim2} 0.7s steps(44) infinite normal;
`
const Div_Circle3 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-left: 13.32px solid;
  border-right: 5.12307px solid;
  border-top: 13.32px solid transparent;
  border-radius: 100%;
  animation: ${Anim3} 0.7s steps(44) infinite normal;
`

const Span_Circles = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  background: currentColor;
  width: 18.4%;
  height: 18.4%;
  border-radius: 50%;
`
const Div_ReactAnimation = styled.div`
  width: 222px;
  height: 222px;
  position: relative;
  perspective: 50000px;
  color: ${theme.colors.cyan};
  flex-none 
`

const Main_header = () => {
  return (
    <Div_LibraryHeader>
      <Div_ReactAnimation>
        <Div_Circle1 />
        <Div_Circle2 />
        <Div_Circle3 />
        <Span_Circles />
      </Div_ReactAnimation>

      <Div_Typewritter>
        <Div_TypewritterFlex>
          <H1_TypewritterAnimation>
            <TypeWriter value={'This is my IT absolvent homework library.'} />
          </H1_TypewritterAnimation>
        </Div_TypewritterFlex>
      </Div_Typewritter>
    </Div_LibraryHeader>
  )
}

export default Main_header
