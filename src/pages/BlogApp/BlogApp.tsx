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

const Div_HttpContainer = styled.div`
  margin: auto;
  display: flex;
  padding: 0.5rem;
  margin-bottom: 4rem;
  margin-top: 7rem;
  text-align: left;
  flex-direction: column;
  width: 83.333333%;
  border-radius: 1rem;
  row-gap: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`
const Div_FromContainer = styled.div`
  padding: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  max-width: 24rem;
  border-radius: 1rem;
  border-width: 1px;
  margin: auto;

  @media (min-width: 640px) {
    width: 66.666667%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`

const Div_RequiredVaulue = styled.div`
  display: flex;
  padding: 0.5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.25rem;
  user-select: none;
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
    } catch (err) {
      setError('User is unavailable..')
      throw new Error('User is unavailable..')
    }
  }
  const createNewArticle = () => {
    try {
      fetchRequest.blog.addNewPost({ title, text, category })
    } catch (err) {
      setError('User is unavailable..')
      throw new Error('Can not create new article..')
    }
  }

  const findAllArticles = async () => {
    try {
      let articles = await fetchRequest.blog.getAllArticles()
      setResponseData(articles)
    } catch (err) {
      setError('User is unavailable..')
      throw new Error('Can not find articles..')
    }
  }

  const findArticleBySlug = async () => {
    try {
      setResponseData([await fetchRequest.blog.getArticleBySlug(inputValue)])
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
      throw new Error('Can not delete article..')
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
    <Div_HttpContainer>
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
    </Div_HttpContainer>
  )
}

export const ArticleServerApplication = () => {
  return (
    <TodoAppContext>
      <ArticleUI />
    </TodoAppContext>
  )
}
