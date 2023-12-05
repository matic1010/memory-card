import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'

const initialCards = [
  {
    id: 1,
    name: 'Nils',
    clicked: false,
  },
  {
    id: 2,
    name: 'Timo',
    clicked: false,
  },
  {
    id: 3,
    name: 'Iyo',
    clicked: false,
  },
  {
    id: 4,
    name: 'Yoshi',
    clicked: false,
  },
  {
    id: 5,
    name: 'Findus',
    clicked: false,
  },
  {
    id: 6,
    name: 'Sammy',
    clicked: false,
  },
  {
    id: 7,
    name: 'Panda',
    clicked: false,
  },
  {
    id: 8,
    name: 'Paulchen',
    clicked: false,
  },
]

function App() {
  const [score, setScore] = useState(0)
  const [highscore, setHighscore] = useState(0)
  const [cards, setCards] = useState(initialCards)

  const shuffle = (array) => {
    let shuffledArr = []

    while (shuffledArr.length < array.length) {
      const randomIndex = Math.floor(Math.random() * array.length)
      if (!shuffledArr.includes(array[randomIndex])) {
        shuffledArr.push(array[randomIndex])
      }
    }

    return shuffledArr
  }

  const handleClick = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    if (clickedCard.clicked) {
      console.log('GAME OVER')
      setScore(0)
      setCards(initialCards)
    } else {
      const updatedCards = cards.map((card) => {
        if (card.id === id) return { ...card, clicked: !card.clicked }
        return card
      })
      const newScore = score + 1
      if (newScore > highscore) setHighscore(newScore)
      setScore(newScore)
      setCards(shuffle(updatedCards))
    }
  }

  return (
    <>
      <h1>Memory Card</h1>
      <p>Try clicking every card without clicking a card twice!</p>
      <p>
        Current Score: {score} Highest score: {highscore}
      </p>
      <Cards cards={cards} handleClick={handleClick} />
    </>
  )
}

export default App
