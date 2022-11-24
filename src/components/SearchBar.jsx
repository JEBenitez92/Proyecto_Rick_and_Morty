export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
      <button onClick={()=>props.onSearch(`agregando personaje...`)} >Agregar</button>
      </div>
   );
}
