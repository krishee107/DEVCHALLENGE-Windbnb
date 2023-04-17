import { useState, useEffect } from "react"
import House from "../House/House"
import StaysList from '../../stays.json';
import './Stays.css'
import InfoHouse from "../InfoHouse/InfoHouse";

const Stays = (props) => {
    const [numStays, setNumStays] = useState(StaysList.length)
    const [city, setCity] = useState(0)
    const [guests, setGuests] = useState(0)
    const [filterCity, setFilterCity] = useState([])
    const [infoState, setInfoState] = useState(false)
    const [infoHouse, setInfoHouse] = useState()

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

    useEffect(() => {
        setNumStays(filterCity.length)
    }, [filterCity]);

    const handleHouseOpen = (house) => {
        setInfoState(true)
        setInfoHouse(house)
    }
    const handleHouseClose = () => {
        setInfoState(false)
    }

    return (
        <div id="stays" className="stays" >
            <div id="staysHeader" className="staysHeader" >
                <h1 className="title">Stays in Findland</h1>
                <div id="numStays">{numStays}+ stays</div>
            </div>


            <div id="staysList" className="staysList">
                {filterCity.map((h, index) => {
                    return (
                        <House key={index} house={h} handle={handleHouseOpen} />
                    );
                })}
            </div>
            {infoState &&
                <div className="modalHouseBox">
                    <div className="modalHouse" onClick={handleHouseClose}></div>
                    <InfoHouse house={infoHouse} />
                </div>
            }

        </div>
    )
}

export default Stays