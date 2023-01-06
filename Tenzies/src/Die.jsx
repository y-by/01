import './App.css'

export default function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }
  return (
    <div className="die-face" style={styles}>
      <h2 className='die-num'>{props.value}</h2>
    </div>
  )
}