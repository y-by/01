import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Card from './Components/Card'

export default function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Card 
        img="katie-zaferes.png" 
        rating="5.0"
        review="(6) • USA"
        title="Life lessons with Katie Zaferes"
        price={136}
        />
    </div>
  )
}
