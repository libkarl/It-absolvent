import { Link } from 'react-router-dom'
import { urls } from '../../helpers/urls'
import Laptop from '../../assets/laptop.jpg'
import React from 'react'
import Startup from '../../assets/startup.jpg'
import Tilt from 'react-parallax-tilt'
import Workspace from '../../assets/workspace.jpg'
import Worktable from '../../assets/worktable.jpg'
import tw from 'tailwind-styled-components'

const Section_TaskLibrary = tw.section`
  container 
  w-screen 
  mt-10 
`

const Div_TaskLibrary = tw.div`
  bg-white 
  w-screen 
  flex 
  flex-wrap 
  content-center 
  justify-center 
  mx-auto 
  px-2 
  py-5 
  md:px-6 
  gap-6 
`
const Article_TaskLibrary = tw.article`
  bg-white 
  overflow-hidden 
  rounded-lg 
  shadow-lg 
  w-72 
  m-4
`
const Img_TaskLibrary = tw.img`
  h-48 
  w-full
`

const Div_TaskName = tw.div`
  no-underline 
  hover:underline 
  text-black
`
const P_CardContent = tw.p`
  leading-tight 
  pb-2 
  md:pb-4 
  text-center
`
const Div_TaskParts = tw.div`
  py-4 flex 
  justify-around 
  flex-wrap
`
const Span_TaskPart = tw.span`
  inline-block
  bg-gray-300 
  rounded-full 
  px-3 
  py-1 
  text-sm 
  font-semibold 
  text-gray-700 
  mb-1
`
const Div_Card = tw.div`
  rounded-lg 
  z-50 
  bg-white 
  relative 
  -mt-2 
  p-4
`
const Header_Card = tw.header`
  leading-tight 
  mb-2
`
const H1_Card = tw.h1`
  text-lg 
  font-bold
`

const Task_library = () => {
  return (
    <Section_TaskLibrary>
      <Div_TaskLibrary>
        <Link to={urls.jsHistoryPage}>
          <Tilt>
            <Article_TaskLibrary>
              <Img_TaskLibrary alt='Placeholder' src={Workspace}></Img_TaskLibrary>
              <Div_Card>
                <Header_Card>
                  <H1_Card>
                    <Div_TaskName>Task_01-03</Div_TaskName>
                  </H1_Card>
                </Header_Card>

                <P_CardContent>
                  This card contains the implementation of the first three tasks with simple react
                  application to present JavaScript history, current trends are also included along
                  with the possibilities of using this language.
                </P_CardContent>
                <Div_TaskParts>
                  <Span_TaskPart>#create react app</Span_TaskPart>
                  <Span_TaskPart>#CSS + HTML</Span_TaskPart>
                  <Span_TaskPart>#React router</Span_TaskPart>
                  <Span_TaskPart>#Styled components</Span_TaskPart>
                </Div_TaskParts>
              </Div_Card>
            </Article_TaskLibrary>
          </Tilt>
        </Link>

        <Link to=''>
          <Tilt>
            <Article_TaskLibrary>
              <Img_TaskLibrary alt='Placeholder' src={Laptop}></Img_TaskLibrary>
              <Div_Card>
                <Header_Card>
                  <H1_Card>
                    <Div_TaskName>Task_04-empty</Div_TaskName>
                  </H1_Card>
                </Header_Card>

                <P_CardContent>
                  Hablamos sobre las dificultades en el gremio y discutimos sobre nuestros derechos
                  en un mundo donde somos la minoria. Hablamos sobre las dificultades en el gremio y
                  en un mundo donde somos la minoria. Hablamos sobre las dificultades en el gremio
                  la minoria.
                </P_CardContent>
                <Div_TaskParts>
                  <Span_TaskPart>#bestfriend</Span_TaskPart>
                  <Span_TaskPart>#buddy</Span_TaskPart>
                  <Span_TaskPart>#amigo</Span_TaskPart>
                  <Span_TaskPart>#family</Span_TaskPart>
                </Div_TaskParts>
              </Div_Card>
            </Article_TaskLibrary>
          </Tilt>
        </Link>

        <Link to=''>
          <Tilt>
            <Article_TaskLibrary>
              <Img_TaskLibrary alt='Placeholder' src={Worktable}></Img_TaskLibrary>
              <Div_Card>
                <Header_Card>
                  <H1_Card>
                    <Div_TaskName>Task_5-empty</Div_TaskName>
                  </H1_Card>
                </Header_Card>

                <P_CardContent>
                  Hablamos sobre las dificultades en el gremio y discutimos sobre nuestros derechos
                  en un mundo donde somos la minoria.Hablamos sobre las dificultades en el gremio y
                  en un mundo donde somos la minoria.
                </P_CardContent>
                <Div_TaskParts>
                  <Span_TaskPart>#bestfriend</Span_TaskPart>
                  <Span_TaskPart>#buddy</Span_TaskPart>
                  <Span_TaskPart>#amigo</Span_TaskPart>
                  <Span_TaskPart>#family</Span_TaskPart>
                </Div_TaskParts>
              </Div_Card>
            </Article_TaskLibrary>
          </Tilt>
        </Link>

        <Link to=''>
          <Tilt>
            <Article_TaskLibrary>
              <Img_TaskLibrary alt='Placeholder' src={Startup}></Img_TaskLibrary>

              <Div_Card>
                <Header_Card>
                  <H1_Card>
                    <Div_TaskName>Task_06-empty</Div_TaskName>
                  </H1_Card>
                </Header_Card>

                <P_CardContent>
                  Hablamos sobre las dificultades en el gremio y discutimos sobre nuestros derechos
                  en un mundo donde somos la minoria.Hablamos sobre las dificultades en el gremio y
                  en un mundo donde somos la minoria.
                </P_CardContent>
                <Div_TaskParts>
                  <Span_TaskPart>#bestfriend</Span_TaskPart>
                  <Span_TaskPart>#buddy</Span_TaskPart>
                  <Span_TaskPart>#amigo</Span_TaskPart>
                  <Span_TaskPart>#family</Span_TaskPart>
                </Div_TaskParts>
              </Div_Card>
            </Article_TaskLibrary>
          </Tilt>
        </Link>
      </Div_TaskLibrary>
    </Section_TaskLibrary>
  )
}

export default Task_library
