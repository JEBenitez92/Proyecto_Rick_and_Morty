import React from "react";
import { connect } from "react-redux";
import Style from '../estilos_componentes/Favorites.module.css'



export function Favorites({myFavorites}){
    console.log(myFavorites)
    return(
        <div className={Style.contenedor}>
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