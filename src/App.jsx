import { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Stays from './components/Stays/Stays'

function App() {
  const [city, setCity] = useState(0)
  const [guests, setGuests] = useState(0)

  const setSearch = (city, guests) => {
    //Arreglamos el formato de city 
    if (city != 0) {
      const newCity = city.split(",")
      setCity(newCity[0])
    }
    else setCity(0)
    setGuests(guests)
  }



  return (
    <div className="App" style={{ fontFamily: `Montserrat, sans-serif` }}>
      <Navbar search={setSearch} />
      <Stays city={city} guests={guests} />
    </div>
  )
}

export default App
