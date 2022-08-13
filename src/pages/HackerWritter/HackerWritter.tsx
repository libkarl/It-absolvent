import { Helmet } from 'react-helmet'
import { Message } from './Messages'
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
  color: #2ad400;
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

type ArgsHackerWritter = {
  text: string
  content: string
  i: number
}

const CHARS_PER_STROKES = 5
let i = 0

export const HackerWritter = () => {
  const [sourceCoder, setSourceCoder] = useState('')
  const [content, setContent] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [messageType, setMessageType] = useState('')
  const [isLocked, setIsLocked] = useState(false)

  const containerRef = useRef(null)
  useEffect(() => {
    containerRef.current.focus()
    fetch('code.txt')
      .then(res => res.text())
      .then(text => setSourceCoder(text))
  }, [])
  const runScript = () => {
    setCurrentIndex(currentIndex + CHARS_PER_STROKES)
    setContent(sourceCoder.substring(0, currentIndex))
  }

  const showDenied = () => {
    setMessageType('denied')
    setTimeout(() => {
      setMessageType('')
    }, 3000)
    i = 0
  }

  const showSuccess = () => {
    setMessageType('success')
    setTimeout(() => {
      setMessageType('')
    }, 3000)
    i = 0
  }

  const removeCode = () => {
    setCurrentIndex(0)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Shift') {
      i++
      if (i === 3) {
        showDenied()
      }
    } else if (event.key === 'Control') {
      i++
      if (i === 3) {
        showSuccess()
      }
    } else if (event.key === 'Escape') {
      {
        removeCode()
      }
    } else if (event.key !== 'Shift' || 'Control' || 'Escape') {
      runScript()
    }
  }

  return (
    <>
      <Div_HackerContainer onKeyDown={handleKeyDown} tabIndex={0} ref={containerRef}>
        <Helmet>
          <style>
            {`
            body {
              background-color: black;
              height: 100vh;
              margin: 0;
              font-family: monospace;
            `}
          </style>
        </Helmet>
        <Div_HackerSource>{content}</Div_HackerSource>
        <Div_HackerHelp>
          How to get access granted in hacker typer? Hit Control 3 times. How to get access denied
          in hacker typer hit SHIFT 3 times. How can I clear output? Hit Escape + random key.
        </Div_HackerHelp>
      </Div_HackerContainer>
      <Message message={messageType} />
    </>
  )
}
