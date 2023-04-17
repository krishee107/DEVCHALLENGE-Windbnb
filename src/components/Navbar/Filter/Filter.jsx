import SearchIcon from '@mui/icons-material/Search';
import FilterContent from './FilterContent/FilterContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import './Filter.css'
import { useState, useEffect } from 'react';

const Filter = (props) => {
    const [filter, setFilter] = useState('location')
    const [guests, setGuests] = useState(0);
    const [city, setCity] = useState(0);
    const isMobile = useMediaQuery('(max-width:600px)');

    const getGuests = (num) => { setGuests(num) }
    useEffect(() => {
        props.guests(guests)
    }, [guests])

    const getCity = (city) => { setCity(city) }
    useEffect(() => {
        props.city(city)
    }, [city])


    return (
        <div>
            {isMobile ?
                //Mobile version
                <div className="filterBox">
                    <div onClick={props.handleFilterClose} className='filterMenu' >
                    </div>

                    <div className="menuBox">
                        <div className="menuBoxHeader">
                            <div className="menuBoxHeaderInfo">Edit your search</div>
                            <div className="menuBoxHeaderClose" onClick={props.handleFilterClose}><CloseIcon /></div>
                        </div>
                        <div className="menuOptions">
                            <div id="location" className='location' onClick={() => setFilter('location')}>
                                <div className="locationBox">
                                    <h5>LOCATION</h5>
                                    <div className="locationCity">
                                        {city != 0 ? <div style={{ color: `black` }}>{city}</div> : <div > Add location</div>}
                                    </div>
                                </div>
                            </div>
                            <div id="addGuests" className='addGuests' onClick={() => setFilter('guests')}>
                                <div className="guestsBox">
                                    <h5>GUESTS</h5>
                                    <div className="guestText">
                                        {(guests > 0) ? <div style={{ color: `black` }}>{guests} guests</div> : <div> Add guests</div>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <FilterContent filter={filter} guests={getGuests} city={getCity} />

                        <div id="lupa" className='lupa' onClick={() => setFilter('search')}>
                            <div className="btnSearch" onClick={props.search}><SearchIcon /> Search</div>
                        </div>
                    </div>
                </div >
                :
                //Desktop version
                <div className="filterBox">
                    <div onClick={props.handleFilterClose} className='filterMenu' >
                    </div>

                    <div className="menuBox">
                        <div className="menuOptions">
                            <div id="location" className='location' onClick={() => setFilter('location')}>
                                <div className="locationBox">
                                    <h5>LOCATION</h5>
                                    <div className="locationCity">
                                        {city != 0 ? <div style={{ color: `black` }}>{city}</div> : <div > Add location</div>}
                                    </div>
                                </div>
                            </div>
                            <div id="addGuests" className='addGuests' onClick={() => setFilter('guests')}>
                                <div className="guestsBox">
                                    <h5>GUESTS</h5>
                                    <div className="guestText">
                                        {(guests > 0) ? <div style={{ color: `black` }}>{guests} guests</div> : <div> Add guests</div>}
                                    </div>
                                </div>

                            </div>
                            <div id="lupa" className='lupa' onClick={() => setFilter('search')}>
                                <div className="btnSearch" onClick={props.search}><SearchIcon /> Search</div>
                            </div>
                        </div>

                        <FilterContent filter={filter} guests={getGuests} city={getCity} />
                    </div>
                </div >
            }
        </div>
    )
}

export default Filter