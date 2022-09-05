import { shuffleArray } from './functions'
import ball from '../assets/8-ball.png'
import dinosaur from '../assets/dinosaur.png'
import guy from '../assets/that-guy.png'
import kronos from '../assets/kronos.png'
import potato from '../assets/baked-potato.png'
import rocket from '../assets/rocket.png'
import unicorn from '../assets/skinny-unicorn.png'
import zeppelin from '../assets/zeppelin.png'

const cardImages = [
  { src: ball },
  { src: potato },
  { src: dinosaur },
  { src: kronos },
  { src: rocket },
  { src: unicorn },
  { src: guy },
  { src: zeppelin },
]

// This kind of syntax returns type base on the return type of arrow function createCardsBoard
export type Card = ReturnType<typeof createCardsBoard>[number]

export const createCardsBoard = () =>
  [...cardImages, ...cardImages].map((card, i) => ({
    id: `card${i}`,
    matched: false,
    src: card.src,
  }))
