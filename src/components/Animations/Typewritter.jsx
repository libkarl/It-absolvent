import { theme } from '../../helpers/theme'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const blinkTextCursor = keyframes`
  from {border-right-color: rgba(0, 0, 0, .75);}
  to {border-right-color: transparent}
`

const TextCursor = styled.span`
  border-right: 2px solid rgba(0, 0, 0, 0.75);
  display: inline;
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`

const Container = styled.p`
  text-black;
  font-weight: 400;
  font-size: ${theme.fonts.small};
  display: inline-block;
  margin: 0;
`

function TypeWriter({ value }) {
  const [text, setText] = useState('')

  const typeWriter = (text, i = 0) => {
    if (i < value.length) {
      setText(text.slice(0, i + 1))
      setTimeout(() => {
        typeWriter(text, i + 1)
      }, 100)
    }
  }

  useEffect(() => {
    typeWriter(value)
  }, [])

  return (
    <Container>
      {text}
      <TextCursor />
    </Container>
  )
}

TypeWriter.propTypes = {
  value: PropTypes.string.isRequired,
}

export default TypeWriter
