import React, { useState } from 'react'



const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({onSelectSquare, turns}) {

    let gameBoard = initialGameBoard;

    for(const turn of turns) {
        const {square, player} = turn
        const {row, col} = square

        gameBoard[row][col] = player
    }


    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // const handleSelectSquare = (rowIndx, colIdx) => {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         updatedBoard[rowIndx][colIdx] = activePlayerSymbol
    //         return updatedBoard
    //     })

    //     onSelectSquare()
    // } 

  return (
    <ol id='game-board'>
        {gameBoard.map((row, rowIdx)=> <li key={rowIdx}>
            <ol>
                {row.map((symbol, colIdx) =><li key={colIdx}>
                    <button onClick={() => onSelectSquare(rowIdx, colIdx)} disabled={symbol !== null}>{symbol}</button>
                    </li> )}
            </ol>
        </li>)}
    </ol>
  )
}
