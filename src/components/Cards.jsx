import Card from './Card'

export default function Cards({ cards, handleClick }) {
  return (
    <ul className='cards'>
      {cards.map((card) => (
        <Card key={card.id} card={card} handleClick={handleClick} />
      ))}
    </ul>
  )
}
