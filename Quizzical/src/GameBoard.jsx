export default function GameBoard(props) {
  // console.log(props)
  return (
    <div className="game-board">
      <div className="QA">
        <h2 className="Q" id="Q">How would one say goodbye in Spanish?</h2>
        <div className="btn-group">
          <button className="btn correct A">Adiós</button>
          <button className="btn A">Hola</button>
          <button className="btn A">Au Revoir</button>
          <button className="btn A">Salir</button>
        </div>
      </div>
      <div className="QA">
        <h2 className="Q" id="Q">How would one say goodbye in Spanish?</h2>
        <div className="btn-group">
          <button className="btn correct A">Adiós</button>
          <button className="btn A">Hola</button>
          <button className="btn A">Au Revoir</button>
          <button className="btn A">Salir</button>
        </div>
      </div>
      <div className="QA">
        <h2 className="Q" id="Q">How would one say goodbye in Spanish?</h2>
        <div className="btn-group">
          <button className="btn correct A">Adiós</button>
          <button className="btn A">Hola</button>
          <button className="btn A">Au Revoir</button>
          <button className="btn A">Salir</button>
        </div>
      </div>
      <div className="QA">
        <h2 className="Q" id="Q">How would one say goodbye in Spanish?</h2>
        <div className="btn-group">
          <button className="btn correct A">Adiós</button>
          <button className="btn A">Hola</button>
          <button className="btn A">Au Revoir</button>
          <button className="btn A">Salir</button>
        </div>
      </div>
      <div className="QA">
        <h2 className="Q" id="Q">How would one say goodbye in Spanish?</h2>
        <div className="btn-group">
          <button className="btn correct A">Adiós</button>
          <button className="btn A">Hola</button>
          <button className="btn A">Au Revoir</button>
          <button className="btn A">Salir</button>
        </div>
      </div>
      

      <button onClick={props.handleClick}>Add Questions</button>
    </div>
  )
}