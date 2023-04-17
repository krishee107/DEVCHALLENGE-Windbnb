import './InfoHouse.css'
import StarIcon from '@mui/icons-material/Star';
import CountertopsIcon from '@mui/icons-material/Countertops';
import WifiIcon from '@mui/icons-material/Wifi';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import PoolIcon from '@mui/icons-material/Pool';
import HotTubIcon from '@mui/icons-material/HotTub';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';

const InfoHouse = ({ house }) => {
  return (
    <div className="houseBox">
      <div className="header">
        <div className="title">{house.title}</div>
        <div className="info"><div><StarIcon />{house.rating}</div>, <span>9 evaluaciones</span> · <span>{house.city}, {house.country}</span></div>
      </div>
      <div className="img"><img src={house.photo} alt={house.title} /></div>

      <div className="houseBoxContent">
        {house.beds ?
          <div className="type">{house.type}: Alojamiento con {house.beds} camas.</div>
          :
          <div className="type">{house.type}.</div>
        }
        <div className="owner">Anfitrion: Cristina</div>


        <div className="houseInfo">
          <div className="maxGuests">{house.maxGuests} viajeros</div>
          ·
          {house.beds ?
            <div className="rooms">{house.beds} dormitorios.</div>
            :
            <div className="rooms">1 dormitorio</div>
          }
          ·
          {house.beds ?
            <div className="beds">{house.beds} camas.</div>
            :
            <div className="beds">1 cama</div>
          }
          ·
          <div className="bathrooms">1 baño</div>
        </div>

        <div className="houseDescription">
          <p>
            Bienvenido a "Kotipesä", una hermosa cabaña de madera ubicada en las profundidades del bosque finlandés. La casa ha sido construida en un estilo tradicional finlandés, con madera tallada a mano y un techo de paja.
          </p>
          <p>
            Al entrar a la casa, te encontrarás con una acogedora sala de estar con un sofá cómodo, una chimenea y grandes ventanales que dan al bosque. En la esquina de la sala, encontrarás una pequeña biblioteca y una selección de juegos de mesa para que puedas disfrutar durante tu estadía.
          </p>
          <p>
            La cocina está totalmente equipada con todo lo que necesitas para preparar tus comidas, incluyendo una cocina de leña, una nevera pequeña y una selección de utensilios de cocina. Si prefieres cocinar al aire libre, hay una parrilla en la terraza que te permitirá disfrutar de una cena al aire libre rodeado por la naturaleza finlandesa.
          </p>
          <p>
            La casa cuenta con dos dormitorios: uno con una cama doble y otro con dos camas individuales. Ambas habitaciones están decoradas con tejidos tradicionales finlandeses y ofrecen vistas impresionantes del bosque.
          </p>
          <p>
            En el exterior, encontrarás una sauna finlandesa auténtica, una experiencia que no puedes perderte durante tu estadía en Finlandia. También hay un estanque natural para que puedas disfrutar de un baño en agua fresca y cristalina.
          </p>
          <p>
            La casa está rodeada de senderos para caminar y explorar la belleza natural del bosque finlandés. Si visitas durante el invierno, podrás disfrutar de deportes de invierno como el esquí de fondo y paseos en trineo tirado por perros.
          </p>
          <p>
            "Kotipesä" es el lugar perfecto para disfrutar de la belleza y tranquilidad de Finlandia en un entorno auténtico y tradicional. ¡Reserva hoy y experimenta la vida en una cabaña finlandesa!
          </p>

        </div>
      </div>

      <div className="houseBoxUtils">
        <h6 className='houseBoxUtilsTitle'>¿Qué hay en este alojamiento?</h6>
        <div className="houseBoxUtilsList">
          <div className="houseBoxUtil"><CountertopsIcon /> Cocina</div>
          <div className="houseBoxUtil"><WifiIcon /> Wifi</div>
          <div className="houseBoxUtil"> <TimeToLeaveIcon /> Aparcamiento gratuito en las instalaciones </div>
          <div className="houseBoxUtil"><PoolIcon /> Piscina</div>
          <div className="houseBoxUtil"><HotTubIcon /> Jacuzzi </div>
          <div className="houseBoxUtil"> <FireExtinguisherIcon /> Detector de incendios</div>
        </div>
      </div>

    </div>
  )
}

export default InfoHouse