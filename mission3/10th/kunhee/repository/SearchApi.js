const BAES_URL = "https://jjalbot.com/api/jjals"

const request = (parameter) =>{
    return fetch(`${BAES_URL}?text=${parameter}`)
    .then(x => x.json())
    .then(data=>{
        return `${data.map(d => `<img src="${d.imageUrl}">`).join('')}`
    })
    .catch((error)=>{
        console.log(error);
    })
}

const SearchApi = (parameter) => {
    return request(parameter)
}


export default SearchApi;