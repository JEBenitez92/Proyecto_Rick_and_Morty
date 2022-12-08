import React from "react";
import { connect, useDispatch } from "react-redux";
import { orderCards, filterCards } from "../redux/actions";
import Style from '../estilos_componentes/Favorites.module.css'



export function Favorites({myFavorites}){
    const dispach =useDispatch();
    const handleClick = (e)=>{
        const { name, value} = e.target
        console.log(orderCards(value))
        if(name === "Ordenar"){
           return dispach(orderCards(value))
        }
        if(name === 'Genero'){
            return dispach(filterCards(value))
        }
    }
    
    


    return(
        <div className={Style.contenedor}>
        <div className={Style.contenedorSelector}>
                <select name="Ordenar" onClick={handleClick} className={Style.selector}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
                </select>
          
                <select name="Genero" onClick={handleClick} className={Style.selector2}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                </select>
         
        </div>
        {myFavorites.map((character,index) => (
            <div key={index} className={Style.carta} >
                <h2>{character.name}</h2>
                <h3>N° de Carta: {character.id}</h3>
                <img src={character.image} />
            </div>
        )
        )}
        </div>
    )
}

export function mapStateToProps(state){
    return{
       myFavorites: state.myFavorites,
    }
 }

 
 export default connect(mapStateToProps)(Favorites);