import { Card, createCardsBoard } from '../../helpers/cards'
import { Helmet } from 'react-helmet'
import { SingleCard } from './SingleCard'
import { delayDefinition } from '../../helpers/functions'
import { theme } from '../../helpers/theme'
import { useState } from 'react'
import React, { useEffect } from 'react'
import styled from 'styled-components'

const Div_MemoryContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 10px;
`

const Div_AppContainer = styled.div`
  max-width: 860px;
  margin: 40px auto;
`

const Div_Turns = styled.div`
  text-size: 2rem;
`

const H1_GameTitle = styled.h1``

const Button_StartGame = styled.button`
  background: none;
  border: 2px solid #fff;
  padding: 6px 12px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-size: 1em;
  &:hover {
    background: ${theme.colors.lightRed};
    color: ${theme.colors.white};
  }
`

export const MemoryGame = () => {
  const [cards, setCards] = useState([] as Card[])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null as Card | null)
  const [choiceTwo, setChoiceTwo] = useState(null as Card | null)
  const [closed, setClosed] = useState(false)

  // shuffle cards
  const shuffleCards = () => {
    // duplicate card into the shuffledCards array
    const cardBoard = createCardsBoard()
    setCards(cardBoard)
    setTurns(0)
  }

  const handleChoice = async (card: Card) => {
    if (choiceOne) {
      setChoiceTwo(card)
    } else {
      setChoiceOne(card)
    }
    if (choiceOne && choiceOne.id !== card.id) {
      setClosed(true)
      if (choiceOne.src === card?.src) {
        setCards(prevState =>
          prevState.map(card => (card.src === choiceOne.src ? { ...card, matched: true } : card))
        )
        resetTurn()
      } else {
        await delayDefinition(800)
        resetTurn()
      }
    }
  }

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setClosed(false)
  }

  return (
    <Div_AppContainer>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Drawn - React Memory Game</title>
        <style>
          {`
            body {
               margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                 sans-serif;
                font-size: 1.5rem;
                text-align: center;
                background: ${theme.background.memorygameBG};
                color: ${theme.colors.white};
            `}
        </style>
      </Helmet>
      <H1_GameTitle>Drawn memory Game</H1_GameTitle>
      <Button_StartGame
        onClick={() => {
          shuffleCards()
          setTurns(0)
        }}
      >
        NewGame
      </Button_StartGame>
      <Div_MemoryContainer>
        {cards.map(card => (
          <SingleCard
            closed={closed}
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            isDown={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </Div_MemoryContainer>
      <Div_Turns>
        <h3>Turns:</h3>
        <p>{turns}</p>
      </Div_Turns>
    </Div_AppContainer>
  )
}
