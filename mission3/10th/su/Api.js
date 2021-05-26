const RestAPI = 'https://jjalbot.com/api/jjals';

function loadJjals(searchKeyword) {
  if(!searchKeyword) return; 
  const restApi = `${RestAPI + '?text=' + searchKeyword }`

  return fetch(restApi)
    .then((x) => x.json())
    .catch((error) => console.log(error))
}

export default loadJjals
