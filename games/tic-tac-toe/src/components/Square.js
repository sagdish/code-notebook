import Circle from './Circle'
import Cross from './Cross'

export default function Square({ position, value, takeTurn }) {

  const handleClick = position => {
    if (value === null) takeTurn(position)
  }

  return (
    <div className="square" onClick={() => handleClick(position)}>
      {value === 'x' && <Cross />}
      {value === 'o' && <Circle /> }
    </div>
  )
}
