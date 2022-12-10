

export default function Card(){
  return(
    <div className="card">
      <img className="card--image" src="src/assets/Geirangerfjord.png" alt=""/>
      <div className="card--text">
        <div className="card--firstline">
          
          <p className="card--location"><img className="card--location-icon" src="src/assets/Location icon.svg" alt="location icon"/>NORWAY</p>
          <a href="https://maps.google.com">View on Google Maps</a>
        </div>
        <h2 className="card-title">Geirangerfjord</h2>
        <span className="card--date">12 Jan, 2021 - 24 Jan, 2021</span>
        <p className="card--main-text">The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.</p>
      </div>
    </div>
  )
}