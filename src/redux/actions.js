import {ADD_FAVORI} from "./types.js";
import {DELETE_FAVORI} from "./types.js";

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