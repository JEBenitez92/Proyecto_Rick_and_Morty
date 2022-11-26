import { useState } from "react";

export default function SearchBar(props) {
   const[charater, setCharacter] = useState("")
   const handleChange = (e)=>{
      setCharacter(e.target.value)
   };

   const limpiar =()=>{
      setCharacter('')
   }
   return (
      <div>
         <input type='search'  value={charater} onChange={handleChange} />
      <button onClick={()=>props.onSearch(charater)} onAuxClick={limpiar}  >Agregar</button>
      </div>
   );
}
