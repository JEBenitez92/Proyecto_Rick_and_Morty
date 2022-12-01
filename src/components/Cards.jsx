import Card from './Card.jsx';
import Style from "../estilos_componentes/Cards.module.css"
export default function Cards(props) {
   // const { characters } = props;
   return (
   <div className={Style.cards}>
      {props.characters.map(cartas => <Card
         name={cartas.name}
         species={cartas.species}
         gender={cartas.gender}
         image={cartas.image}
         key={cartas.id}
         id={cartas.id}
         onClose={props.onClose} />)}
   </div>
)
}
