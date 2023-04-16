import SearchIcon from '@mui/icons-material/Search';
import FilterContent from './FilterContent/FilterContent';
import './Filter.css'
import { useState, useEffect } from 'react';

const Filter = (props) => {
    const [filter, setFilter] = useState('location')
    const [guests, setGuests] = useState(() => parseInt(localStorage.getItem('guests')) || 0);

    const getGuests = (num) => { setGuests(num) }
    useEffect(() => {
        localStorage.setItem('guests', guests);
        props.guests(guests)
    }, [guests])


    return (
        <div className="filterBox">
            <div onClick={props.handleFilterClose} className='filterMenu' >
            </div>

            <div className="menuBox">
                <div className="menuOptions">
                    <div id="location" className='location' onClick={() => setFilter('location')}>
                        <div className="locationBox">
                            <h5>LOCATION</h5>
                            <div className="locationCity">Helsinki, Finland</div>
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
                        <div className="btnSearch"><SearchIcon /> Search</div>
                    </div>
                </div>

                <FilterContent filter={filter} guests={getGuests} />
            </div>
        </div >

    )
}

export default Filter