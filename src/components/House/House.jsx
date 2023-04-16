import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './House.css'


const House = ({ house }) => {
    return (
        <div id='home'>
            <div id="homeImg" className='homeImg'>
                <img src={house.photo} alt="House img" />
            </div>

            <div id="homeInfo" className='homeInfo' >
                <div id="homeInfoHeader" className='homeInfoHeader'>
                    {house.superHost && <div className="superHost">SUPER HOST</div>}
                    <div className="homeType" >{house.type}</div>
                    <div className="homeStars">
                        <StarIcon style={{ color: `#EB5757` }} /> {house.rating}
                    </div>
                </div>

                <h4 className='homeTitle'>{house.title}</h4>
            </div>

        </div>
    )
}

export default House