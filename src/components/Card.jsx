export default function Card({ card, handleClick }) {
  return (
    <div onClick={() => handleClick(card.id)} className='card'>
      <h2>{card.name}</h2>
    </div>
  )
}
