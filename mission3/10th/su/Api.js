const ResAPI = {
  jjals: 'https://jjalbot.com/api/jjals',
}

function GET(_searchKeyword) {
  const restApi = `${ResAPI.jjals + (_searchKeyword ? '?text=' + _searchKeyword : '')}`
  console.log(restApi, 'restApi')
  console.log(_searchKeyword, '_searchKeyword')

  return fetch(restApi)
    .then((x) => x.json())
    .catch((error) => console.log(error))
}

export default GET
