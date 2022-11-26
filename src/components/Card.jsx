import { Link } from "react-router-dom";

export default function Card(props) {
   return (
      <div>
         <button onClick={()=>props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}>
         <h2>Nombre:{props.name}</h2>
         </Link>
         <h2>Specie:{props.species}</h2>
         <h2>Genero:{props.gender}</h2>
         <img src={props.image} alt="personaje" />
      </div>
   );
}
