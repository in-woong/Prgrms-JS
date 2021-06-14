const API_ENDPOINT = 'https://jjalbot.com'

const jjalbotAPI = (url) => {
    
    const response = fetch(url)
    response
    .then(res => res.json())
    .then(data =>{
        const htmlString = `${data.map(d => `<img src="${d.imageUrl}">`).join('')}`
        return htmlString;
        }
    ).catch(error => {
        alert(response.status);
        throw new Error(response.status);
    });
    // if(response.ok){
    //     return response.json();
    // }else{
    //     throw new Error(response.status);
    // }
}

export const requestAPI = {
    fetchJjalGif: (keyword) =>{
        return jjalbotAPI(`${API_ENDPOINT}/api/jjals?test=${keyword}/`)
    }
}

