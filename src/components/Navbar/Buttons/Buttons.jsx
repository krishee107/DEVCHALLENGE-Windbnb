import SearchIcon from '@mui/icons-material/Search';

const Buttons = (props) => {

    return (
        <div id="menu" className='menu' onClick={props.handleFilterOpen} >
            <div id="location" className='location' onClick={props.getFilter('location')}>Helsinki, Finland</div>
            <div id="addGuests" className='addGuests' onClick={props.getFilter('guests')}>
                {props.guests > 0 ? <div style={{ color: `black` }}>{props.guests} guests</div> : <div> Add guests</div>}
            </div>
            <div id="lupa" className='lupa' onClick={props.getFilter('search')}> <SearchIcon /></div>
        </div>
    )
}

export default Buttons