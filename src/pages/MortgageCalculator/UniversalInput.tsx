import * as React from 'react'
import { GiMoneyStack } from 'react-icons/gi'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'

function valuetext(value: number) {
  return `${value}Kč`
}

type InputProps = {
  defaultValue: number
  step: number
  min: number
  max: number
  value: number
  change: ((event: Event, value: number | number[], activeThumb: number) => void) | undefined
}

export const InputSlider = (props: InputProps) => {
  return (
    <Box sx={{ width: 200, size: 'large' }}>
      <Stack spacing={2} direction='row' sx={{ mb: 1 }} alignItems='center'>
        <GiMoneyStack size={35} />
        <Slider
          aria-label='Currency'
          defaultValue={props.defaultValue}
          getAriaValueText={valuetext}
          step={props.step}
          min={props.min}
          max={props.max}
          onChange={props.change}
          value={props.value}
        />
        <GiMoneyStack size={40} />
      </Stack>
    </Box>
  )
}
