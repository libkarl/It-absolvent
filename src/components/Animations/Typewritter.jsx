import { theme } from '../../helpers/theme'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const blinkTextCursor = keyframes`
  from {border-right-color: rgba(0, 0, 0, .75);}
  to {border-right-color: transparent}
`

const Span_TextCursor = styled.span`
  border-right: 2px solid rgba(0, 0, 0, 0.75);
  display: inline;
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`

const P_Container = styled.p`
  text-black;
  font-weight: 400;
  font-size: ${theme.fonts.small};
  display: inline-block;
  margin: 0;
`

export const TypeWriter = ({ value }) => {
  const [text, setText] = useState('')

  useEffect(() => {
    const typeWriter = (text, i = 0, l = text.length) => {
      if (l >= value.length) {
        setText(text.slice(0, i + 1))
        setTimeout(() => {
          typeWriter(text, i + 1)
        }, 100)
      }
    }

    typeWriter(value)
  }, [])

  return (
    <P_Container>
      {text}
      <Span_TextCursor />
    </P_Container>
  )
}

TypeWriter.propTypes = {
  value: PropTypes.string.isRequired,
}
