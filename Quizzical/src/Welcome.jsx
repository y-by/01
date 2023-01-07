import React from "react"
export default function Welcome(props) {

  return (
    <div className="welcome-container">
      <h1>Quizzical</h1>
      <h3>Some description if needed</h3>
      <button onClick={props.isShow}>Start quiz</button>
    </div>
  )
}