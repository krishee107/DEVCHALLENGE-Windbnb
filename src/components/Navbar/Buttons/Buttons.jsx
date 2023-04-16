import SearchIcon from '@mui/icons-material/Search';

const Buttons = (props) => {

    return (
        <div id="menu" className='menu' onClick={props.handleFilterOpen} >
            <div id="location" className='location' onClick={props.getFilter('location')}>Helsinki, Finland</div>
            <div id="addGuests" className='addGuests' onClick={props.getFilter('guests')}>Add guests</div>
            <div id="lupa" className='lupa' onClick={props.getFilter('search')}> <SearchIcon /></div>
        </div>
    )
}

export default Buttons