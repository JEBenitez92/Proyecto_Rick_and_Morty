import { Link } from "react-router-dom";
import Style from "../estilos_componentes/Card.module.css"

export default function Card(props) {
   return (
   <div className={Style.contenedor}>
      <div className={Style.card}>
         <div className={Style.cardh2}>
            <h2>Specie:{props.species}</h2>
            <h2>Genero:{props.gender}</h2>
            <h2>Nombre: <Link to={`/detail/${props.id}`}>
                         {props.name}
                        </Link>
            </h2>
         </div>
         <img src={props.image} alt="personaje" />
         <button onClick={()=>props.onClose(props.id)}>X</button>
      </div>
   </div>
   );
}
