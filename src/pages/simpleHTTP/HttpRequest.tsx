import { GoSearch } from 'react-icons/go'
import { fetchRequest } from '../../helpers/serviceLayer'
import { theme } from '../../helpers/theme'
import Alert from '@mui/material/Alert'
import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

type Users = {
  id: string
  name: string
  city: string
  age: number
}[]

const Div_httpContainer = tw.div`
    flex 
    flex-col 
    gap-y-2 
    w-full 
    sm:w-2/3 
    md:w-1/2 
    max-w-sm 
    rounded-2xl 
    p-2 
    shadow-2xl 
    bg-gray-200 
    text-left 
    characters 
    mx-auto 
    mt-96
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
  const [responseData, setResponseData] = useState([] as Users)
  const [error, setError] = useState('')
  const [inputValue, setInputValue] = useState('')
  const requestData = async () => {
    try {
      const response = await fetchRequest.filterUsers(inputValue)
      setResponseData(await response.json())
    } catch (err) {
      setError('User is unavailable..')
    }
  }
  return (
    <Div_httpContainer>
      <H2_CalculatorHeader>Set user name to fetch data.</H2_CalculatorHeader>
      <Div_RequiredVaulue>
        <Input_Data
          type='search'
          value={inputValue}
          onChange={e => setInputValue(e.currentTarget.value)}
          placeholder='Search by name...'
        />
        <button onClick={requestData}>
          <GoSearch size={25} />
        </button>
      </Div_RequiredVaulue>
      {error ? (
        <FetchError severity='error'>{error}</FetchError>
      ) : (
        <div>
          {responseData.map(el => (
            <Div_response key={el.id}>
              <li>User name: {el.name}</li>
              <li>User city: {el.city}</li>
              <li>User age: {el.age}</li>
            </Div_response>
          ))}
        </div>
      )}
    </Div_httpContainer>
  )
}
