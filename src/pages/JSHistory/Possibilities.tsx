import { BiDesktop } from 'react-icons/bi'
import { BiServer } from 'react-icons/bi'
import { CgGames } from 'react-icons/cg'
import { FaMobileAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { SiKasasmart } from 'react-icons/si'
import { SiProbot } from 'react-icons/si'
import { TbWorld } from 'react-icons/tb'
import { VscGraph } from 'react-icons/vsc'
import { theme } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import React from 'react'
import tw from 'tailwind-styled-components'

const Div_Possibilities = tw.div`
  py-12 
  bg-white 
  mt-10
  p-12
`

const Div_IconPossibilities = tw.div`
  text-white
  absolute 
  flex 
  items-center 
  justify-center 
  fill-current 
  h-12 
  w-12 
  rounded-md 
  bg-blue-600 
  text-white 
`
const Div_PossibilitiesItem = tw.div`
  relative
`
const P_PossibilitiesItem = tw.p`
  ml-16 
  text-lg 
  leading-6 
  font-medium 
  text-gray-900
`
const DD_PossibilitiesItem = tw.dd`
  mt-2 
  ml-16 
  text-base 
  text-gray-500
`

const Div_PossibilitiesItems = tw.div`
  mt-10
`
const DL_ItemsLayout = tw.dl`
  space-y-10 
  md:space-y-0 
  md:grid 
  md:grid-cols-2 
  md:gap-x-8 
  md:gap-y-10
`

const Div_PossibilitiesSize = tw.div`
  max-w-7xl 
  mx-auto 
  px-4 
  sm:px-6 
  lg:px-8
`

const Div_PossibilitiesHeader = tw.div`
  lg:text-center
`

const H2_PossibilitiesHeader = tw.h2`
  text-blue-600 
  font-semibold 
  uppercase 
  text-3xl
`
const P_PossibilitiesHeader = tw.p`
  mt-4 
  max-w-2xl 
  text-xl 
  text-gray-500 
  lg:mx-auto
`

export const Possibilities = () => {
  return (
    <Div_Possibilities id={urls.jsHistoryPossibilities}>
      <Div_PossibilitiesSize>
        <Div_PossibilitiesHeader>
          <H2_PossibilitiesHeader>What is JavaScript used for?</H2_PossibilitiesHeader>

          <P_PossibilitiesHeader>
            JavaScript is mainly used for web-based applications and web browsers. But it is also
            used beyond the Web in software, servers and embedded hardware controls. Here are some
            basic things JavaScript is used for:
          </P_PossibilitiesHeader>
        </Div_PossibilitiesHeader>

        <Div_PossibilitiesItems>
          <DL_ItemsLayout>
            <Div_PossibilitiesItem>
              <dt>
                <Div_IconPossibilities>
                  <IconContext.Provider value={{ color: theme.colors.white }}>
                    <div>
                      <TbWorld size={28} />
                    </div>
                  </IconContext.Provider>
                </Div_IconPossibilities>
                <P_PossibilitiesItem>Adding interactive behavior to web pages</P_PossibilitiesItem>
              </dt>
              <DD_PossibilitiesItem>
                JavaScript allows users to interact with web pages. There are almost no limits to
                the things you can do with JavaScript on a web page.
              </DD_PossibilitiesItem>
            </Div_PossibilitiesItem>

            <Div_PossibilitiesItem>
              <dt>
                <Div_IconPossibilities>
                  <IconContext.Provider value={{ color: theme.colors.white }}>
                    <div>
                      <FaMobileAlt size={28} />
                    </div>
                  </IconContext.Provider>
                </Div_IconPossibilities>
                <P_PossibilitiesItem>Creating mobile apps</P_PossibilitiesItem>
              </dt>
              <DD_PossibilitiesItem>
                Developers can use various JavaScript frameworks for developing and building mobile
                apps. JavaScript frameworks are collections of JavaScript code libraries that
                provide developers with pre-written code to use for routine programming features and
                tasks.
              </DD_PossibilitiesItem>
            </Div_PossibilitiesItem>

            <Div_PossibilitiesItem>
              <dt>
                <Div_IconPossibilities>
                  <IconContext.Provider value={{ color: theme.colors.white }}>
                    <div>
                      <BiServer size={28} />
                    </div>
                  </IconContext.Provider>
                </Div_IconPossibilities>
                <P_PossibilitiesItem>Back-end Web Development</P_PossibilitiesItem>
              </dt>
              <DD_PossibilitiesItem>
                JavaScript can also be used for web development on the server. This allows
                JavaScript developers to use their skills to work with both front-end and back-end
                aspects of a website.
              </DD_PossibilitiesItem>
            </Div_PossibilitiesItem>

            <Div_PossibilitiesItem>
              <dt>
                <Div_IconPossibilities>
                  <IconContext.Provider value={{ color: theme.colors.white }}>
                    <div>
                      <BiDesktop size={28} />
                    </div>
                  </IconContext.Provider>
                </Div_IconPossibilities>
                <P_PossibilitiesItem>Desktop Applications</P_PossibilitiesItem>
              </dt>
              <DD_PossibilitiesItem>
                JavaScript is also used for creating desktop applications thanks to platforms like
                Electron and NW.js. Electron is backed by GitHub and is a compelling framework that
                you can use to build cross-platform desktop applications.{' '}
              </DD_PossibilitiesItem>
            </Div_PossibilitiesItem>

            <Div_PossibilitiesItem>
              <dt>
                <Div_IconPossibilities>
                  <IconContext.Provider value={{ color: theme.colors.white }}>
                    <div>
                      <CgGames size={28} />
                    </div>
                  </IconContext.Provider>
                </Div_IconPossibilities>
                <P_PossibilitiesItem>Game Development</P_PossibilitiesItem>
              </dt>
              <DD_PossibilitiesItem>
                JavaScript has also worked its way into the gaming industry. With HTML5, developers
                can create small games or game elements inside an existing webpage (for example, a
                banner ad or a moving object on the side of a webpage).
              </DD_PossibilitiesItem>
            </Div_PossibilitiesItem>

            <Div_PossibilitiesItem>
              <dt>
                <Div_IconPossibilities>
                  <IconContext.Provider value={{ color: theme.colors.white }}>
                    <div>
                      <SiProbot size={28} />
                    </div>
                  </IconContext.Provider>
                </Div_IconPossibilities>
                <P_PossibilitiesItem>Artificial Intelligence</P_PossibilitiesItem>
              </dt>
              <DD_PossibilitiesItem>
                In addition, there are frameworks for developing A.I.-powered chatbots in
                JavaScript, like Botkit and Chatfuel. Using these tools, developers can build
                chatbots that act as personal assistants.
              </DD_PossibilitiesItem>
            </Div_PossibilitiesItem>

            <Div_PossibilitiesItem>
              <dt>
                <Div_IconPossibilities>
                  <IconContext.Provider value={{ color: theme.colors.white }}>
                    <div>
                      <VscGraph size={28} />
                    </div>
                  </IconContext.Provider>
                </Div_IconPossibilities>
                <P_PossibilitiesItem>Data Visualization</P_PossibilitiesItem>
              </dt>
              <DD_PossibilitiesItem>
                One of the uses for JavaScript is data visualization, or creating visual
                representations of data using code.For example, many people use D3.js to create
                interactive graphs, charts, and maps that update in real-time based on revised data
                sets.
              </DD_PossibilitiesItem>
            </Div_PossibilitiesItem>

            <Div_PossibilitiesItem>
              <dt>
                <Div_IconPossibilities>
                  <IconContext.Provider value={{ color: theme.colors.white }}>
                    <div>
                      <SiKasasmart size={28} />
                    </div>
                  </IconContext.Provider>
                </Div_IconPossibilities>
                <P_PossibilitiesItem>Embedded Device Development and IoT</P_PossibilitiesItem>
              </dt>
              <DD_PossibilitiesItem>
                JavaScript is also gaining popularity for embedded device development.This means
                that you can create apps for very small devices using JavaScript because it is
                lightweight and easy to use.
              </DD_PossibilitiesItem>
            </Div_PossibilitiesItem>
          </DL_ItemsLayout>
        </Div_PossibilitiesItems>
      </Div_PossibilitiesSize>
    </Div_Possibilities>
  )
}
