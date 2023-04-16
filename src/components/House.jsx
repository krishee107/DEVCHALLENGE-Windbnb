import React from 'react'

const House = ({ house }) => {
    return (
        <div id='home'>
            <div id="homeImg">
                <img src={house.photo} alt="House img" style={{ maxWidth: `100%`, borderRadius: `24px`, maxHeight: '269px', width: `395px` }} />
            </div>

            <div id="homeInfo">
                <div id="homeInfoHeader" style={{ display: `flex`, justifyContent: `space-between` }}>
                    {house.superHost && <div className="superHost">SUPER HOST</div>}
                    <div className="homeType">{house.type}</div>
                    <div className="homeStars">{house.rating}</div>
                </div>

                <h4>{house.title}</h4>
            </div>

        </div>
    )
}

export default House