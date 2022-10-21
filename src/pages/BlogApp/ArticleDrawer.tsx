import * as React from 'react'
import { AddArticle, UpdateArticle } from './BlogActions'
import { TodoContext } from './BlogApp'
import { useContext } from 'react'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import ListItem from '@mui/material/ListItem'

export const ActionDrawer = () => {
  const articleContext = useContext(TodoContext)
  return (
    <div>
      {
        <React.Fragment key={'Add Article'}>
          <ListItem sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <Button
              variant='outlined'
              onClick={() => {
                articleContext.setNewArticle(true)
              }}
            >
              Add
            </Button>
            <Button variant='outlined' onClick={articleContext.findAllArticles}>
              All
            </Button>
            <Button
              variant='outlined'
              onClick={() => {
                articleContext.setUpdateArticle(true)
              }}
            >
              Update
            </Button>
          </ListItem>
          <Drawer
            anchor='top'
            open={articleContext.newArticle}
            onClose={() => {
              articleContext.setNewArticle(false)
            }}
          >
            {AddArticle()}
          </Drawer>
          <Drawer
            anchor='top'
            open={articleContext.updateArticle}
            onClose={() => {
              articleContext.setUpdateArticle(false)
            }}
          >
            {UpdateArticle()}
          </Drawer>
        </React.Fragment>
      }
    </div>
  )
}
