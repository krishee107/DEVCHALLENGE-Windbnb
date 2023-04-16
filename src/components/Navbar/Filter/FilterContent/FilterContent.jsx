
import { useState, useEffect } from 'react'
import CityList from './CityList/CityList'
import './FilterContent.css'
import AddGuests from './AddGuests/AddGuests';
import { Search } from '@mui/icons-material';

const FilterContent = (props) => {
    const [guests, setGuests] = useState(() => parseInt(localStorage.getItem('guests')) || 0);
    const [filter, setfilter] = useState(props.filter);

    useEffect(() => {
        setfilter(props.filter);
    }, [props.filter]);

    const getGuests = (num) => { setGuests(num) }
    useEffect(() => {
        localStorage.setItem('guests', guests);
        props.guests(guests)
    }, [guests])


    return (
        <div className="menuContent">
            <div className="section">
                {filter == 'location' && <CityList />}
            </div>
            <div className="section">
                {filter == 'guests' && <AddGuests guests={getGuests} />}
            </div>
        </div>
    )
}

export default FilterContent