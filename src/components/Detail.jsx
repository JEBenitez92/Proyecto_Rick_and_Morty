import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
     console.log(character);
    return(
        <div>
            <div>
                <h1>NOMBRE: {character.name}</h1>
            </div>
            <div>
                <h3>STATUS: {character.status}</h3>
                <h3>ESPECIE: {character.species}</h3>
                <h3>GENERO: {character.gender}</h3>
                <h3>ORIGEN: {character.origin ?.name}</h3>
            </div>
            <div>
                <img src={character.image} alt={character.name} />
            </div>
            <div>
            <NavLink to={'/home'}>
                    <button>Volver</button>
                </NavLink>
            </div>
        </div>
    )
}

// Name
// Status
// Specie
// Genrer
// Origin
// Image