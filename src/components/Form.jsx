import { useState, useEffect } from "react"
import { validate } from "./Validate"
import { useNavigate } from "react-router-dom"

export default function From(props){
    const [useData, setData] = useState({
        usuario: "",
        contraseña: "",
    })
    console.log(props)
    const [error, setError] = useState({
        usuario: "",
        contraseña: "",
    })

    const handleInputChange = (e)=>{
        setError(
            validate({
              ...useData, [e.target.name]: e.target.value
            })
          );
      
          setData(
           { ...useData, [e.target.name]: e.target.value}
          );
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.login(useData);
    }



    return(
        <div>
        
            <form onSubmit={handleSubmit}>
            <label>Usuario:</label>
            <input 
            type="text" 
            name="usuario" 
            value={useData.usuario} 
            placeholder="Colocar nombre de usuario" 
            onChange={handleInputChange}
            />
            {!error?null:<p className='danger'>{error.usuario}</p>}
            <br />
            <label>Contraseña:</label>
            <input 
            type="password" 
            name="contraseña" 
            value={useData.contraseña}  
            placeholder="Colocar password" 
            onChange={handleInputChange}
            />
            {!error?null:<p className='danger'>{error.contraseña}</p>}
            <button type="submit">Inicio</button>
            </form>
            
        </div>
    )
}

