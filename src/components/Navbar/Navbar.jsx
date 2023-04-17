import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import './Navbar.css';
import Buttons from './Buttons/Buttons';
import Filter from './Filter/Filter';

const Navbar = (props) => {
    const [filterState, setFilterState] = useState(false)
    const [filter, setFilter] = useState('location')
    const [guests, setGuests] = useState(0);
    const [city, setCity] = useState(0);

    const handleFilterOpen = () => setFilterState(true);
    const handleFilterClose = () => setFilterState(false)

    const getFilter = (filter) => {
        setFilter(filter)
    }
    const getGuests = (num) => { setGuests(num) }

    const getCity = (city) => { setCity(city) }


    const getSearch = () => {
        props.search(city, guests)
        setFilterState(false)
    }

    return (
        <nav className='Nav'>
            <div id="logo" className='logo'><img src={Logo} alt="Logo" /></div>

            {!filterState ?
                <Buttons handleFilterOpen={handleFilterOpen} getFilter={getFilter} guests={guests} city={city} search={getSearch} />
                :
                <Filter handleFilterClose={handleFilterClose} guests={getGuests} city={getCity} search={getSearch} />
            }

        </nav>
    );
}

export default Navbar