import { useState } from "react";

export default function SearchBar(props) {
   const[charater, setCharacter] = useState("")
   const handleChange = (e)=>{
      setCharacter(e.target.value)
   };
   const reset =(e)=>{
      setCharacter(e.target.reset())
   }
   
   return (
      <div>
         <input type='search'  value={charater} onChange={handleChange} />
      <button onClick={()=>{props.onSearch(charater);
      reset()}} >Agregar</button>
      </div>
   );
}
