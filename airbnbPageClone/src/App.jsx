import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'
import data from './data'

export default function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
        />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
      {cards}
      </section>
    </div>
  )
}
