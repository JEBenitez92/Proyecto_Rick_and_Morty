import Card from './Card.jsx';

export default function Cards(props) {
   // const { characters } = props;
   return <div>
      {props.characters.map(cartas => <Card
         name={cartas.name}
         species={cartas.species}
         gender={cartas.gender}
         image={cartas.image}
         key={cartas.id}
         id={cartas.id}
         onClose={props.onClose} />)}
   </div>;
}
