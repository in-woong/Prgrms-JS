const API_ENDPOINT = 'https://jjalbot.com'

const jjalbotAPI = async(url) => {
    
    return await fetch(url)
                     .then((response)=>{
                         if(response.ok){
                             return response.json();
                         }else{
                             throw new Error("Something went wrong");
                         }
                     })
                     .then((responseJson)=>{
                         //데이터 확인, 데이터가 정확히 왔는지 확인
                         return responseJson;
                     })
                     .catch(error => {
                         alert(error); 
                     });
   //return await response;               
}

export const requestAPI = {
    fetchJjalGif: (keyword) => {
        return jjalbotAPI(`${API_ENDPOINT}/api/jjals?text=${keyword}/`)
    }
}

