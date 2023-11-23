import Player from "./components/Player/Player"
import GameBoard from "./components/GameBoard/GameBoard"
import { useState } from "react"
import Log from "./components/Log/Log"

const derivedActivePlayer = (gameTurns) => {
  let currentPlayer = 'X'

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer
}
function App() {

const [gameTurns, setGameTurns] = useState([])

const activePlayer = derivedActivePlayer(gameTurns)

const handleSelectSquare = (rowIdx, colIdx) => {

setGameTurns(prevTurns => {
  const currentPlayer = derivedActivePlayer(prevTurns)

  const updatedTurns = [
    {
    square: {row: rowIdx, col: colIdx}, 
    player: currentPlayer
    }, 
    ...prevTurns]

    return updatedTurns
})

}
  return (
   <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initalName='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
        <Player initalName='Player 2' symbol='O' isActive={activePlayer === 'O'}/>

      </ol>

      <GameBoard onSelectSquare={handleSelectSquare} turns = {gameTurns}/>
    </div>
    <Log turns={gameTurns}/>
   </main>
  )
}

export default App
