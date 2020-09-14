import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'
import { applyEventDebounce } from './util/applyEventDebounce.js'

function bindEvent() {
  let timer = null
  // seartchInput의 값을 받아 짤봇api에 요청한 데이터를 통하여 렌더링
  searchInputEle.addEventListener('keyup', function (e) {
    const value = e.target.value.trim()
    // 검색 키워드가 빈값이면 return
    if (value.length === 0) return
    const inputSearchKeyword = () => {
      // 만약 짤봇 api데이터를 정상적으로 가져와 컴포넌트에 상태를 설정한다면 true
      // 아니라면 false를 호출하여
      // 성공여부에 따라 검색기록를 추가
      const isSuccessSetSearchResult = searchResult.setSearchResult(value)
      if (isSuccessSetSearchResult) {
        searchHistory.addSearchHistoryData(value)
      }
    }
    // 잦은 함수 호출을 막기 위해
    // debounce 기법적용
    timer = applyEventDebounce(inputSearchKeyword, timer, 500)
    console.log(timer)
  })

  searchHistorysEle.addEventListener('click', function (event) {
    const target = event.target
    searchResult.setSearchResult(target.innerText)
    searchInputEle.value = target.innerText
    searchInputEle.focus()
  })
}
const searchInputEle = document.querySelector('#search-keyword')
const searchHistorysEle = document.querySelector('#search-historys')
const searchHistory = new SearchHistory([], '#search-historys')
const searchResult = new SearchResult([], '#search-results')

bindEvent()
