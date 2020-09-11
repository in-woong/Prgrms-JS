import SearchResult from './SearchResult.js'

function setEvent() {
  document
    .querySelector('#search-keyword')
    .addEventListener('keyup', function (e) {
      setSearchResult(e.target.value, searchResult)
    })
}

// 짤봇 api를 통해 짤 데이터를 가져옴
async function getSearchResult(value) {
  let searchResult = await fetch(`https://jjalbot.com/api/jjals?text=${value}`)
  searchResult = await searchResult.json()
  return searchResult
}
// 짤봇 api를 통해 가져온 짤 데이터를 컴포넌트에 설정함
async function setSearchResult(value, SearchResultComponent) {
  const searchResult = await getSearchResult(value)
  SearchResultComponent.setState(searchResult)
}

const searchResult = new SearchResult([], '#search-results')
setEvent()
