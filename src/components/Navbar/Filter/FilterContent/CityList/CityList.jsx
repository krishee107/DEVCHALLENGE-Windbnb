import LocationOnIcon from '@mui/icons-material/LocationOn';
import Stays from '../../../../../stays.json'
import './CityList.css'
import { useEffect, useState } from 'react';

const CityList = (props) => {
    const [city, setCity] = useState(() => localStorage.getItem('city') || 0);

    const cityList = Stays.map((c) => {
        return c.city + ", " + c.country;
    });
    const cityTotal = [...new Set(cityList)]

    const handleCityChange = (c) => {
        setCity(c)
        props.city(city)
    }
    useEffect(() => {
        props.city(city)
    }, [city])




    return (
        <div className="cityList" >
            {cityTotal.map((c, index) => {
                return (
                    <div className="city" key={index} onClick={() => handleCityChange(c)}>
                        <LocationOnIcon style={{ fontSize: `20px` }} />
                        {c}
                    </div>
                )
            })}

        </div>
    )
}

export default CityList