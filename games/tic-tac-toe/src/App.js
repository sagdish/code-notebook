import { useState } from 'react';
import Square from './components/Square'
import Results from './components/Results'
import detectWinner from './logic';

import './App.css';

function App() {
  const [state, setState] = useState({
    player: 'x',
    positions: [
      null, null, null,
      null, null, null,
      null, null, null
    ]
  })

  const takeTurn = (position) => {
    const positions = [...state.positions];
    positions[position] = state.player;
    const player = state.player === 'x' ? 'o' : 'x';
    setState({
      player,
      positions
    })
  }

  const winner = detectWinner(state.positions);

  if (winner) {
    alert(`${winner} has won!!!`)
  }

  return (
    <div className="grid">
      <Square position={0} value={state.positions[0]} takeTurn={takeTurn} />
      <Square position={1} value={state.positions[1]} takeTurn={takeTurn} />
      <Square position={2} value={state.positions[2]} takeTurn={takeTurn} />
      <Square position={3} value={state.positions[3]} takeTurn={takeTurn} />
      <Square position={4} value={state.positions[4]} takeTurn={takeTurn} />
      <Square position={5} value={state.positions[5]} takeTurn={takeTurn} />
      <Square position={6} value={state.positions[6]} takeTurn={takeTurn} />
      <Square position={7} value={state.positions[7]} takeTurn={takeTurn} />
      <Square position={8} value={state.positions[8]} takeTurn={takeTurn} />
    </div>
  );
}

export default App;
