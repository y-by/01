import React from 'react'
import './App.css'
import Die from './Die'
import {nanoid} from 'nanoid'

function App() {
  const[dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      })
    }
    return newDice
  }

  const diceElements = dice.map(die => <Die key={die.id} value={die.value} />)

  function rollDice() {
    setDice(allNewDice())
  }

  return (
    <main className="App">
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
