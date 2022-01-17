const $searchInput = document.querySelector('#search-keyword')
const URL = 'https://jjalbot.com/api/jjals?text='

async function getData(keyword) {
  const response = await fetch(`${URL}${keyword}`)
  return response.json()
}

function SearchInput(setState) {
  $searchInput.addEventListener('keyup', e => {
    getData(e.target.value).then(nextData => setState(nextData))
  })
}
