import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Style from "../estilos_componentes/Card.module.css"
import {addFavori, deleteFavori} from "../redux/actions.js"

export function Card(props) {

   const [isFav, setIsFav] = useState(false)

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true)
         }
      })
   },[props.myFavorites]);

   function handleFavorite(){
      if(isFav){
         setIsFav(false)
         props.deleteFavori(props.id)
      } else {
         setIsFav(true)
         props.addFavori(props)
      }
   }
   return (
   <div className={Style.contenedor}>
      <div className={Style.card}>
         <div className={Style.cardh2}>
            <h2>Specie:{props.species}</h2>
            <h2>Genero:{props.gender}</h2>
            <h2>Nombre: <Link to={`/detail/${props.id}`}>
                         {props.name}
                        </Link>
            </h2>
         </div>
         <img src={props.image} alt="personaje" />
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )
         }
         <button onClick={()=>props.onClose(props.id)}>X</button>
      </div>
   </div>
   );
}

export function mapDispatchToProps(dispatch){
   return{
      addFavori: function(id){
      dispatch(addFavori(id))
      },
      deleteFavori: function(id){
      dispatch(deleteFavori(id))
      }
   }
}

export function mapStateToProps(state){
   return{
      myFavorites: [...state.myFavorites]
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)