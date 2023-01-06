import './App.css'

export default function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }
  return (
    // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
<div 
      className="die-face" 
      style={styles}
      onClick={props.holdDice}
      >
      <h2 className='die-num'>{props.value}</h2>
    </div>
  )
}