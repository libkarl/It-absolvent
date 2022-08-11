import './animation.css'
import React from 'react'
import tw from 'tailwind-styled-components'

const Div_LibraryHeader = tw.div`
  container 
  mx-auto 
  justify-center 
  flex 
  mt-10 
  gap-16  
`
const Div_ReactAnimation = tw.div`
  circles 
  flex-none 
`
const Div_Typewritter = tw.div`
  block 
  my-auto 
`
const Div_TypewritterFlex = tw.div`
  flex 
  items-center 
`
const Div_TypewritterAnimation = tw.div`
  typewriter
`
const H1_TypewritterAnimation = tw.h1`
  font-semibold 
  arial 
  text-2xl 
  mr-10  
  hidden 
  2xl:block 
`

const Main_header = () => {
  return (
    <Div_LibraryHeader>
      <Div_ReactAnimation>
        <div></div>
        <div></div>
        <div></div>
        <span></span>
      </Div_ReactAnimation>

      <Div_Typewritter>
        <Div_TypewritterFlex>
          <Div_TypewritterAnimation>
            <H1_TypewritterAnimation>
              This is my IT absolvent homework library.
            </H1_TypewritterAnimation>
          </Div_TypewritterAnimation>
        </Div_TypewritterFlex>
      </Div_Typewritter>
    </Div_LibraryHeader>
  )
}

export default Main_header
