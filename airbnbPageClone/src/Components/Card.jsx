export default function Card() {
  return (
    <section className="container--card">
      <div className="card">
        <img className="card--photo" src="src/assets/katie-zaferes.png" alt=""/>
        <div className="card--container__details">
          <img className="card--star" src="src/assets/star.png" alt=""/>
          <small className="card--rating">5.0</small>
          <small className="card--review-count">(6)*USA</small>
        </div>
        <h3 className="card--title">Life lessons with Katie Zaferes</h3>
        <p className="card--details"><span>From $136</span> / person</p>
      </div>
    </section>
  )
}