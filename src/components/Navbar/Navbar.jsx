import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';

const Navbar = () => {
    const [modalState, setModalState] = useState(false)

    const handleModalOpen = () => setModalState(true);
    const handleModalClose = () => setModalState(false)

    return (
        <nav className='Nav'>
            <div id="logo"><img src={Logo} alt="Logo" /></div>
            {!modalState ?
                <div id="menu" className='menu' onClick={handleModalOpen}>
                    <div id="location" className='location'>Helsinki, Finland</div>
                    <div id="addGuests" className='addGuests' s>Add guests</div>
                    <div id="lupa" className='lupa'> <SearchIcon /></div>
                </div>
                :
                <div onClick={handleModalClose} className='filterMenu' >
                    <div className="menuBox">
                        <div className="menuOptions">
                            <div id="location" className='location'>
                                <div className="locationBox">
                                    <h5>LOCATION</h5>
                                    <div className="locationCity">Helsinki, Finland</div>
                                </div>
                            </div>
                            <div id="addGuests" className='addGuests' >
                                <div className="guestsBox">
                                    <h5>GUESTS</h5>
                                    <div className="guestText">Add guests</div>
                                </div>

                            </div>
                            <div id="lupa" className='lupa'> <div className="btnSearch"><SearchIcon /> Search</div> </div>
                        </div>
                    </div>
                </div>
            }

        </nav>
    );
}

export default Navbar