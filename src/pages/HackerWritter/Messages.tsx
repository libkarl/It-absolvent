import react from 'react'
import styled from 'styled-components'

const Div_HackerContainerDenied = styled.div`
  color: red;
  display: block;
  animation: accessAnimation 0.5s 2 0s linear;
  font-size: 3rem;
  text-align: center;
  border: 2px solid;
  padding: 1.5rem;
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Div_HackerContainerGranted = styled.div`
  color: #10ff00;
  display: block;
  animation: accessAnimation 0.5s 2 0s linear;
  font-size: 3rem;
  text-align: center;
  border: 2px solid;
  padding: 1.5rem;
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

type HackerMessage = {
  message: string
}

// eslint-disable-next-line react/prop-types
export const Message = ({ message }) => {
  if (message === 'denied') {
    return <Div_HackerContainerDenied>Access Denied</Div_HackerContainerDenied>
  } else if (message === 'success') {
    return <Div_HackerContainerGranted>Access Granted</Div_HackerContainerGranted>
  }
}
