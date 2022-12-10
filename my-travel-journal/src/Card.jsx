export default function Card(props){
  return(
    <div className="card">
      <img className="card--image" src={`src/assets/${props.item.imageUrl}`} alt=""/>
      <div className="card--text">
        <div className="card--firstline">
          <p className="card--location">
            <img className="card--location-icon" src="src/assets/Location icon.svg" alt="location icon"/>
            {props.item.location}
          </p>
          <a href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
        </div>
        <h2 className="card-title">{props.item.title}</h2>
        <span className="card--date">{props.item.startDate} - {props.item.endDate}</span>
        <p className="card--main-text">{props.item.description}</p>
      </div>
    </div>
  )
}