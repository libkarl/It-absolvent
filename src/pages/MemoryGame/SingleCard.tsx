import { Card } from '../../helpers/cards'
import React, { MouseEventHandler } from 'react'
import back from '../../assets/back.png'
import styled from 'styled-components'

const Div_Cards = styled.div`
  cursor: pointer;
  position: relative;
  padding: 5px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  backdrop-filter: blur(5px);
`

const Img_Front = styled.img<Img_MemoryCard>`
  position: absolute;
  display: block;
  border: 2px solid #fff;
  border-radius: 6px;
  transform: ${props => (props.isDown ? 'rotateX(0deg)' : 'rotateX(90deg)')};
  transition: all ease-in 0.2s;
  transition-delay: ${props => (props.isDown ? '0.4s' : '0s')};
`

const Img_Back = styled.img<Img_MemoryCard>`
  width: 100%;
  display: block;
  border: 2px solid #fff;
  border-radius: 6px;
  transform: ${props => (props.isDown ? 'rotateX(90deg)' : 'rotateX(0deg)')};
  transition: all ease-in 0.2s;
  transition-delay: ${props => (props.isDown ? '0s' : '0.4s')};
`

type CardProps = {
  card: Card
  handleChoice: (card: Card) => void
  isDown: boolean
  closed: boolean
}

type Img_MemoryCard = {
  src: string
  isDown: boolean
}

export const SingleCard = (props: CardProps) => {
  return (
    <Div_Cards>
      <div>
        <Img_Front src={props.card.src} isDown={props.isDown} alt='card front' />
        <Img_Back
          onClick={() => {
            if (props.closed) return
            props.handleChoice(props.card)
          }}
          className='back'
          src={back}
          alt='card back'
          isDown={props.isDown}
        />
      </div>
    </Div_Cards>
  )
}
