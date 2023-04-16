import SearchIcon from '@mui/icons-material/Search';
import FilterContent from './FilterContent/FilterContent';
import './Filter.css'
import { useState } from 'react';

const Filter = (props) => {
    const [filter, setFilter] = useState('location')

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
                            <div className="guestText">Add guests</div>
                        </div>

                    </div>
                    <div id="lupa" className='lupa' onClick={() => setFilter('search')}>
                        <div className="btnSearch"><SearchIcon /> Search</div>
                    </div>
                </div>

                <FilterContent filter={filter} />
            </div>
        </div>

    )
}

export default Filter