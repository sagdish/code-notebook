export default function Results({winner, reset}) {
  return (
    <div className='result'>
      {winner === 'x' && "Cross won the game!"}
      {winner === 'o' && "Circle won the game!"}
      {winner === 'tie' && "It's a Tie!"}
      <button className='btn' onClick={reset}>Play Again</button>
    </div>
  )
}
