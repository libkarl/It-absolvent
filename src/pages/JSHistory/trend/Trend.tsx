import React from 'react'
import Webdev from '../../../assets/web_dev.jpg'
import tw from 'tailwind-styled-components'

const Div_Trend = tw.div`
  container 
  my-24 
  px-6 
  mx-auto
`
const Section_Trend = tw.section`
  mb-32 
  text-gray-800
`

const Div_TrendContainer = tw.div`
  container 
  mx-auto 
  xl:px-32 
  text-center 
  lg:text-left 
`

const Div_TrendGrid = tw.div`
  grid 
  lg:grid-cols-2  
  items-center
`
const Div_TrendItems = tw.div`
  mb-12 
  lg:mb-0
`

const Div_TrendBlock = tw.div`
  block 
  rounded-lg 
  shadow-lg 
  px-6 
  py-12 
  lg:py-6 
  xl:py-12 
  md:px-12 
  lg:-mr-14
  bg-[hsla(0, 0%, 100%, 0.55)
  backdrop-blur-xl
`

const H3_Trend = tw.h3`
  text-3xl 
  font-bold 
  mb-3 
  text-blue-600
`
const P_TrendName = tw.p`
  font-bold 
  mb-4
`
const P_TrendText = tw.p`
  text-gra-500 
  mb-6
`
const Img_Trend = tw.img`
  w-full 
  rounded-lg
  shadow-lg
`

const Trend = () => {
  return (
    <>
      <Div_Trend id='trend'>
        <Section_Trend>
          <Div_TrendContainer>
            <Div_TrendGrid>
              <Div_TrendItems>
                <Div_TrendBlock>
                  <H3_Trend>Trends in JavaScript to Look for in 2022</H3_Trend>

                  <P_TrendName>Web Components</P_TrendName>
                  <P_TrendText>
                    Have you noticed that your favorite websites work that little bit better on your
                    mobile devices? “That’s because developers are flocking to web components.Web
                    components require less runtime and rely less on JavaScript, which allows them
                    to work across various libraries, making them a great flexible choice.
                  </P_TrendText>

                  <P_TrendName>GraphQL on the up</P_TrendName>
                  <P_TrendText>
                    This is one technology that is looking like the future of query languages. Zain
                    Abadawi, a blogger at Bestbritishessays and Revieweal, says “GraphQL is an
                    efficient method of data fetching that is giving REST a run for its money when
                    it comes to APIs, and has been pinned as the most intriguing language developers
                    at the State of JS.” If you’re looking to get ahead of the curve, take a look at
                    a GraphQL tutorial and see what you could use it for.
                  </P_TrendText>

                  <P_TrendName>Svelte on the scene</P_TrendName>
                  <P_TrendText>
                    Another shiny new piece of kit that’s getting developers excited is Svelte, a
                    component-based UI framework for JavaScript. Svelte generates code that can
                    manipulate the DOM, resulting in improved run-time performance, and the results
                    are very promising. Developers are saying it’s fast and feature-rich, with
                    seamless type value binding that is easy to implement.
                  </P_TrendText>
                </Div_TrendBlock>
              </Div_TrendItems>

              <div>
                <Img_Trend src={Webdev} alt='' />
              </div>
            </Div_TrendGrid>
          </Div_TrendContainer>
        </Section_Trend>
      </Div_Trend>
    </>
  )
}

export default Trend
