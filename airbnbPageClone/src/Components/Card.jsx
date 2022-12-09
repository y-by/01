export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online"){
    badgeText = "ONLINE"
  }
  return (
    <section className="container--card">
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img className="card--photo" src={`src/assets/${props.img}`} alt=""/>
        <div className="card--container__details">
          <img className="card--star" src="src/assets/star.png" alt=""/>
          <small className="card--rating">{props.rating}</small>
          <small className="card--review-count">({props.review}) • </small>
          <small className="card--review-location">{props.location}</small>
        </div>
        <h3 className="card--title">{props.title}</h3>
        <p className="card--details"><span>From ${props.price}</span> / person</p>
      </div>
    </section>
  )
}