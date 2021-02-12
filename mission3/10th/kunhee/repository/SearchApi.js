const BAES_URL = "https://jjalbot.com/api/jjals"

const SearchApi = (parameter) => {
    return fetch(`${BAES_URL}?text=${parameter}`).then(x => x.json())
}


export default SearchApi;