const API_ENDPOINT = 'https://jjalbot.com'

const jjalbotAPI = async(url) => {
    
    const response = await fetch(url)
                     .then(res => res.json())
                     .then(data =>{
                         
                         const htmlString = `${data.map(d => `<img src="${d.imageUrl}">`).join('')}`
                         return htmlString;
                         }
                     ).catch(error => {
                         alert(error); //?
                     });
}

export const requestAPI = {
    fetchJjalGif: (keyword) =>{
        return jjalbotAPI(`${API_ENDPOINT}/api/jjals?test=${keyword}/`)
    }
}

