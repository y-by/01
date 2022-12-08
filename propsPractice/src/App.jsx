import './App.css'
import Joke from "./components/Joke"

function App() {

  return (
    <div className="App">
      <Joke 
        setup="I got my daughter a fridge for her birthday." 
        punchline="I can't wait to see her face light up when she opens it."
      />
      <Joke 
        setup="How did the hacker escape the police?" 
        punchline="He just ransomware!"
      />
      <Joke 
        setup="Why don't pirates travel on mountain roads?" 
        punchline="Scurvy."
      />
      <Joke 
        setup="Why do bees stay in the hive in the winter?" 
        punchline="Swarm."
      />
      <Joke 
        punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally." 
      />

    </div>
  )
}

export default App
