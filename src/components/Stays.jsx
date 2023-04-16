import { useState } from "react"

const Stays = () => {
    const [location, setLocation] = useState('Finland')
    const [numStays, setNumStays] = useState(12)

    return (
        <div id="stays" style={{ display: `flex`, alignItems: `center`, justifyContent: `space-between`, padding: `60px 0` }}>
            <h1 style={{ fontWeight: `700`, fontSize: `24px`, lineHeight: `29px`, color: `#333333` }}>Stays in {location}</h1>
            <div id="numStays">{numStays}+ stays</div>
        </div>
    )
}

export default Stays