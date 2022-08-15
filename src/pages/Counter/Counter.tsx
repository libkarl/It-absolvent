import { Helmet } from 'react-helmet'
import { theme } from '../../helpers/theme'
import AddIcon from '@mui/icons-material/Add'
import Box from '@mui/material/Box'
import React from 'react'
import tw from 'tailwind-styled-components'

const Div_CounterContainer = tw.div`
    w-full max-w-md mx-auto p-6

`
const Div_CounterShape = tw.div`
    mt-7 
    bg-white  
    rounded-xl 
    shadow-lg 
    dark:bg-sky-700 
    dark:border-gray-700

`
const Div_CounterSize = tw.div`
    p-4 
    sm:p-7

`
const Div_AboutCounter = tw.div`
    text-center

`

const Div_ContentCounter = tw.div`
    grid 
    gap-y-4 
    mt-5

`
const H1_CounterTitle = tw.h1`
    block 
    text-2xl 
    font-bold 
    text-gray-800 
    dark:text-white

`

const P_CounterTitle = tw.p`
    mt-2 
    text-sm 
    text-gray-600 
    dark:text-gray-400

`

const H1_CounterLablel = tw.h1`
    block 
    text-sm 
    font-bold 
    ml-1 
    mb-2 
    dark:text-white

`
const Div_Count = tw.div`
    relative

`

const H1_CountedNumber = tw.h1`
    py-3 
    px-4 
    block 
    w-4/12 
    mx-auto 
    border-2 
    border-gray-200 
    rounded-md 
    text-sm 
    focus:border-blue-500 
    focus:ring-blue-500 
    shadow-sm 
    text-black 
    text-center

`
const Button_CountIncerase = tw.button`
    relative 
    inline-flex 
    items-center 
    justify-center 
    p-0.5 
    mb-2 
    mr-2 
    overflow-hidden 
    text-sm 
    font-medium 
    text-gray-900 
    rounded-lg 
    group 
    bg-gradient-to-br 
    from-green-400 
    to-blue-600 
    group-hover:from-green-400 
    group-hover:to-blue-600 
    hover:text-white 
    dark:text-white 
    focus:ring-4 
    focus:outline-none 
    focus:ring-green-200 
    dark:focus:ring-green-800

`

const Button_CountDecrease = tw.button`
    relative 
    inline-flex 
    items-center 
    justify-center 
    p-0.5 
    mb-2 
    mr-2 
    overflow-hidden 
    text-sm 
    font-medium 
    text-gray-900 
    rounded-lg 
    group 
    bg-gradient-to-br 
    from-purple-500 
    to-pink-500 
    group-hover:from-purple-500 
    group-hover:to-pink-500 
    hover:text-white dark:text-white 
    focus:ring-4 
    focus:outline-none 
    focus:ring-purple-200 
    dark:focus:ring-purple-800

`
const Span_Button = tw.span`
    relative  
    py-2.5 transition-all 
    ease-in duration-75 
    rounded-md

`

type Click = {
  onclick?: () => void
}

type Actualnumber = {
  countednumber: number
}

export class Counter extends React.Component<Click, Actualnumber> {
  constructor(props: Click) {
    super(props)
    this.state = {
      countednumber: 0,
    }
  }

  render() {
    return (
      <Div_CounterContainer>
        <Div_CounterShape>
          <Div_CounterSize>
            <Div_AboutCounter>
              <H1_CounterTitle>Counter App</H1_CounterTitle>
              <P_CounterTitle>
                A simple counting app with a clean and uncluttered user interface. Counts can easily
                be incremented and decremented
              </P_CounterTitle>
            </Div_AboutCounter>

            <Div_ContentCounter>
              <H1_CounterLablel>Counter:</H1_CounterLablel>
              <Div_Count>
                <H1_CountedNumber>{this.state.countednumber}</H1_CountedNumber>
              </Div_Count>

              <Button_CountIncerase
                onClick={() => {
                  this.setState({ countednumber: this.state.countednumber + 1 })
                }}
              >
                <Span_Button>+</Span_Button>
              </Button_CountIncerase>
              <Button_CountDecrease
                onClick={() => {
                  this.setState({ countednumber: this.state.countednumber - 1 })
                }}
              >
                <Span_Button>-</Span_Button>
              </Button_CountDecrease>
            </Div_ContentCounter>
          </Div_CounterSize>
        </Div_CounterShape>
      </Div_CounterContainer>
    )
  }
}
