import { ActionDrawer } from './ArticleDrawer'
import { BlogList } from './ArticleList'
import { GoSearch } from 'react-icons/go'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { SelectChangeEvent } from '@mui/material/Select'
import { TextField } from '@mui/joy'
import { ThemeProvider } from '@mui/private-theming'
import { blue } from '@mui/material/colors'
import { contextBuild } from '../../helpers/contextBuilder'
import { delayDefinition } from '../../helpers/functions'
import { fetchRequest } from '../../helpers/serviceLayer'
import { muiTheme } from '../../helpers/theme'
import { useContext } from 'react'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

export type Article = {
  id: string
  title: string
  text: string
  slug: string
  category: string
  picture: string
}

const Div_httpContainer = tw.div`
    border
    flex 
    flex-col 
    gap-y-2 
    w-10/12
    border-slate-600 
    rounded-2xl 
    p-2 
    shadow-md 
    text-left 
    characters 
    mx-auto
    mt-28
    mb-16 
    
`

const Div_FromContainer = tw.div`
  mt-8
  p-6
  border-slate-900
  rounded-2xl
  border  
  sm:w-2/3 
  md:w-1/2 
  max-w-sm
  mx-auto 
  mb-12
`

const Div_RequiredVaulue = tw.div` 
  rounded flex 
  flex-row 
  items-center 
  p-2
  justify-between 
  select-none
  mx-auto
`

const H2_CalculatorHeader = tw.h2`
    mt-3
    mb-2
    mx-auto
    text-xl 
    flex-row 
    p-3
    text-center 
    justify-center 
    select-none
    font-family: 'Roboto';
`

const FetchError = styled(Alert)`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
`
const useArticleServer = () => {
  const [responseData, setResponseData] = useState([] as Article[])
  const [error, setError] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [newArticle, setNewArticle] = useState(false as boolean)
  const [updateText, setUpdateText] = useState('')
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [slugToUpdate, setSlugToUpdate] = useState('')
  const [updateArticle, setUpdateArticle] = useState(false as boolean)

  const handleCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string)
  }
  const updateArticleBySlug = () => {
    try {
      fetchRequest.blog.updateArticleBySlug({ slugToUpdate, updateText, category, title })
      console.log(category)
    } catch (err) {
      setError('User is unavailable..')
    }
  }
  const createNewArticle = () => {
    try {
      fetchRequest.blog.addNewPost({ title, text, category })
      console.log('hit add article')
    } catch (err) {
      setError('User is unavailable..')
    }
  }

  const findAllArticles = async () => {
    try {
      let articles = await fetchRequest.blog.getAllArticles()
      setResponseData(articles)
    } catch (err) {
      setError('User is unavailable..')
    }
  }

  const findArticleBySlug = async () => {
    try {
      let articles = await fetchRequest.blog.getArticleBySlug(inputValue)
      let arr: Article[] = []
      arr.push(articles)
      setResponseData(arr)
      setError('success')
      await delayDefinition(1500)
      setError('')
    } catch (err) {
      setResponseData([])
      setError('error')
      await delayDefinition(1500)
      setError('')
    }
  }

  const deleteArticleBySlug = async () => {
    try {
      await fetchRequest.blog.deleteArticleBySlug(inputValue)
      setResponseData([])
    } catch (err) {
      setError('User is unavailable..')
    }
  }

  return {
    deleteArticleBySlug,
    findArticleBySlug,
    findAllArticles,
    createNewArticle,
    updateArticleBySlug,
    handleCategory,
    responseData,
    setResponseData,
    error,
    setError,
    inputValue,
    setInputValue,
    title,
    setTitle,
    category,
    setCategory,
    text,
    setText,
    updateArticle,
    setUpdateArticle,
    newArticle,
    setNewArticle,
    updateText,
    setUpdateText,
    slugToUpdate,
    setSlugToUpdate,
  }
}

export const { ContextProvider: TodoAppContext, Context: TodoContext } =
  contextBuild(useArticleServer)

const ArticleUI = () => {
  const providedContext = useContext(TodoContext)
  return (
    <Div_httpContainer>
      <ThemeProvider theme={muiTheme}>
        <Div_FromContainer>
          <H2_CalculatorHeader>Article Blog</H2_CalculatorHeader>
          <Div_RequiredVaulue>
            <TextField
              id='outlined-basic'
              variant='outlined'
              value={providedContext.inputValue}
              placeholder='Search by slug...'
              onChange={e => providedContext.setInputValue(e.currentTarget.value)}
              sx={{ '& > :not(style)': { m: 1, width: '20ch' } }}
            />
            <button onClick={providedContext.findArticleBySlug}>
              <GoSearch size={20} color={'#1565c0'} />
            </button>
            <Button sx={{ width: '2rm' }} onClick={providedContext.deleteArticleBySlug}>
              <RiDeleteBin6Line size={23} />
            </Button>
          </Div_RequiredVaulue>
          <Div_RequiredVaulue>
            <ActionDrawer />
          </Div_RequiredVaulue>
          {providedContext.error === 'error' ? (
            <FetchError severity='error'>{'User does not exist'}</FetchError>
          ) : null}
          {providedContext.error === 'success' ? (
            <FetchError severity='success'>{'Operation was successfull..'}</FetchError>
          ) : null}
        </Div_FromContainer>
        <BlogList articles={providedContext.responseData} />
      </ThemeProvider>
    </Div_httpContainer>
  )
}

export const ArticleServerApplication = () => {
  return (
    <TodoAppContext>
      <ArticleUI />
    </TodoAppContext>
  )
}
