import { useState } from "react"
import House from "./House"

const Stays = () => {
    const [location, setLocation] = useState('Helsinki')
    const [numStays, setNumStays] = useState(12)

    return (
        <div id="stays" style={{ padding: `60px 0` }}>
            <div id="staysHeader" style={{ display: `flex`, alignItems: `center`, justifyContent: `space-between` }}>
                <h1 style={{ fontWeight: `700`, fontSize: `24px`, lineHeight: `29px`, color: `#333333` }}>Stays in Findland</h1>
                <div id="numStays">{numStays}+ stays</div>
            </div>


            <div id="staysList">
                <House />
            </div>
        </div>
    )
}

export default Stays