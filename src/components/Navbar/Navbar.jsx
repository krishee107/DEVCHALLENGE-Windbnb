import React, { useState, useEffect } from 'react'
import Logo from '../../assets/logo.png'
import './Navbar.css';
import Buttons from './Buttons/Buttons';
import Filter from './Filter/Filter';

const Navbar = () => {
    const [filterState, setFilterState] = useState(true)
    const [filter, setFilter] = useState('location')
    const [guests, setGuests] = useState(() => parseInt(localStorage.getItem('guests')) || 0);

    const handleFilterOpen = () => setFilterState(true);
    const handleFilterClose = () => setFilterState(false)

    const getFilter = (filter) => {
        setFilter(filter)
    }
    const getGuests = (num) => { setGuests(num) }
    useEffect(() => {
        localStorage.setItem('guests', guests);
    }, [guests])

    return (
        <nav className='Nav'>
            <div id="logo"><img src={Logo} alt="Logo" /></div>
            {!filterState ? <Buttons handleFilterOpen={handleFilterOpen} getFilter={getFilter} guests={guests} /> : <Filter handleFilterClose={handleFilterClose} guests={getGuests} />}

        </nav>
    );
}

export default Navbar