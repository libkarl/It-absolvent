import { ActionDrawer } from './NewArticleDrawer'
import { BlogList } from './BlogArticles'
import { FiSend } from 'react-icons/fi'
import { GoSearch } from 'react-icons/go'
import { SelectCategory } from './SelectCategory'
import { fetchRequest } from '../../helpers/serviceLayer'
import { response } from 'express'
import { theme } from '../../helpers/theme'
import Alert from '@mui/material/Alert'
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
    flex 
    flex-col 
    gap-y-2 
    w-10/12 
    rounded-2xl 
    p-2 
    shadow-2xl 
    bg-gray-200 
    text-left 
    characters 
    mx-auto
    mt-16
    mb-16 
    
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

const H2_CalculatorHeader = tw.h2`
    mt-3
    mb-2
    mx-auto
    text-xl
    rounded-2xl
    border 
    bg-gray-100  
    flex-row 
    p-3
    text-center 
    justify-center 
    select-none
    shadow
    font-family: 'Roboto';
`
const Div_response = tw.div`
    mb-2
    mx-auto
    text-xl
    rounded-2xl
    border 
    bg-gray-100  
    flex-row 
    p-3
    text-center 
    justify-center 
    select-none
    shadow
    font-family: 'Roboto';
`

const FetchError = styled(Alert)`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
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

export const HttpRequestPage = () => {
  const [responseData, setResponseData] = useState([] as Article[])
  const [error, setError] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [slugToDelete, setSlugToDelete] = useState('')
  const [updateText, setUpdateText] = useState('')
  const [slugToUpdate, setSlugToUpdate] = useState('')

  const findArticleBySlug = async () => {
    try {
      let articles = await fetchRequest.blog.getArticleBySlug(inputValue)
      let arr: Article[] = []
      arr.push(articles)
      setResponseData(arr)
    } catch (err) {
      console.log('fetching error')
      setError('Article does not exist..')
    }
  }

  const findAllArticles = async () => {
    try {
      let articles = await fetchRequest.blog.getAllArticles()
      setResponseData(articles)
    } catch (err) {
      console.log('fetching error')
      setError('User is unavailable..')
    }
  }
  const deleteArticleBySlug = async () => {
    try {
      await fetchRequest.blog.deleteArticleBySlug(inputValue)
      setResponseData([])
    } catch (err) {
      console.log('fetching error')
      setError('User is unavailable..')
    }
  }

  const updateArticleBySlug = () => {
    try {
      let title = 'test title'
      fetchRequest.blog.updateArticleBySlug({ slugToUpdate, updateText })
    } catch (err) {
      console.log('fetching error')
      setError('User is unavailable..')
    }
  }
  return (
    <Div_httpContainer>
      <ActionDrawer error={setError} />
      <Div_FromContainer>
        <H2_CalculatorHeader>Set user name to fetch data.</H2_CalculatorHeader>
        <Div_RequiredVaulue>
          <h2>Find All articles</h2>
          <button onClick={findAllArticles}>
            <GoSearch size={25} />
          </button>
        </Div_RequiredVaulue>
        <h2>Find Article by Slug</h2>
        <Div_RequiredVaulue>
          <Input_Data
            type='search'
            value={inputValue}
            onChange={e => setInputValue(e.currentTarget.value)}
            placeholder='Search by slug...'
          />
          <button onClick={findArticleBySlug}>
            <GoSearch size={25} />
          </button>
        </Div_RequiredVaulue>
        <h2>Update Article by Slug</h2>
        <Div_RequiredVaulue>
          <Input_Data
            type='search'
            value={updateText}
            onChange={e => setUpdateText(e.currentTarget.value)}
            placeholder='Insert text to update...'
          />
          <Input_Data
            type='search'
            value={slugToUpdate}
            onChange={e => setSlugToUpdate(e.currentTarget.value)}
            placeholder='Slug to Update...'
          />
          <button onClick={updateArticleBySlug}>
            <FiSend size={25} />
          </button>
        </Div_RequiredVaulue>
        <h2>Delete article by Slug</h2>
        <Div_RequiredVaulue>
          <Input_Data
            type='search'
            value={slugToDelete}
            onChange={e => setSlugToDelete(e.currentTarget.value)}
            placeholder='Search by slug...'
          />
          <button onClick={deleteArticleBySlug}>
            <GoSearch size={25} />
          </button>
        </Div_RequiredVaulue>
        {error ? (
          <FetchError severity='error'>{error}</FetchError>
        ) : error === '' ? (
          <></>
        ) : (
          <FetchError severity='success'>Operation was successfull</FetchError>
        )}
      </Div_FromContainer>
      <BlogList articles={responseData} />
    </Div_httpContainer>
  )
}
