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

export type Card = {
  id: string
  src: string
  matched: boolean
}

export const createCardsBoard = () => {
  const cardBorad = [...cardImages, ...cardImages].map(
    (card, i): Card => ({
      id: `card${i}`,
      matched: false,
      src: card.src,
    })
  )
  return cardBorad
}
