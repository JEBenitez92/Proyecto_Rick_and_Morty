import {ADD_FAVORI} from "./types.js";
import {DELETE_FAVORI} from "./types.js";

const initialState = {
    myFavorites: []
  }

function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case ADD_FAVORI:
            return{
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }
        case DELETE_FAVORI:
            const favoritoFiltrado = state.myFavorites.filter(personaje => personaje.id !== payload)
            return{
                ...state,
                myFavorites: favoritoFiltrado,
            }
        default:
            return state;   
    }   
}


export default rootReducer;