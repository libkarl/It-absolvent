import { Helmet } from 'react-helmet'
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
type ArgsHackerWritter = {
  text: string
  content: string
}

const CHARS_PER_STROKES = 5

export function HackerWritter() {
  const [sourceCoder, setSourceCoder] = useState('')
  const [content, setContent] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

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

  const removeMessage = () => {
    console.log('remove Message')
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Escape') runScript()
    else removeMessage()
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
      </Div_HackerContainer>
    </>
  )
}
