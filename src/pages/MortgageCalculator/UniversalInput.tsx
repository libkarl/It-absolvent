import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

const marks = [
  {
    value: 1_000_000,
    label: 'Kč',
  },
  {
    value: 1_500_00,
    label: 'Kč',
  },
  {
    value: 5_000_000,
    label: 'Kč',
  },
  {
    value: 8_000_000,
    label: 'Kč',
  },
]

function valuetext(value: number) {
  return `${value}°C`
}

function valueLabelFormat(value: number) {
  return marks.findIndex(mark => mark.value === value) + 1
}

export default function DiscreteSliderValues() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label='Restricted values'
        defaultValue={1_500_00}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={50_000}
        valueLabelDisplay='auto'
        marks={marks}
      />
    </Box>
  )
}
