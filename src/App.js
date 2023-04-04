import React from 'react'
import Card from "./components/cards/cards.jsx"
import Navbar from './components/navbar/navbar.jsx'
import Card2 from "./components/cards2/cards2.jsx"
import Slider1 from "./container/slider/slider.jsx" 
import Slider2 from "./container/slider2/slider2.jsx"
import Slider3 from "./container/slider3/slider3.jsx"

function App() {
  return (
    <div>
      <Navbar/>
      <Card/>
      <Card2/>
      <Slider1/>
      <Slider2/>
      <Slider3/>
    </div>
  )
}

export default App;