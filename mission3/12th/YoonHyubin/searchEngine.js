const url = 'https://jjalbot.com/api/jjals?text=';

export const fetchData = (searchKeyword) => {
    if (searchKeyword === null || searchKeyword === undefined || searchKeyword === '') return [];
    return fetch(url + searchKeyword).then((response) => {
       return response.json();
    });
};

export default {
    fetchData
};
