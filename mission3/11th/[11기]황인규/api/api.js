const API_ENDPOINT = 'https://jjalbot.com'

const jjalbotAPI = async(url) => {
    
    return await fetch(url)
                     .then((response) => {
                         if(response.ok){
                             return response.json();
                         }else{
                             throw new Error("Something went wrong");
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
        return jjalbotAPI(`${API_ENDPOINT}/api/jjals?text=${keyword}/`)
    }
}

