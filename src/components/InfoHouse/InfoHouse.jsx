import './InfoHouse.css'

const InfoHouse = ({ house }) => {
  return (
    <div className="houseBox">
      <div className="img"><img src={house.photo} alt={house.title} /></div>
      <div className="title">{house.title}</div>
    </div>
  )
}

export default InfoHouse