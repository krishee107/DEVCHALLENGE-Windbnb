
import { useState, useEffect } from 'react'
import CityList from './CityList/CityList'
import './FilterContent.css'
import AddGuests from './AddGuests/AddGuests';
import { Search } from '@mui/icons-material';

const FilterContent = (props) => {

    const [filter, setfilter] = useState(props.filter);
    useEffect(() => {
        setfilter(props.filter);
    }, [props.filter]);

    return (
        <div className="menuContent">
            <div className="section">
                {filter == 'location' && <CityList />}
            </div>
            <div className="section">
                {filter == 'guests' && <AddGuests />}
            </div>
            {filter == 'search' && <Search />}

        </div>
    )
}

export default FilterContent