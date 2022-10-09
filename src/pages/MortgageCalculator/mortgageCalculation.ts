import { formatMortgageDate } from './MortgageCalcualtor'

type ProvidedNumberResults = {
  rate: number
  period: number
  price: number
  downPayment: number
}

export const calculationMortgage = (arg: ProvidedNumberResults) => {
  const restAmount = arg.price - arg.downPayment
  const monthlyRate = arg.rate / 100 / 12
  const monthTotal = arg.period * 12
  const monthlyPayment =
    (restAmount * monthlyRate * Math.pow(1 + monthlyRate, monthTotal)) /
    (Math.pow(1 + monthlyRate, monthTotal) - 1)

  return monthlyPayment
}

// Source: https://www.financevpraxi.cz/finance-vyber-financniho-produktu
const monthInflation = (year: number) => {
  return Math.pow(1 + -year / 100, 1 / 12) - 1
}

export const calculateTableData = (arg: {
  price: number
  rate: number
  period: number
  downPayment: number
  inflation: number
}) => {
  const monthlyPayment = Math.round(calculationMortgage(arg))
  const monthlyInflation = monthInflation(arg.inflation)
  let remain = arg.price
  let inflationCoefficient = 1
  const rowsData = Array.from({ length: arg.period * 12 }, (v, i) => i + 1).map(i => {
    const year = Math.floor((i - 1) / 12) + 1
    const month = ((i - 1) % 12) + 1
    const monthlyInterestPayment = (arg.rate / 100 / 12) * remain
    const monthlyPrincipalPayment = monthlyPayment - monthlyInterestPayment
    remain -= monthlyPrincipalPayment
    const inflationInterestPaid = monthlyInterestPayment * inflationCoefficient
    const inflationPrincipalPaid = monthlyPrincipalPayment * inflationCoefficient
    const inflationRemain = remain * inflationCoefficient
    inflationCoefficient = inflationCoefficient * (1 + monthlyInflation)

    return {
      month,
      year,
      monthlyInterestPayment,
      monthlyPrincipalPayment,
      remain,
      inflation: {
        inflationInterestPaid,
        inflationPrincipalPaid,
        inflationRemain,
      },
    }
  })
  const finalData = rowsData.map((value, index) => {
    return {
      name: formatMortgageDate(index),
      amount: monthlyPayment,
      ...value,
    }
  })

  return finalData
}
