import React from 'react'
import Logo from '../assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <nav style={{ display: `flex`, justifyContent: `space-between`, fontFamily: `muli, sans-serif`, fontSize: `14px` }}>
            <div id="logo"><img src={Logo} alt="Logo" /></div>

            <div id="menu" style={{ display: `flex`, borderRadius: `16px`, boxShadow: `0px 1px 6px rgba(0, 0, 0, 0.1)`, alignItems: `center` }}>
                <div id="location" style={{ padding: `20px 15px`, borderRight: `1px solid #F2F2F2`, lineHeight: `16px` }}>Helsinki, Finland</div>
                <div id="addGuests" style={{ padding: `20px 15px`, color: `#BDBDBD`, borderRight: `1px solid #F2F2F2`, lineHeight: `18px` }}>Add guests</div>
                <div id="lupa" style={{ padding: `20px 15px`, color: `#EB5757`, fontSize: `25px` }}> <SearchIcon /></div>
            </div>
        </nav>
    );
}

export default Navbar