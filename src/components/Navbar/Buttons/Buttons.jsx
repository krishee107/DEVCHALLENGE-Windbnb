import SearchIcon from '@mui/icons-material/Search';

const Buttons = (props) => {
    return (
        <div id="menu" className='menu' >
            <div id="location" className='location' onClick={() => { props.getFilter('location'), props.handleFilterOpen() }} >
                {props.city != 0 ? <div style={{ color: `black` }}>{props.city}</div> : <div > Add location</div>}
            </div>
            <div id="addGuests" className='addGuests' onClick={() => { props.getFilter('guests'), props.handleFilterOpen() }} >
                {props.guests > 0 ? <div style={{ color: `black` }}>{props.guests} guests</div> : <div> Add guests</div>}
            </div>
            <div id="lupa" className='lupa' onClick={props.search}> <SearchIcon /></div>
        </div>
    )
}

export default Buttons