import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Helmet } from 'react-helmet'
import { InputSlider } from './UniversalInput'
import { LoanTable, TableData } from './MortgageTable'
import { calculationMortgage } from './mortgageCalculation'
import { createData } from './MortgageTable'
import { theme } from '../../helpers/theme'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const Div_TableWraper = tw.div`
  w-10/12
  mt-20
  mb-20
  mx-auto
`

const Div_ChartsWraper = tw.div`
  w-10/12
  mt-10
  mb-40
  mx-auto
`
const Div_ChartItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Div_ResponsiveChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  grid-gap: 1rem;
`

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
  color: ${theme.background.backgroundColor};
  top: 50%;
  left: 50%;
  font-size: 26px;
  font-family: 'Roboto';
  text-shadow: 1px 1px 1px ${theme.colors.black}, 0px 0px 1px ${theme.colors.gray};
`
const Label_Text = tw.label`
    text-xl
`
const formatMortgageDate = (index: number) => {
  const month = index + 1
  const loanYear = Math.floor(month / 12)
  const actualMonth = (month % 12) + 1
  return `${actualMonth}/${loanYear}`
}
const formatNumbersRange = (item: number) => {
  return Number(item.toFixed(2))
}

const Charts = (props: { calculatedMortgage: TableData }) => {
  const chartData = props.calculatedMortgage.rows.map((item, index) => ({
    xAxis: formatMortgageDate(index),
    'Interest Paid': formatNumbersRange(item.interest),
    'Principal Paid': formatNumbersRange(item.principal),
  }))
  return (
    <ResponsiveContainer>
      <Div_ChartsWraper>
        <Div_ResponsiveChartsGrid>
          <Div_ChartItem>
            <LineChart width={690} height={640} data={chartData}>
              <CartesianGrid stroke='#eee' strokeDasharray='3 3' />
              <XAxis dataKey='xAxis' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='Interest Paid'
                stroke={theme.colors.cyan}
                strokeWidth={1}
                activeDot={{ r: 8 }}
              />
              <Line
                type='monotone'
                dataKey='Principal Paid'
                stroke={theme.colors.lightRed}
                strokeWidth={1}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </Div_ChartItem>
          <Div_ChartItem>
            <LineChart width={690} height={640} data={chartData}>
              <CartesianGrid stroke='#eee' strokeDasharray='3 3' />
              <XAxis dataKey='xAxis' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='Interest Paid'
                stroke={theme.colors.cyan}
                strokeWidth={1}
                activeDot={{ r: 8 }}
              />
              <Line
                type='monotone'
                dataKey='Principal Paid'
                stroke={theme.colors.lightRed}
                strokeWidth={1}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </Div_ChartItem>
        </Div_ResponsiveChartsGrid>
      </Div_ChartsWraper>
    </ResponsiveContainer>
  )
}

export const MortgageCalculator = () => {
  const [period, setPeriod] = useState(30)
  const [price, setPrice] = useState(5_000_000)
  const [downPayment, setDownPayment] = useState(0)
  const [rate, setRate] = useState(5)

  const CalculateTableData = (arg: {
    price: number
    rate: number
    period: number
    downPayment: number
  }): TableData => {
    const finalData: TableData = {
      rows: [],
    }
    const monthlyPayment = Math.round(calculationMortgage({ rate, period, price, downPayment }))
    let remain = arg.price
    const rowsData = Array.from({ length: arg.period * 12 }, (v, i) => i + 1).map(i => {
      const monthlyInterestPayment = (arg.rate / 100 / 12) * remain
      const monthlyPrincipalPayment = monthlyPayment - monthlyInterestPayment
      remain -= monthlyPrincipalPayment

      return {
        monthlyInterestPayment,
        monthlyPrincipalPayment,
        remain,
      }
    })
    for (let i = 0; i < rowsData.length; i++) {
      finalData.rows.push(
        createData(
          formatMortgageDate(i),
          monthlyPayment,
          Math.round(rowsData[i].monthlyInterestPayment),
          Math.round(rowsData[i].monthlyPrincipalPayment),
          Math.round(rowsData[i].remain)
        )
      )
    }

    return finalData
  }

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
                  defaultValue={1_500_000}
                  step={50_000}
                  min={1_000_000}
                  max={10_000_000}
                  value={price}
                  onChange={(_, v) => setPrice(Number(v))}
                />
              </Div_RequiredVaulue>
              <Label_Text>Enter a first payment amount:</Label_Text>
              <Div_RequiredVaulue>
                <H2_ManualSettings>{downPayment < price ? downPayment : price}</H2_ManualSettings>
                <InputSlider
                  defaultValue={500_000}
                  step={50_000}
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
      <Div_TableWraper>
        <LoanTable
          rows={
            CalculateTableData({
              price,
              rate,
              period,
              downPayment,
            }).rows
          }
        />
      </Div_TableWraper>
      <Charts
        calculatedMortgage={CalculateTableData({
          price,
          rate,
          period,
          downPayment,
        })}
      />
    </React.Fragment>
  )
}
