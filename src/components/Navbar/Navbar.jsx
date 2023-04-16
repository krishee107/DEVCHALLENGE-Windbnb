import React, { useState, useEffect } from 'react'
import Logo from '../../assets/logo.png'
import './Navbar.css';
import Buttons from './Buttons/Buttons';
import Filter from './Filter/Filter';

const Navbar = () => {
    const [filterState, setFilterState] = useState(false)
    const [filter, setFilter] = useState('location')
    const [guests, setGuests] = useState(() => parseInt(localStorage.getItem('guests')) || 0);
    const [city, setCity] = useState(() => localStorage.getItem('city') || 0);

    const handleFilterOpen = () => setFilterState(true);
    const handleFilterClose = () => setFilterState(false)

    const getFilter = (filter) => {
        setFilter(filter)
    }
    const getGuests = (num) => { setGuests(num) }
    useEffect(() => {
        localStorage.setItem('guests', guests);
    }, [guests])

    const getCity = (city) => { setCity(city) }
    useEffect(() => {
        localStorage.setItem('city', city);
    }, [city])

    return (
        <nav className='Nav'>
            <div id="logo"><img src={Logo} alt="Logo" /></div>
            {!filterState ? <Buttons handleFilterOpen={handleFilterOpen} getFilter={getFilter} guests={guests} city={city} /> : <Filter handleFilterClose={handleFilterClose} guests={getGuests} city={getCity} />}

        </nav>
    );
}

export default Navbar