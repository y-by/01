import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)
        
  function toggleDarkMode() {
      setIsDarkMode(isDarkMode => !isDarkMode)
      console.log(isDarkMode)
  }
  
return (
  <div className="container">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={isDarkMode}/>
      <Main darkMode={isDarkMode}/>
  </div>
)
}

export default App
