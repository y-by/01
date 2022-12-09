export default function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online"){
    badgeText = "ONLINE"
  }
  return (
    <section className="container--card">
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img className="card--photo" src={`src/assets/${props.item.coverImg}`} alt=""/>
        <div className="card--container__details">
          <img className="card--star" src="src/assets/star.png" alt=""/>
          <small className="card--rating">{props.item.stats.rating}</small>
          <small className="card--review-count">({props.item.stats.reviewCount}) • </small>
          <small className="card--review-location">{props.item.location}</small>
        </div>
        <h3 className="card--title">{props.item.title}</h3>
        <p className="card--details"><span>From ${props.item.price}</span> / person</p>
      </div>
    </section>
  )
}