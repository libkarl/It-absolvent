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
import { calculationMortgage } from './mortgageCalculation'
import { theme } from '../../helpers/theme'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const Div_TableWraper = tw.div`
  w-6/12
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

export type RowData = ReturnType<typeof calculateTableData>
const Label_Text = tw.label`
    text-xl
`

const mortgageDataFormat = (item: number) => {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
  }).format(item)
}

const formatMortgageDate = (index: number) => {
  const month = index + 1
  const loanYear = Math.floor(month / 12)
  const actualMonth = (month % 12) + 1
  return `${actualMonth}/${loanYear}`
}
const formatNumbersRange = (item: number) => {
  return Number(item.toFixed(2))
}

const Charts = (calculatedMortgage: RowData) => {
  const chartData = calculatedMortgage.rows.map((item, index) => ({
    xAxis: formatMortgageDate(index),
    interestPaid: formatNumbersRange(item.interest),
    principalPaid: formatNumbersRange(item.principal),
    remain: formatNumbersRange(item.remain),
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
                dataKey='interestPaid'
                stroke={theme.colors.cyan}
                strokeWidth={1}
                activeDot={{ r: 8 }}
              />
              <Line
                type='monotone'
                dataKey='principalPaid'
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
                dataKey='remain'
                stroke={theme.colors.cyan}
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

export const calculateTableData = (arg: {
  price: number
  rate: number
  period: number
  downPayment: number
}) => {
  const monthlyPayment = Math.round(calculationMortgage(arg))
  let remain = arg.price
  const rowsData = Array.from({ length: arg.period * 12 }, (v, i) => i + 1).map(i => {
    const year = Math.floor((i - 1) / 12) + 1
    const month = ((i - 1) % 12) + 1
    const monthlyInterestPayment = (arg.rate / 100 / 12) * remain
    const monthlyPrincipalPayment = monthlyPayment - monthlyInterestPayment
    remain -= monthlyPrincipalPayment

    return {
      month,
      year,
      monthlyInterestPayment,
      monthlyPrincipalPayment,
      remain,
    }
  })
  const finalData: {
    rows: {
      name: string
      amount: number
      interest: number
      principal: number
      remain: number
      month: number
      year: number
    }[]
  } = { rows: [] }
  for (let i = 0; i < rowsData.length; i++) {
    const formatedRowData = {
      name: formatMortgageDate(i),
      amount: monthlyPayment,
      interest: rowsData[i].monthlyInterestPayment,
      principal: rowsData[i].monthlyPrincipalPayment,
      remain: rowsData[i].remain,
      month: rowsData[i].month,
      year: rowsData[i].year,
    }
    finalData.rows.push(formatedRowData)
  }

  return finalData
}

export const MortgageCalculator = () => {
  const [period, setPeriod] = useState(30)
  const [price, setPrice] = useState(5_000_000)
  const [downPayment, setDownPayment] = useState(0)
  const [rate, setRate] = useState(5)
  const [visibleYear, setVisibleYear] = useState(1)
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
        <Table
          calculatedMortgage={calculateTableData({ price, rate, period, downPayment })}
          visibleYear={visibleYear}
          setVisibleYear={setVisibleYear}
        />
      </Div_TableWraper>
      <Charts {...calculateTableData({ price, rate, period, downPayment })} />
    </React.Fragment>
  )
}

const Table = (props: {
  calculatedMortgage: RowData
  visibleYear: number
  setVisibleYear: React.Dispatch<React.SetStateAction<number>>
}) => {
  return (
    <DataTable>
      <thead>
        <tr>
          <Th_Styled>Month/Year</Th_Styled>
          <Th_Styled>Payment Amount</Th_Styled>
          <Th_Styled>Interest Paid</Th_Styled>
          <Th_Styled>Principal Paid</Th_Styled>
          <Th_Styled>Remain</Th_Styled>
        </tr>
      </thead>
      <tbody>
        {props.calculatedMortgage.rows.map((item, index) => (
          <Tr_Tab
            key={index}
            visibility={item.month === 1 || props.visibleYear === item.year ? 1 : 0}
            visibleYear={props.visibleYear}
            month={item.month}
            year={item.year}
            onClick={() => props.setVisibleYear(item.year)}
          >
            <Td_Styled>{`${item.month}/${item.year}`}</Td_Styled>
            <Td_Styled>{mortgageDataFormat(item.amount)}</Td_Styled>
            <Td_Styled>{mortgageDataFormat(item.interest)}</Td_Styled>
            <Td_Styled>{mortgageDataFormat(item.principal)}</Td_Styled>
            <Td_Styled>{mortgageDataFormat(item.remain)}</Td_Styled>
          </Tr_Tab>
        ))}
      </tbody>
    </DataTable>
  )
}

const DataTable = styled.table`
  justify-content: center;
  border: solid 1px ${theme.colors.gray};
  text-align: center;
  line-height: normal;
  vertical-align: middle;
  width: 100%;
  height: 60vh;
  overflow: auto;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  border-collapse: collapse;
`
const Th_Styled = styled.th`
  padding: 5px 12.5px;
  position: sticky;
  background-color: ${theme.colors.darkgrey};
  top: 0px;
  font-weight: normal;
`

const Td_Styled = styled.td`
  border-bottom: 1px solid ${theme.colors.gray};
  padding: 5px;
`

type TrProps = {
  visibility: number
  month: number
  year: number
  visibleYear: number
}
const Tr_Tab = styled.tr<TrProps>`
  background-color: ${props =>
    props.month === 1
      ? props.visibleYear === props.year
        ? theme.colors.darkgrey
        : theme.colors.lightgray
      : 'transparent'};
  border: ${props =>
    props.month !== 1 ? `solid 2px ${theme.background.backgroundColor}` : 'transparent'};
  cursor: ${props => (props.month === 1 ? 'pointer' : 'default')};
  display: ${props => (props.visibility === 1 ? '' : 'none')};
`
