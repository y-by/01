export default function Joke(props) {
  return (
    <div className="joke--container">
      {props.setup && <h2 className="setup">{props.setup}</h2>}
      <h4 className="punchline">{props.punchline}</h4>
      <hr />
    </div>
  )
}