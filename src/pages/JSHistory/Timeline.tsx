import React from 'react'
import tw from 'tailwind-styled-components'

const H5_Timeline = tw.h5`
  text-center text-dark
  text-blue-600
  font-bold
  text-4xl
  sm:text-[42px]
  lg:text-[40px]
  xl:text-[42px]
  leading-snug
  mb-3'
`
const Div_Timeline_Core = tw.div`
  text-center 
  place-content-center 
  rounded-3xl  
  ml-20 
  mr-20
  mt-10
`

const Div_TimelineContainer = tw.div`
  container 
  mx-auto
`
const Div_TimelinePosition = tw.div`
  flex 
  flex-col 
  md:grid 
  grid-cols-9 
  mx-auto 
  
`

const Div_TimelineFlex = tw.div`
  flex 
  md:contents
`
const Div_TimelineItemCol_start1 = tw.div`
  col-start-1 
  col-end-5 
  p-4 
  rounded-xl 
  my-4 
  ml-auto 
  shadow-md 
  border-2 
  border-black
`

const Div_TimelineItemCol_start5 = tw.div`
  col-start-5 
  col-end-6 
  md:mx-auto 
  relative mr-10
`
const Div_TimelineItemCol_start6 = tw.div`
  col-start-6 
  col-end-10 
  p-4 
  rounded-xl 
  my-4 
  mr-auto 
  shadow-md 
  border-2 
  border-black
`
const Div_BlackLine = tw.div`
  h-full 
  w-1 
  bg-black 
  pointer-events-none
`
const Div_BlackDot = tw.div`
  w-6 
  h-6 
  absolute 
  top-1/2 
  -mt-3 
  rounded-full 
  bg-black 
  shadow
`
const H3_Timeline = tw.h3`
  font-semibold
  text-lg 
  mb-1
`
const P_Timeline = tw.p`
  leading-tight
  text-justify
`
const Div_BlackLine_Center = tw.div`
  h-full 
  w-6 
  flex 
  items-center 
  justify-center
`

export const Timeline = () => {
  return (
    <>
      <H5_Timeline id='timeline'>Java Script- Timeline</H5_Timeline>
      <Div_Timeline_Core>
        <Div_TimelineContainer>
          <Div_TimelinePosition>
            <Div_TimelineFlex>
              <Div_TimelineItemCol_start1>
                <H3_Timeline>1995 - Birth of JavaScript</H3_Timeline>
                <P_Timeline>
                  JavaScript was created by Brendan Eich, then working at Netscape. The original
                  name of JavaScript was Mocha, a name chosen by Marc Andreessen, founder of
                  Netscape.
                </P_Timeline>
              </Div_TimelineItemCol_start1>
              <Div_TimelineItemCol_start5>
                <Div_BlackLine_Center>
                  <Div_BlackLine></Div_BlackLine>
                </Div_BlackLine_Center>
                <Div_BlackDot></Div_BlackDot>
              </Div_TimelineItemCol_start5>
            </Div_TimelineFlex>

            <Div_TimelineFlex>
              <Div_TimelineItemCol_start5>
                <Div_BlackLine_Center>
                  <Div_BlackLine></Div_BlackLine>
                </Div_BlackLine_Center>
                <Div_BlackDot></Div_BlackDot>
              </Div_TimelineItemCol_start5>
              <Div_TimelineItemCol_start6>
                <H3_Timeline>1996 - Picking up in Popularity</H3_Timeline>
                <P_Timeline>
                  A Netscape Press Release puts the number of JavaScript pages at 300,000.
                </P_Timeline>
              </Div_TimelineItemCol_start6>
            </Div_TimelineFlex>

            <Div_TimelineFlex>
              <Div_TimelineItemCol_start1>
                <H3_Timeline>1997 - Making Standard Specifications </H3_Timeline>
                <P_Timeline>
                  JavaScript was taken to ECMA to carve out a standard specification, which other
                  browser vendors could then implement based on the work done at Netscape.
                  ECMAScript is the name of the official standard, with JavaScript being the most
                  well known of the implementations.
                </P_Timeline>
              </Div_TimelineItemCol_start1>
              <Div_TimelineItemCol_start5>
                <Div_BlackLine_Center>
                  <Div_BlackLine></Div_BlackLine>
                </Div_BlackLine_Center>
                <Div_BlackDot></Div_BlackDot>
              </Div_TimelineItemCol_start5>
            </Div_TimelineFlex>

            <Div_TimelineFlex>
              <Div_TimelineItemCol_start1>
                <H3_Timeline>1998 - Relase of ECMAScript 2</H3_Timeline>
                <P_Timeline>
                  ECMAScript 2 brought in the ISO/IEC 16262 international standards, the baseline
                  for modern day JavaScript.
                </P_Timeline>
              </Div_TimelineItemCol_start1>
              <Div_TimelineItemCol_start5>
                <Div_BlackLine_Center>
                  <Div_BlackLine></Div_BlackLine>
                </Div_BlackLine_Center>
                <Div_BlackDot></Div_BlackDot>
              </Div_TimelineItemCol_start5>
            </Div_TimelineFlex>

            <Div_TimelineFlex>
              <Div_TimelineItemCol_start5>
                <Div_BlackLine_Center>
                  <Div_BlackLine></Div_BlackLine>
                </Div_BlackLine_Center>
                <Div_BlackDot></Div_BlackDot>
              </Div_TimelineItemCol_start5>
              <Div_TimelineItemCol_start6>
                <H3_Timeline>1999 - ECMAScript 3</H3_Timeline>
                <P_Timeline>Release of ECMAScript 3 in December 1999.</P_Timeline>
              </Div_TimelineItemCol_start6>
            </Div_TimelineFlex>
          </Div_TimelinePosition>
        </Div_TimelineContainer>
        <Div_TimelineContainer>
          <Div_TimelinePosition>
            <Div_TimelineFlex>
              <Div_TimelineItemCol_start1>
                <H3_Timeline>2005 - ECMAScript for XML</H3_Timeline>
                <P_Timeline>
                  Brendan Eich and Mozilla rejoined Ecma International as a not-for-profit member
                  and work started on ECMAScript for XML (E4X), the ECMA-357 standard.
                </P_Timeline>
              </Div_TimelineItemCol_start1>
              <Div_TimelineItemCol_start5>
                <Div_BlackLine_Center>
                  <Div_BlackLine></Div_BlackLine>
                </Div_BlackLine_Center>
                <Div_BlackDot></Div_BlackDot>
              </Div_TimelineItemCol_start5>
            </Div_TimelineFlex>
            <Div_TimelineFlex>
              <Div_TimelineItemCol_start5>
                <Div_BlackLine_Center>
                  <Div_BlackLine></Div_BlackLine>
                </Div_BlackLine_Center>
                <Div_BlackDot></Div_BlackDot>
              </Div_TimelineItemCol_start5>
              <Div_TimelineItemCol_start6>
                <H3_Timeline>2009 - Node.js</H3_Timeline>
                <P_Timeline>
                  Node.js was introduced in 2009. It is an open-source, cross-platform JavaScript
                  run-time environment for executing JavaScript code server-side.
                </P_Timeline>
              </Div_TimelineItemCol_start6>
            </Div_TimelineFlex>
          </Div_TimelinePosition>
        </Div_TimelineContainer>
      </Div_Timeline_Core>
    </>
  )
}
