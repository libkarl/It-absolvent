import { Link } from 'react-router-dom'
import { urls } from '../../helpers/urls'
import React from 'react'
import Tilt from 'react-parallax-tilt'
import laptop from '../../assets/laptop.jpg'
import memorygame from '../../assets/memory-game.jpg'
import mortgage from '../../assets/mortgage.jpg'
import startup from '../../assets/startup.jpg'
import todoredux from '../../assets/todoRedux.jpg'
import tw from 'tailwind-styled-components'
import workspace from '../../assets/workspace.jpg'
import worktable from '../../assets/worktable.jpg'

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
const H1_TaskTopic = tw.h1`
  text-left 
  text-md
  font-bold
`

export const TaskLibrary = () => {
  return (
    <Section_TaskLibrary>
      <Div_TaskLibrary>
        <Link to={urls.jsHistoryPage}>
          <Tilt>
            <Article_TaskLibrary>
              <Img_TaskLibrary src={workspace}></Img_TaskLibrary>
              <Div_Card>
                <Header_Card>
                  <H1_Card>
                    <Div_TaskName>JavaScript History</Div_TaskName>
                  </H1_Card>
                </Header_Card>

                <P_CardContent>
                  This card contains the implementation of the first three tasks with simple react
                  application to present JavaScript history, current trends are also included along
                  with the possibilities of using this language.
                </P_CardContent>
                <H1_TaskTopic>Topic:</H1_TaskTopic>
                <Div_TaskParts>
                  <Span_TaskPart>create react app</Span_TaskPart>
                  <Span_TaskPart>CSS + HTML</Span_TaskPart>
                  <Span_TaskPart>React router</Span_TaskPart>
                  <Span_TaskPart>Styled components</Span_TaskPart>
                </Div_TaskParts>
              </Div_Card>
            </Article_TaskLibrary>
          </Tilt>
        </Link>

        <Link to={urls.hackerWritter}>
          <Tilt>
            <Article_TaskLibrary>
              <Img_TaskLibrary src={laptop}></Img_TaskLibrary>
              <Div_Card>
                <Header_Card>
                  <H1_Card>
                    <Div_TaskName>Hacker Typer</Div_TaskName>
                  </H1_Card>
                </Header_Card>

                <P_CardContent>
                  Hablamos sobre las dificultades en el gremio y discutimos sobre nuestros derechos
                  en un mundo donde somos la minoria. Hablamos sobre las dificultades en el gremio y
                  en un mundo donde somos la minoria. Hablamos sobre las dificultades en el gremio
                  la minoria.
                </P_CardContent>
                <H1_TaskTopic>Topic:</H1_TaskTopic>
                <Div_TaskParts>
                  <Span_TaskPart>UseState</Span_TaskPart>
                  <Span_TaskPart>Keyevents</Span_TaskPart>
                  <Span_TaskPart>Reacthelmet</Span_TaskPart>
                  <Span_TaskPart>Deploy App into Internet</Span_TaskPart>
                </Div_TaskParts>
              </Div_Card>
            </Article_TaskLibrary>
          </Tilt>
        </Link>

        <Link to={urls.counter}>
          <Tilt>
            <Article_TaskLibrary>
              <Img_TaskLibrary src={worktable}></Img_TaskLibrary>
              <Div_Card>
                <Header_Card>
                  <H1_Card>
                    <Div_TaskName>Counter App</Div_TaskName>
                  </H1_Card>
                </Header_Card>

                <P_CardContent>
                  Hablamos sobre las dificultades en el gremio y discutimos sobre nuestros derechos
                  en un mundo donde somos la minoria.Hablamos sobre las dificultades en el gremio y
                  en un mundo donde somos la minoria.
                </P_CardContent>
                <H1_TaskTopic>Topic:</H1_TaskTopic>
                <Div_TaskParts>
                  <Span_TaskPart>bestfriend</Span_TaskPart>
                  <Span_TaskPart>buddy</Span_TaskPart>
                  <Span_TaskPart>amigo</Span_TaskPart>
                  <Span_TaskPart>family</Span_TaskPart>
                </Div_TaskParts>
              </Div_Card>
            </Article_TaskLibrary>
          </Tilt>
        </Link>

        <Link to={urls.toDoApp}>
          <Tilt>
            <Article_TaskLibrary>
              <Img_TaskLibrary alt='Placeholder' src={startup}></Img_TaskLibrary>

              <Div_Card>
                <Header_Card>
                  <H1_Card>
                    <Div_TaskName>To-Do App</Div_TaskName>
                  </H1_Card>
                </Header_Card>

                <P_CardContent>
                  Hablamos sobre las dificultades en el gremio y discutimos sobre nuestros derechos
                  en un mundo donde somos la minoria.Hablamos sobre las dificultades en el gremio y
                  en un mundo donde somos la minoria.
                </P_CardContent>
                <H1_TaskTopic>Topic:</H1_TaskTopic>
                <Div_TaskParts>
                  <Span_TaskPart>#localstorage</Span_TaskPart>
                  <Span_TaskPart>#buddy</Span_TaskPart>
                  <Span_TaskPart>#amigo</Span_TaskPart>
                  <Span_TaskPart>#family</Span_TaskPart>
                </Div_TaskParts>
              </Div_Card>
            </Article_TaskLibrary>
          </Tilt>
        </Link>

        <Link to={urls.memorygame}>
          <Tilt>
            <Article_TaskLibrary>
              <Img_TaskLibrary alt='Placeholder' src={memorygame}></Img_TaskLibrary>

              <Div_Card>
                <Header_Card>
                  <H1_Card>
                    <Div_TaskName>Memory Game</Div_TaskName>
                  </H1_Card>
                </Header_Card>

                <P_CardContent>
                  Hablamos sobre las dificultades en el gremio y discutimos sobre nuestros derechos
                  en un mundo donde somos la minoria.Hablamos sobre las dificultades en el gremio y
                  en un mundo donde somos la minoria.
                </P_CardContent>
                <H1_TaskTopic>Topic:</H1_TaskTopic>
                <Div_TaskParts>
                  <Span_TaskPart>#localstorage</Span_TaskPart>
                  <Span_TaskPart>#buddy</Span_TaskPart>
                  <Span_TaskPart>#amigo</Span_TaskPart>
                  <Span_TaskPart>#family</Span_TaskPart>
                </Div_TaskParts>
              </Div_Card>
            </Article_TaskLibrary>
          </Tilt>
        </Link>

        <Link to={urls.toDoAppRedux}>
          <Tilt>
            <Article_TaskLibrary>
              <Img_TaskLibrary alt='Placeholder' src={todoredux}></Img_TaskLibrary>

              <Div_Card>
                <Header_Card>
                  <H1_Card>
                    <Div_TaskName>ToDoApp-Redux</Div_TaskName>

                    <Div_TaskName>Mortgage Calculator</Div_TaskName>
                  </H1_Card>
                </Header_Card>

                <P_CardContent>
                  Hablamos sobre las dificultades en el gremio y discutimos sobre nuestros derechos
                  en un mundo donde somos la minoria.Hablamos sobre las dificultades en el gremio y
                  en un mundo donde somos la minoria.
                </P_CardContent>
                <H1_TaskTopic>Topic:</H1_TaskTopic>
                <Div_TaskParts>
                  <Span_TaskPart>#localstorage</Span_TaskPart>
                  <Span_TaskPart>#buddy</Span_TaskPart>
                  <Span_TaskPart>#amigo</Span_TaskPart>
                  <Span_TaskPart>#family</Span_TaskPart>
                </Div_TaskParts>
              </Div_Card>
            </Article_TaskLibrary>
          </Tilt>
        </Link>
        <Link to={urls.mortgageCalculator}>
          <Tilt>
            <Article_TaskLibrary>
              <Img_TaskLibrary alt='Placeholder' src={mortgage}></Img_TaskLibrary>

              <Div_Card>
                <Header_Card>
                  <H1_Card>
                    <Div_TaskName>ToDoApp-Redux</Div_TaskName>

                    <Div_TaskName>Mortgage Calculator</Div_TaskName>
                  </H1_Card>
                </Header_Card>

                <P_CardContent>
                  Hablamos sobre las dificultades en el gremio y discutimos sobre nuestros derechos
                  en un mundo donde somos la minoria.Hablamos sobre las dificultades en el gremio y
                  en un mundo donde somos la minoria.
                </P_CardContent>
                <H1_TaskTopic>Topic:</H1_TaskTopic>
                <Div_TaskParts>
                  <Span_TaskPart>#localstorage</Span_TaskPart>
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
