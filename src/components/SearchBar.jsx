import { useState } from "react";

export default function SearchBar(props) {
   const[charater, setCharacter] = useState("")
   
   const handleChange = (e)=>{
      setCharacter(e.target.value)
   };
   
   const limpiarImput = (charater)=>{
      setCharacter(charater = '')
   }
   const combinar = ()=> {
      props.onSearch(charater);
      limpiarImput();

   }
   
   return (
      <div>
         <input type='search'  value={charater} placeholder='N° de carta....' onChange={handleChange} />
      <button onClick={()=>combinar()} >Agregar</button>
      </div>
   );
}






// ()=>props.onSearch(charater)
      