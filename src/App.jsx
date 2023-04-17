import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Stays from './components/Stays/Stays'

function App() {
  const [city, setCity] = useState()
  const [guests, setGuests] = useState()

  const setSearch = (city, guests) => {
    setCity(city)
    setGuests(guests)

    console.log(city, guests)
  }

  return (
    <div className="App" style={{ fontFamily: `Montserrat, sans-serif` }}>
      <Navbar search={setSearch} />
      <Stays />
    </div>
  )
}

export default App
