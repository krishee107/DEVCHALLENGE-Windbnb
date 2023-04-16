import LocationOnIcon from '@mui/icons-material/LocationOn';
import './FilterContent.css'
import Stays from '../../../../stays.json'

const FilterContent = () => {


    const cityList = Stays.map((c) => {
        return c.city + ", " + c.country;
    });
    const cityTotal = [...new Set(cityList)]

    return (
        <div className="menuContent">
            <div className="cityList" >
                {cityTotal.map((c) => {
                    return (
                        <div className="city">
                            <LocationOnIcon style={{ fontSize: `20px` }} />
                            {c}
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default FilterContent