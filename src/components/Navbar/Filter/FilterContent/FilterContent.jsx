
import { useState, useEffect } from 'react'
import CityList from './CityList/CityList'
import './FilterContent.css'
import AddGuests from './AddGuests/AddGuests';

const FilterContent = (props) => {
    const [guests, setGuests] = useState(() => parseInt(localStorage.getItem('guests')) || 0);
    const [city, setCity] = useState(() => parseInt(localStorage.getItem('city')) || 0);
    const [filter, setfilter] = useState(props.filter);

    useEffect(() => {
        setfilter(props.filter);
    }, [props.filter]);

    const getGuests = (num) => { setGuests(num) }
    useEffect(() => {
        props.guests(guests)
    }, [guests])

    const getCity = (city) => { setCity(city) }
    useEffect(() => {
        props.city(city)
    }, [city])


    return (
        <div className="menuContent">
            <div className="section">
                {filter == 'location' && <CityList city={getCity} />}
            </div>
            <div className="section">
                {filter == 'guests' && <AddGuests guests={getGuests} />}
            </div>
        </div>
    )
}

export default FilterContent