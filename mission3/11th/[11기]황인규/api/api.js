import {getLocalStorage} from "../utils/localStorage.js";
import {errorMessage} from "../utils/errorMessage.js"


const API_ENDPOINT = 'https://jjalbo.com'

const jjalbotAPI = async(url) => {
    
    return await fetch(url)
                     .then((response) => {
                         if(response.ok){
                             return response.json();
                         }else{
                             throw new Error(errorMessage.CHECK_FETCH());
                         }
                     })
                     .then((responseJson) => {
                         return responseJson;
                     })
                     .catch(error => {
                         alert(error); 
                     });   
}

export const requestAPI = {
    
    fetchJjalGif: (keyword) => {
        
        const jjalbotData = getLocalStorage(keyword);
        if(jjalbotData){
            return jjalbotData;
        }
        return jjalbotAPI(`${API_ENDPOINT}/api/jjals?text=${keyword}/`);
    }
}

