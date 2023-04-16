import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import './Navbar.css';
import Buttons from './Buttons/Buttons';
import Filter from './Filter/Filter';

const Navbar = () => {
    const [filterState, setFilterState] = useState(true)
    const [filter, setFilter] = useState('location')

    const handleFilterOpen = () => setFilterState(true);
    const handleFilterClose = () => setFilterState(false)

    const getFilter = (filter) => {
        setFilter(filter)
    }

    return (
        <nav className='Nav'>
            <div id="logo"><img src={Logo} alt="Logo" /></div>
            {!filterState ? <Buttons handleFilterOpen={handleFilterOpen} getFilter={getFilter} /> : <Filter handleFilterClose={handleFilterClose} />}

        </nav>
    );
}

export default Navbar