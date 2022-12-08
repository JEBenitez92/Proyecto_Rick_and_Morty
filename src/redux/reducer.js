import {ADD_FAVORI, DELETE_FAVORI, FILTER, ORDER} from "./types.js";

const initialState = {
    myFavorites: [],
    allCharacters: []
  }

function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case ADD_FAVORI:
            return{
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            }
        case DELETE_FAVORI:
            const favoritoFiltrado = state.myFavorites.filter(personaje => personaje.id !== payload)
            return{
                ...state,
                myFavorites: favoritoFiltrado,
            }
        case FILTER:
            const filtrarStatus = [...state.allCharacters]
            const fil = filtrarStatus.filter(genero =>genero.gender === payload)
            return{
                ...state,
                myFavorites: fil,
            }
        case ORDER:
            const ordenar = [...state.allCharacters]
            const orderFilter = ordenar.sort((a,b)=> {
                if(payload === 'Ascendente'){
                   return a.id - b.id }
                   else{
                    return b.id -a.id
                   }
            })
                
        return{
            ...state,
            myFavorites: orderFilter,
        }
        default:
            return state;   
    }   
}


export default rootReducer;