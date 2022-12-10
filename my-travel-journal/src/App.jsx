import { useState } from 'react'
import './App.css'
import Card from './Card'
import data from './data'

function App() {
  const cards = data.map(item => {
    return <Card item={item}/>
  })

  return (
    <div className="App">
      <div className="header">
        <img src="src/assets/world icon.svg" alt="" srcset="" />
        <h1>my travel journal</h1>
      </div>
      {/* <Card /> */}
      {cards}
    </div>
  )
}

export default App
