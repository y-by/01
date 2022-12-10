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
      {/* <Card /> */}
      {cards}
    </div>
  )
}

export default App
