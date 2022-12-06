import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Navbar />
      <Main />
      <img className='half-big-logo' src="src/assets/reactjs-icon 2.png" alt=""/>
    </div>
  )
}

export default App
