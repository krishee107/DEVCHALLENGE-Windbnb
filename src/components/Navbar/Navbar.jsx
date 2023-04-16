import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import './Navbar.css';
import Buttons from './Buttons/Buttons';
import Filter from './Filter/Filter';

const Navbar = () => {
    const [filterState, setFilterState] = useState(false)

    const handleFilterOpen = () => setFilterState(true);
    const handleFilterClose = () => setFilterState(false)

    return (
        <nav className='Nav'>
            <div id="logo"><img src={Logo} alt="Logo" /></div>
            {!filterState ? <Buttons handleFilterOpen={handleFilterOpen} /> : <Filter handleFilterClose={handleFilterClose} />}

        </nav>
    );
}

export default Navbar