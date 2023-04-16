import React from 'react'
import Logo from '../../assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';

const Navbar = () => {

    return (
        <nav className='Nav'>
            <div id="logo"><img src={Logo} alt="Logo" /></div>

            <div id="menu" className='menu'>
                <div id="location" className='location'>Helsinki, Finland</div>
                <div id="addGuests" className='addGuests' s>Add guests</div>
                <div id="lupa" className='lupa'> <SearchIcon /></div>
            </div>
        </nav>
    );
}

export default Navbar