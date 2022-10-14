import { blue, green, red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'

export const theme = {
  colors: {
    white: '#ffffff', // opacity: 0.6;
    cyan: '#61dafb',
    green: '#2ad400',
    red: '#eb2b05',
    lightRed: '#c23866',
    lightGray: '#dad9d8',
    black: '#000000',
    colorprimary: '#4db5ff',
    lightBlack: '#121211',
    colorprimaryvariant: '#4db5ff', // opacity opacity: 0.4;
    gray: '#525354',
    lightgray: '#DBDCDC',
    lightblue: '#075CCA',
    darkgrey: '#9A9C9F',
  },

  background: {
    backgroundColor: '#fffff',
    memorygameBG: '#1b1523',
    colorbg: '#1f1f38',
    colorbgvariant: '#2c2c6c',
    lightblue: '#82a5c0',
  },

  fonts: {
    small: '2rem',
    medium: '4rem',
    large: '6rem',
  },

  sizes: {
    containerLG: 75,
    containerMD: 86,
    containerMS: 90,
  },
  breakpoints: {
    sm: `@media (max-width: 600px)`,
    md: `@media (max-width: 1024px)`,
  },
}

export const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 300, // phone
      sm: 600, // tablets
      md: 1024, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
})
