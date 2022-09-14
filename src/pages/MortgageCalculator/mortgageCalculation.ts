type CalculationProps = {
  rate: number
  period: number
  price: number
  downPayment: number
}

export const calculationMortgage = (props: CalculationProps) => {
  const restAmount = props.price - props.downPayment
  const monthlyRate = props.rate / 100 / 12
  const monthTotal = props.period * 12
  const monthlyPayment =
    (restAmount * monthlyRate * Math.pow(1 + monthlyRate, monthTotal)) /
    (Math.pow(1 + monthlyRate, monthTotal) - 1)

  return monthlyPayment
}
