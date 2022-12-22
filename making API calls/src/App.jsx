import React from 'react'
import './App.css'

function App() {
  const [starWarsdata, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(0)
  
  console.log("Component rendered")

  React.useEffect(function(){
    console.log("Effect ran")
    fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(data => setStarWarsData(data))
  }, [count, console.log(count, "(from dependencies array)times")])

  return (
    <div className="App">
      <pre>{JSON.stringify(starWarsdata, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
    </div>
  )
}

export default App
