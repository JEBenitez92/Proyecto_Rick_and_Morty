import {ADD_FAVORI, DELETE_FAVORI, FILTER, ORDER} from "./types.js";


export function addFavori(id){
    return{
        type: ADD_FAVORI,
        payload: id,
    }
}

export function deleteFavori(id){
    return{
        type: DELETE_FAVORI,
        payload: id,
    }
}

export function filterCards(status){
    return{
        type: FILTER,
        payload: status,
    }
}

export function orderCards(id){
    return{
        type: ORDER,
        payload: id,
    }
}