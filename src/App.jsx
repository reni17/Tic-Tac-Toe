import Player from "./components/Player/Player"

function App() {
  

  return (
   <main>
    <div id="game-container">
      <ol id="players">
        <Player initalName='Player 1' symbol='X'/>
        <Player initalName='Player 2' symbol='0'/>

      </ol>

      GAME BOARD
    </div>
   </main>
  )
}

export default App