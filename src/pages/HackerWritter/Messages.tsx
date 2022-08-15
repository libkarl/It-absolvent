import { theme } from '../../helpers/theme'
import react from 'react'
import styled from 'styled-components'

const Div_HackerContainerDenied = styled.div`
  color: ${theme.colors.red};
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
 color: ${theme.colors.green};
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
interface messageProps {
  message: string
}

export const Message = (props: messageProps) => {
  if (props.message === 'denied') {
    return <Div_HackerContainerDenied>Access Denied</Div_HackerContainerDenied>
  } else if (props.message === 'success') {
    return <Div_HackerContainerGranted>Access Granted</Div_HackerContainerGranted>
  }
  return null
}
