import React from 'react'
import './App.css'
import Welcome from './Welcome'
import GameBoard from './GameBoard'

function App() {
  const [welcome, setWelcome] = React.useState(true)
  const [questions, setQuestions] = React.useState([])
  // let style = {}
  
  function isShow() {
    setWelcome(wasWelcome => !wasWelcome)
    console.log("welcome in...")
  }
  // TODO - move addQuestions to GameBoard
  function addQuestions() {
    fetch('https://opentdb.com/api.php?amount=10&type=multiple')
    .then(res => res.json())
    .then(data => {
      const qArray = data.results
      console.log(data.results)
      let htmlQ = ""
      let htmlA = ""
      for (let q of qArray) {
        htmlQ =`
          <h3>${q.question}</h3>
        `
        htmlA =`
          <button>${q.correct_answer}</button>
        `
         document.getElementById('Q').innerHTML = htmlQ
         document.querySelector('.correct').innerHTML = htmlA
        console.log(q.question.correct_answer)
      }
      // qArray.map(item => {
      //   for (let i = 0; i < qArray.length; i++) {
      //     document.getElementById('Q').textContent = item.question
      //   }
      // })
      // console.log(qArray)
    })

    console.log("loading questions...")
  }

  return (
    <div className="App">
      <img className="yellow-blob blob" src="src/assets/blob yellow.svg" alt=""/>
      <img className="blue-blob blob" src="src/assets/blob blue.svg" alt=""/>
      { welcome && <Welcome isShow={isShow}/>}
      { !welcome && <GameBoard handleClick={addQuestions}/>}
    </div>
  )
}

export default App
