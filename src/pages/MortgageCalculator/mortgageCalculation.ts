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
  const finalData = rowsData.map((value, index) => {
    return {
      name: formatMortgageDate(index),
      amount: monthlyPayment,
      ...value,
    }
  })

  return finalData
}
