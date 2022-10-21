import { SelectCategory } from './SelectCategory'
import { ThemeProvider } from '@mui/private-theming'
import { TodoContext } from './BlogApp'
import { muiTheme } from '../../helpers/theme'
import { theme } from '../../helpers/theme'
import { useContext } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import React from 'react'
import SendIcon from '@mui/icons-material/Send'
import TextField from '@mui/material/TextField'

export const AddArticle = () => {
  const articleContext = useContext(TodoContext)

  return (
    <Box
      sx={{
        width: '50%',
        height: '30rem',
        marginTop: '10rem',
        margin: 'auto',
        marginBottom: '5rem',
      }}
      component='form'
      autoComplete='off'
    >
      <ThemeProvider theme={muiTheme}>
        <List sx={{ width: '100%', margin: 'auto', marginTop: '6rem', maxWidth: '500px' }}>
          <ListItem sx={{ textAlign: 'center' }}>
            <ListItemText sx={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
              {'Add your new Article.'}
              <span role='img' aria-label='robot'>
                🤖
              </span>
            </ListItemText>
          </ListItem>
          <ListItem
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: '2.5rem',
              padding: '1.5rem',
            }}
          >
            <TextField
              id='outlined-basic'
              label='Title'
              variant='outlined'
              value={articleContext.title}
              onChange={e => articleContext.setTitle(e.currentTarget.value)}
            />
            <SelectCategory
              selectedCategory={articleContext.category}
              handleCategory={articleContext.handleCategory}
            />
            <ListItemButton
              sx={{ width: '2rm', gap: '10px', margin: 'auto' }}
              onClick={() => {
                articleContext.createNewArticle()
                articleContext.setNewArticle(false)
                articleContext.setCategory('')
                articleContext.setTitle('')
                articleContext.setText('')
              }}
            >
              Add
              <AddCircleOutlineIcon />
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              width: '100%',
              margin: 'auto',
            }}
          >
            <TextField
              value={articleContext.text}
              onChange={i => articleContext.setText(i.currentTarget.value)}
              placeholder='Insert article content..'
              variant='outlined'
              sx={{ width: '100%', maxWidth: '500px' }}
              multiline
              rows={8}
            />
          </ListItem>
        </List>
      </ThemeProvider>
    </Box>
  )
}

export const UpdateArticle = () => {
  const articleContext = useContext(TodoContext)
  return (
    <Box
      sx={{
        width: '50%',
        height: '30rem',
        marginTop: '10rem',
        margin: 'auto',
        marginBottom: '5rem',
      }}
      component='form'
      autoComplete='off'
    >
      <ThemeProvider theme={muiTheme}>
        <List
          sx={{
            width: '100%',
            margin: 'auto',
            marginTop: '6rem',
            maxWidth: '500px',
          }}
        >
          <ListItem
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: ' 1fr', sm: 'repeat(3, 1fr)' },
              gap: '2.5rem',
              textAlign: 'center',
              marginBottom: { xs: '-5rem', sm: '0rem' },
            }}
          >
            <div>Update article with slug:</div>
            <TextField
              size='small'
              type='search'
              value={articleContext.slugToUpdate}
              onChange={e => articleContext.setSlugToUpdate(e.currentTarget.value)}
              placeholder='Slug...'
            />
            <ListItem
              sx={{
                visibility: {
                  xs: 'hidden',
                  sm: 'visible',
                },
              }}
              role='img'
              aria-label='book'
            >
              📖
            </ListItem>
          </ListItem>
          <ListItem
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
              gap: '2.5rem',
              padding: '1.5rem',
            }}
          >
            <TextField
              id='outlined-basic'
              label='Title'
              variant='outlined'
              value={articleContext.title}
              onChange={e => articleContext.setTitle(e.currentTarget.value)}
            />
            <SelectCategory
              selectedCategory={articleContext.category}
              handleCategory={articleContext.handleCategory}
            />
            <ListItemButton
              sx={{ gap: '10px', margin: 'auto' }}
              onClick={() => {
                articleContext.updateArticleBySlug()
                articleContext.setUpdateArticle(false)
                articleContext.setCategory('')
                articleContext.setSlugToUpdate('')
                articleContext.setTitle('')
                articleContext.setUpdateText('')
              }}
            >
              Update
              <SendIcon />
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              width: '100%',
              margin: 'auto',
            }}
          >
            <TextField
              value={articleContext.updateText}
              onChange={i => articleContext.setUpdateText(i.currentTarget.value)}
              placeholder='Insert article content..'
              variant='outlined'
              sx={{ width: '100%', maxWidth: '500px' }}
              multiline
              rows={8}
            />
          </ListItem>
        </List>
      </ThemeProvider>
    </Box>
  )
}
