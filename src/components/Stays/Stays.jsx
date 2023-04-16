import { useState } from "react"
import House from "../House/House"
import StaysList from '../../stays.json';
import './Stays.css'

const Stays = () => {
    const [location, setLocation] = useState('Helsinki')
    const [numStays, setNumStays] = useState(12)

    return (
        <div id="stays" className="stays" >
            <div id="staysHeader" className="staysHeader" >
                <h1 className="title">Stays in Findland</h1>
                <div id="numStays">{numStays}+ stays</div>
            </div>


            <div id="staysList" className="staysList">
                {StaysList.map((h, index) => {
                    return (
                        <House key={index} house={h} />
                    );
                })}
            </div>
        </div>
    )
}

export default Stays