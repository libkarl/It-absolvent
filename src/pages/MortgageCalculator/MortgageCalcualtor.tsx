import { Helmet } from 'react-helmet'
import { InputSlider } from './UniversalInput'
import { calculationMortgage } from './mortgageCalculation'
import { theme } from '../../helpers/theme'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const MortgageContainer = tw(Container)`
    flex 
    flex-col 
    gap-y-2 
    w-full 
    sm:w-2/3 
    md:w-1/2 
    max-w-sm 
    rounded-2xl 
    p-2 
    shadow-2xl 
    bg-gray-200 
    text-left 
    characters 
    mx-auto 
    mt-96
`
const Div_RequiredVaulue = tw.div`
  border 
  bg-gray-200 
  rounded flex 
  flex-row 
  items-center 
  p-1 
  justify-between 
  select-none
`

const H2_CalculatorHeader = tw.h2`
    mt-10
    mb-10
    mx-auto
    text-2xl
    rounded-2xl
    border 
    bg-gray-100  
    flex-row 
    p-4
    text-center 
    justify-center 
    select-none
    shadow
`
const H2_ManualSettings = styled.h2`
  color: #ffffff;
  top: 50%;
  left: 50%;
  font-size: 26px;
  font-family: 'Roboto';
  text-shadow: 1px 1px 1px ${theme.colors.black}, 0px 0px 1px ${theme.colors.gray};
`
const Label_Text = tw.label`
    text-xl
`
export const MortgageCalculator = () => {
  const [period, setPeriod] = useState(30)
  const [price, setPrice] = useState(5_000_000)
  const [downPayment, setDownPayment] = useState(0)
  const [rate, setRate] = useState(5)

  return (
    <React.Fragment>
      <CssBaseline />
      <MortgageContainer maxWidth='sm'>
        <Box>
          <div>
            <Helmet>
              <title>TS/React_Mortgage Calculator</title>
            </Helmet>
            <H2_CalculatorHeader>React - Mortgage calculator</H2_CalculatorHeader>
            <form>
              <Label_Text>Enter a loan amount:</Label_Text>
              <Div_RequiredVaulue>
                <H2_ManualSettings>{price}</H2_ManualSettings>
                <InputSlider
                  defaultValue={1500000}
                  step={50000}
                  min={1000000}
                  max={10000000}
                  value={price}
                  onChange={(_, v) => setPrice(Number(v))}
                />
              </Div_RequiredVaulue>
              <Label_Text>Enter a first payment amount:</Label_Text>
              <Div_RequiredVaulue>
                <H2_ManualSettings>{downPayment < price ? downPayment : price}</H2_ManualSettings>
                <InputSlider
                  defaultValue={1.5}
                  step={50000}
                  min={0}
                  max={price}
                  value={downPayment < price ? downPayment : price}
                  onChange={(_, v) => setDownPayment(Number(v))}
                />
              </Div_RequiredVaulue>
              <Label_Text>Select a loan term:</Label_Text>
              <Div_RequiredVaulue>
                <H2_ManualSettings>{period}</H2_ManualSettings>
                <InputSlider
                  defaultValue={1.5}
                  step={1}
                  min={5}
                  max={40}
                  value={period}
                  onChange={(_, v) => setPeriod(Number(v))}
                />
              </Div_RequiredVaulue>
              <Label_Text>Select a percentage rate:</Label_Text>
              <Div_RequiredVaulue>
                <H2_ManualSettings>{rate}</H2_ManualSettings>
                <InputSlider
                  defaultValue={1.5}
                  step={0.1}
                  min={1}
                  max={20}
                  value={rate}
                  onChange={(_, v) => setRate(Number(v))}
                />
              </Div_RequiredVaulue>
            </form>
            <Div_RequiredVaulue>
              <H2_CalculatorHeader>
                Your final monthly payment in CZK is{' '}
                <span>{Math.round(calculationMortgage({ rate, period, price, downPayment }))}</span>{' '}
                for <span>{period}</span> years.
              </H2_CalculatorHeader>
            </Div_RequiredVaulue>
          </div>
        </Box>
      </MortgageContainer>
    </React.Fragment>
  )
}
