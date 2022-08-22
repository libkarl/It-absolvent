import { Helmet } from 'react-helmet'
import { Message } from './Messages'
import { delayDefinition } from '../../helpers/functions'
import { theme } from '../../helpers/theme'
import { useEffect, useRef, useState } from 'react'
import React from 'react'
import styled from 'styled-components'

const Div_HackerContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 12px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &:focus {
    outline: none;
  }
  "::-webkit-scrollbar": {
    display: none,
},
`

const Div_HackerSource = styled.div`
  color: ${theme.colors.green};
  font-size: 16px;
  white-space: pre-wrap;
  margin: auto;
  min-height: 95%;
  margin-top: 0px;
  text-align: left;
  &:after {
    content: '_';
    display: inline-block;
    animation: blink 0.75s infinite;
    font-weight: bold;
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const Div_HackerHelp = styled.footer`
  color: #2ad400;
  font-size: 20px;
  white-space: pre-wrap;
  min-height: 5%;
  m-auto
  clear: both;
  padding-bottom: 10px;
`

const CHARS_PER_STROKES = 5
var content: string = ''

export const HackerWritter = () => {
  const [sourceCoder, setSourceCoder] = React.useState('')
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [messageType, setMessageType] = React.useState('')
  const [i, setI] = React.useState(0)
  const containerRef = useRef<any>(null)
  useEffect(() => {
    containerRef?.current?.focus()
    const loadCode = async () => {
      let response = await fetch('code.txt')
      let text = await response.text()
      setSourceCoder(text)
    }
    loadCode()
  }, [])

  const showDenied = async () => {
    setMessageType('denied')
    await delayDefinition(3000)
    setMessageType('')
    setI(0)
  }

  const showSuccess = async () => {
    setMessageType('success')
    await delayDefinition(3000)
    setMessageType('')
    setI(0)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Shift') {
      setI(i + 1)
      if (i === 2) showDenied()
    } else if (event.key === 'Control') {
      setI(i + 1)
      if (i === 2) showSuccess()
    } else if (event.key === 'Escape') {
      setCurrentIndex(0)
    } else if (event.key !== 'Shift' && event.key !== 'Control' && event.key !== 'Escape') {
      setCurrentIndex(currentIndex + CHARS_PER_STROKES)
      content = sourceCoder.substring(0, currentIndex)
    }
  }

  return (
    <>
      <Div_HackerContainer onKeyDown={handleKeyDown} tabIndex={0} ref={containerRef}>
        <Helmet>
          <style>
            {`
            body {
              background-color: ${theme.colors.black};
              height: 100vh;
              margin: 0;
              font-family: monospace;}
            `}
          </style>
        </Helmet>
        <Div_HackerSource>{content}</Div_HackerSource>
        <Div_HackerHelp>
          How to get access granted in hacker app? Hit Control 3 times. How to get access denied in
          hacker app hit SHIFT 3 times. How can I clear output? Hit Escape + random key.
        </Div_HackerHelp>
      </Div_HackerContainer>
      <Message message={messageType} />
    </>
  )
}
