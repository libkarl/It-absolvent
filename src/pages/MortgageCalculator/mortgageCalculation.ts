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
