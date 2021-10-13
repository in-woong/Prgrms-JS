import {errorMessage} from "./errorMessage.js";


export const setLocalStorage = (key, data) => {
    try{
        localStorage.setItem(key, JSON.stringify(data));   
    }catch(error){
        throw new Error(errorMessage.CHECK_SET_LOCALSTORAGE(error));
    }
}

export const getLocalStorage = (key, data) => {
    try{
        return JSON.parse(localStorage.getItem(key));
    }catch(error){
        throw new Error(errorMessage.CHECK_GET_LOCALSTORAGE(error));
    }
}