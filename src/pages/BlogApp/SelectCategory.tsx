import * as React from 'react'
import { ThemeProvider } from '@mui/private-theming'
import { muiTheme } from '../../helpers/theme'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

type CategoryArgs = {
  handleCategory: (event: SelectChangeEvent) => void
  selectedCategory: string
}

export const SelectCategory = (props: CategoryArgs) => {
  return (
    <Box sx={{ maxWidth: '200px' }}>
      <ThemeProvider theme={muiTheme}>
        <FormControl fullWidth>
          <InputLabel id='simple-select-label'>Category</InputLabel>
          <Select
            labelId='simple-select-label'
            id='simple-select'
            value={props.selectedCategory}
            label='Category'
            onChange={props.handleCategory}
          >
            <MenuItem value={'webdesign'}>Web Design</MenuItem>
            <MenuItem value={'graphicdesign'}>Graphic Design</MenuItem>
            <MenuItem value={'digitalmarketing'}>Digital Marketing</MenuItem>
            <MenuItem value={'socialmediamarketing'}>Social Media Marketing </MenuItem>
            <MenuItem value={'cooding'}>Cooding</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </Box>
  )
}
