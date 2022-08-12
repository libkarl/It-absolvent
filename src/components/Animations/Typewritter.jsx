/* eslint-disable react/prop-types */
import { theme } from '../../helpers/theme'
import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const Span_TextCursor = styled.span`
  border-right: 2px solid rgba(0, 0, 0, 0.75);
  display: inline;
  animation: cursor 0.7s steps(44) infinite normal;
  @keyframes cursor {
    from {
      border-right-color: rgba(0, 0, 0, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }
`

const P_Container = styled.p`
  text-black;
  font-weight: 400;
  font-size: ${theme.fonts.small};
  display: inline-block;
  margin: 0;
`
type Args = {
  text: string,
  i: number,
  value: string,
}

// TODO: clearTimeout

export const TypeWriter = ({ value }) => {
  const [text, setText] = useState('')

  useEffect(() => {
    const typeWriter = (text, i = 0) => {
      if (text.length >= value.length) {
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
