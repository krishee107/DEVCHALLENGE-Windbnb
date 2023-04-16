import { useState } from 'react'
import './AddGuests.css'

const AddGuests = () => {
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)

    const decrementAdults = () => {
        if (adults > 0) setAdults(adults - 1);
    }
    const incrementAdults = () => setAdults(adults + 1)

    const decrementChildren = () => {
        if (children > 0) setChildren(children - 1);
    }
    const incrementChildren = () => setChildren(children + 1)


    return (
        <div className="guests">
            <div className="adultsBox box">
                <h4>Adults</h4>
                <div className="infoAges">Ages 13 or above</div>
                <form >
                    <button onClick={(e) => { e.preventDefault(); decrementAdults() }}>-</button>
                    <div className="num">{adults}</div>
                    <button onClick={(e) => { e.preventDefault(); incrementAdults() }}>+</button>
                </form>
            </div>

            <div className="childrenBox box">
                <h4>Children</h4>
                <div className="infoAges">Ages 2-12</div>
                <form >
                    <button onClick={(e) => { e.preventDefault(); decrementChildren() }}>-</button>
                    <div className="num">{children}</div>
                    <button onClick={(e) => { e.preventDefault(); incrementChildren() }}>+</button>
                </form>
            </div>
        </div>
    )
}

export default AddGuests