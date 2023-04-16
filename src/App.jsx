import Navbar from "./components/Navbar/Navbar"
import Stays from './components/Stays/Stays'

function App() {

  return (
    <div className="App" style={{ fontFamily: `Montserrat, sans-serif`, position: `relative` }}>
      <Navbar />
      <Stays />
    </div>
  )
}

export default App
