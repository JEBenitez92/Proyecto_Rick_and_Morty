import Card from './Card';

export default function Cards(props) {
   // const { characters } = props;
   return <div>
      {props.characters.map(cartas => <Card
         name={cartas.name}
         species={cartas.species}
         gender={cartas.gender}
         image={cartas.image}
         onClose={() => window.alert('Emulamos que se cierra la card')} />)}
   </div>;
}
