import React from 'react'
import { useState } from 'react'

export default function Player({initalName, symbol}) {

const [playerName, setPlayerName] = useState(initalName)
const [isEdit, setIsEdit] = useState(false)

const handleEditClick = () => {
    setIsEdit(isEdit => !isEdit)
}

const handleChange = (event) => {
    setPlayerName(name => event.target.value)
}

  return (
    <li>
        <span className="player">
            {isEdit ? 
            <input type="text" value={playerName}  onChange={handleChange}/> :
            <span className="player-name">{playerName}</span>
            }
        <span className="player-name">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEdit ? 'Save' : 'Edit'}</button>
    </li>
  )
}
