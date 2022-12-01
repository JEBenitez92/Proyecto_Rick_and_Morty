import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Style from "../estilos_componentes/Detail.module.css"

export default function(props){
    const {detailId} = useParams();
    const [character, setCharacter]=useState("");
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);
     

    return(
        <div className={Style.contenedor}>
            <div className={Style.contenedorh1}>
                <h1>NOMBRE: {character.name}</h1>
            </div>
            <div className={Style.contenedorh3}>
                <h3>STATUS: {character.status}</h3>
                <h3>ESPECIE: {character.species}</h3>
                <h3>GENERO: {character.gender}</h3>
                <h3>ORIGEN: {character.origin ?.name}</h3>
            </div>
            <div className={Style.contenedorImagen}>
                <img src={character.image} alt={character.name} />
            </div>
            <div className={Style.boton}>
            <NavLink to={'/home'}>
                    <button>Volver</button>
            </NavLink>
            </div>
        </div>
    )
}

