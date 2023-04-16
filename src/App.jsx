import Navbar from "./components/Navbar"
import Stays from './components/Stays'

function App() {

  return (
    <div className="App" style={{ padding: `40px 90px`, fontFamily: `Montserrat, sans-serif` }}>
      <Navbar />
      <Stays />
    </div>
  )
}

export default App
