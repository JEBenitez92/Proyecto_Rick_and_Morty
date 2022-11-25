import { useState } from "react";

export default function SearchBar(props) {
   const[charater, setCharacter] = useState("")
   const handleChange = (e)=>{
      setCharacter(e.target.value)
   };

   return (
      <div>
         <input type='search'  value={charater} onChange={handleChange} />
      <button onClick={()=>props.onSearch(charater)} >Agregar</button>
      </div>
   );
}
