import { useState, useEffect } from "react"
import House from "../House/House"
import StaysList from '../../stays.json';
import './Stays.css'

const Stays = (props) => {
    const [numStays, setNumStays] = useState(12)
    const [city, setCity] = useState(0)
    const [guests, setGuests] = useState(0)
    const [filterCity, setFilterCity] = useState([])

    useEffect(() => {
        setCity(props.city);
        setGuests(props.guests);
    }, [props.city, props.guests]);

    useEffect(() => {
        //Si tenemos ciudad y guests
        if (city != 0 && guests != 0) {
            const newList = StaysList.filter((house) => {
                if (house.city == city && house.maxGuests >= guests) return house;
            })
            setFilterCity(newList)
        }
        //Si tenemos ciudad y no guests
        else if (city != 0 && guests == 0) {
            const newList = StaysList.filter((house) => {
                if (house.city == city) return house;
            })
            setFilterCity(newList)
        }
        //Si tenemos guests pero no ciudad
        else if (city == 0 && guests != 0) {
            const newList = StaysList.filter((house) => {
                if (house.maxGuests >= guests) return house;
            })
            setFilterCity(newList)
        }
        //Si no tenemos nada
        else {
            setFilterCity(StaysList)
        }
    }, [city, guests]);

    return (
        <div id="stays" className="stays" >
            <div id="staysHeader" className="staysHeader" >
                <h1 className="title">Stays in Findland</h1>
                <div id="numStays">{numStays}+ stays</div>
            </div>


            <div id="staysList" className="staysList">
                {filterCity.map((h, index) => {
                    return (
                        <House key={index} house={h} />
                    );
                })}
            </div>
        </div>
    )
}

export default Stays