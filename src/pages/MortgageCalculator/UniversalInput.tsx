import * as React from 'react'
import { GiMoneyStack } from 'react-icons/gi'
import { valueText } from '../../helpers/functions'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'

type InputProps = {
  defaultValue: number
  step: number
  min: number
  max: number
  value: number
  onChange: ((event: Event, value: number | number[], activeThumb: number) => void) | undefined
}

export const InputSlider = (props: InputProps) => {
  return (
    <Box sx={{ width: 200, size: 'large' }}>
      <Stack spacing={2} direction='row' sx={{ mb: 1 }} alignItems='center'>
        <GiMoneyStack size={35} />
        <Slider {...props} aria-label='Currency' getAriaValueText={valueText} />
        <GiMoneyStack size={40} />
      </Stack>
    </Box>
  )
}
