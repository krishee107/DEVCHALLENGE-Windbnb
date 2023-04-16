import { useState, useEffect } from 'react';
import './AddGuests.css';

const AddGuests = (props) => {
    const [adults, setAdults] = useState(() => parseInt(localStorage.getItem('adults')) || 0);
    const [children, setChildren] = useState(() => parseInt(localStorage.getItem('children')) || 0);
    const [guests, setGuests] = useState(adults + children)

    const updateLocalStorage = () => {
        localStorage.setItem('adults', adults);
        localStorage.setItem('children', children);
    };

    const updateValue = (setValue, value) => {
        setValue(value);
    };

    const handleIncrement = (setValue, value) => {
        updateValue(setValue, value + 1);
    };

    const handleDecrement = (setValue, value) => {
        if (value > 0) {
            updateValue(setValue, value - 1);
        }
    };

    useEffect(() => {
        updateLocalStorage();
        setGuests(adults + children)
    }, [adults, children]);

    useEffect(() => {
        props.guests(guests)
    }, [guests])

    return (
        <div className="guests">
            <div className="adultsBox box">
                <h4>Adults</h4>
                <div className="infoAges">Ages 13 or above</div>
                <form>
                    <button onClick={(e) => { e.preventDefault(); handleDecrement(setAdults, adults) }}>-</button>
                    <div className="num">{adults}</div>
                    <button onClick={(e) => { e.preventDefault(); handleIncrement(setAdults, adults) }}>+</button>
                </form>
            </div>

            <div className="childrenBox box">
                <h4>Children</h4>
                <div className="infoAges">Ages 2-12</div>
                <form>
                    <button onClick={(e) => { e.preventDefault(); handleDecrement(setChildren, children) }}>-</button>
                    <div className="num">{children}</div>
                    <button onClick={(e) => { e.preventDefault(); handleIncrement(setChildren, children) }}>+</button>
                </form>
            </div>
        </div>
    );
};

export default AddGuests;
