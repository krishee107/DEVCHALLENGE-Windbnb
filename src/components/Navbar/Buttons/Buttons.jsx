import SearchIcon from '@mui/icons-material/Search';

const Buttons = (props) => {
    return (
        <div id="menu" className='menu' onClick={props.handleFilterOpen}>
            <div id="location" className='location'>Helsinki, Finland</div>
            <div id="addGuests" className='addGuests' s>Add guests</div>
            <div id="lupa" className='lupa'> <SearchIcon /></div>
        </div>
    )
}

export default Buttons