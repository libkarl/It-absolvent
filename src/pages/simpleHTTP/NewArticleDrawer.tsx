import * as React from 'react'
import { CgAdd } from 'react-icons/cg'
import { Dispatch } from 'react'
import { GoSearch } from 'react-icons/go'
import { Input, WidthFull } from '@mui/icons-material'
import { InputLabel } from '@mui/material'
import { SelectCategory } from './SelectCategory'
import { SelectChangeEvent } from '@mui/material/Select'
import { fetchRequest } from '../../helpers/serviceLayer'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import TextField from '@mui/material/TextField'
import Textarea from '@mui/joy/Textarea'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

const Div_httpContainer = tw.div`
    flex 
    flex-col 
    gap-y-2 
    w-full  
    rounded-2xl 
    p-2 
    shadow-2xl 
    bg-gray-200 
    text-left 
    characters
    mx-auto 
    mt-16 
`

const Div_FromContainer = tw.div`
  sm:w-2/3 
  md:w-1/2 
  max-w-sm
  mx-auto 
  mb-12
`

const Div_RequiredVaulue = tw.div`
  border 
  bg-gray-200 
  rounded flex 
  flex-row 
  items-center 
  p-4 
  justify-between 
  select-none
`

const Input_Data = styled.input`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  width: 14rem;
  height: 2.2rem;
  border-radius: 10px;
  text-align: center;
`

export const ActionDrawer = (props: { error: Dispatch<React.SetStateAction<string>> }) => {
  const [newArticle, setNewArticle] = useState<boolean>(false)
  const [updateArticle, setUpdateArticle] = useState<boolean>(false)
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const handleCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string)
  }

  const createNewArticle = () => {
    try {
      fetchRequest.blog.addNewPost({ title, text, category })
      console.log('hit add article')
    } catch (err) {
      console.log('fetching error')
      props.error('User is unavailable..')
    }
  }

  const AddForm = () => (
    <Box
      sx={{
        width: '50%',
        height: '30rem',
        marginTop: '10rem',
        margin: 'auto',
      }}
      component='form'
      autoComplete='off'
    >
      <List sx={{ width: '35rem', margin: 'auto', marginTop: '6rem' }}>
        <ListItem sx={{ textAlign: 'center' }}>
          <ListItemText>
            Add your new Article. &#1F634;
            <span role='img' aria-label='sheep'>
              🐑
            </span>
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <TextField
            id='outlined-basic'
            label='Title'
            variant='outlined'
            value={title}
            onChange={e => setTitle(e.currentTarget.value)}
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
          />
          <SelectCategory selectedCategory={category} handleCategory={handleCategory} />
          <ListItemButton
            sx={{ width: '2rm', gap: '10px' }}
            onClick={() => {
              createNewArticle()
              setNewArticle(false)
            }}
          >
            Add
            <CgAdd size={30} />
          </ListItemButton>
        </ListItem>
        <ListItem
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            width: '34rem',
            margin: 'auto',
          }}
        >
          <TextField
            value={text}
            onChange={i => setText(i.currentTarget.value)}
            placeholder='Insert article content..'
            variant='outlined'
            sx={{ width: '100%' }}
            multiline
            rows={5}
            maxRows={8}
          />
        </ListItem>
      </List>
    </Box>
  )

  const UpdateForm = () => (
    <Box
      sx={{ width: 250, height: 300 }}
      role='presentation'
      onClick={() => {
        setNewArticle(false)
      }}
    >
      <>Update Article</>
    </Box>
  )

  const DeleteForm = () => (
    <Box
      sx={{ width: 250, height: 300 }}
      role='presentation'
      onClick={() => {
        setNewArticle(false)
      }}
    >
      <>Update Article</>
    </Box>
  )

  return (
    <div>
      {
        <React.Fragment key={'Add Article'}>
          <Button
            onClick={() => {
              setNewArticle(true)
            }}
          >
            Add Article
          </Button>
          <Drawer
            anchor='top'
            open={newArticle}
            onClose={() => {
              setNewArticle(false)
            }}
          >
            {AddForm()}
          </Drawer>
        </React.Fragment>
      }
    </div>
  )
}
