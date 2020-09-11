import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'

// 짤봇 api를 통해 짤 데이터를 가져옴
async function getSearchResult(value) {
  let searchResult = await fetch(`https://jjalbot.com/api/jjals?text=${value}`)
  searchResult = await searchResult.json()
  return searchResult
}
// 짤봇 api를 통해 가져온 짤 데이터를 컴포넌트에 설정함
async function setSearchResult(value, SearchResultComponent) {
  console.log(value)
  const searchResult = await getSearchResult(value)
  SearchResultComponent.setState(searchResult)
}

function addSearchHistoryData(array, data, SearchHistoryComponent) {
  // 배열에 추가할 키워드 데이터가 존재한다면  그 데이터를 제거하고
  // 다시 배열 맨 앞 부분에 추가한뒤 배열 데이터 searchHistory 컴포넌트에 setState
  for (let index = 0; index < array.length; index++) {
    if (array[index] === data) {
      array.splice(index, 1)
      break
    }
  }
  array.unshift(data)
  SearchHistoryComponent.setState(array)
}

function setEvent() {
  // seartchInput의 값을 받아 짤봇api에 요청한 데이터를 통하여 렌더링
  searchInputEle.addEventListener('keyup', function (e) {
    let value = e.target.value
    // 검색 키워드가 빈값이면 return
    if (value.replace(/^\s*/, '') === '') return
    value = value.trim()
    // 잦은 함수 호출을 막기 위해
    // debounce 기법적용
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      setSearchResult(value, searchResult)
      addSearchHistoryData(searchHistoryArray, value, searchHistory)
    }, 500)
  })

  searchHistorysEle.addEventListener('click', function (event) {
    const target = event.target
    if (target.className === 'search-history') {
      setSearchResult(target.innerText, searchResult)
      searchInputEle.value = target.innerText
      searchInputEle.focus()
    }
  })
}

let timer = null
const searchHistoryArray = []
const searchInputEle = document.querySelector('#search-keyword')
const searchHistorysEle = document.querySelector('#search-historys')
const searchHistory = new SearchHistory(searchHistoryArray, '#search-historys')
const searchResult = new SearchResult([], '#search-results')

setEvent()
