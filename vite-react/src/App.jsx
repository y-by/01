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
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </div>
  )
}

export default App
