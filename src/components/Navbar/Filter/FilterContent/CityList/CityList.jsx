import LocationOnIcon from '@mui/icons-material/LocationOn';
import Stays from '../../../../../stays.json'


const CityList = () => {
    const cityList = Stays.map((c) => {
        return c.city + ", " + c.country;
    });
    const cityTotal = [...new Set(cityList)]

    return (
        <div className="cityList" >
            {cityTotal.map((c, index) => {
                return (
                    <div className="city" key={index}>
                        <LocationOnIcon style={{ fontSize: `20px` }} />
                        {c}
                    </div>
                )
            })}

        </div>
    )
}

export default CityList