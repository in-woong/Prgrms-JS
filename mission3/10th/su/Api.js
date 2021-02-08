
export const ResAPI = {
    jjals:'https://jjalbot.com/api/jjals?text='
};


export const GET = (_searchKeyword)=> {
    return fetch(`${ResAPI.jjals + _searchKeyword}`)
    .then(x => x.json())
};


