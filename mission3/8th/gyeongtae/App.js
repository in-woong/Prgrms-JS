import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'
import SearchInput from './SearchInput.js'
import { applyEventDebounce } from './util/applyEventDebounce.js'

export default function App(renderEle) {
  this.renderEle = renderEle
  let timer = null
  // 렌더링 가능여부
  let isAbleRender = false

  this.inputSearchKeyword = (event) => {
    // searchInput의 값을 받아 짤봇api에 요청한 데이터를 통하여 렌더링
    const value = event.target.value.trim()
    // 검색 키워드가 빈값이면 return
    if (value.length === 0) return
    const inputSearchKeyword = () => {
      // 만약 짤봇 api데이터를 정상적으로 가져와 컴포넌트에 상태를 설정한다면 true
      // 아니라면 false를 호출하여
      // 성공여부에 따라 검색기록를 추가
      const isSuccessSetSearchResult = this.searchResult.setSearchResult(value)
      if (isSuccessSetSearchResult) {
        this.searchHistory.addSearchHistoryData(value)
      }
    }
    // 잦은 함수 호출을 막기 위해
    // debounce 기법적용
    timer = applyEventDebounce(inputSearchKeyword, timer, 500)
  }

  this.clickSearchHistory = (event) => {
    const keyWord = event.target.innerText
    this.searchResult.setSearchResult(keyWord)
    this.searchInput.setState(keyWord)
  }

  this.render = () => {
    // 처음 render호출할땐 하위 컴포넌트 render호출을 막기위해
    // isAbleRender flag를 사용함
    if (!isAbleRender) return (isAbleRender = true)
    this.searchHistory.render()
    this.searchInput.render()
    this.searchResult.render()
  }
  this.setState = (nextData) => {
    this.render()
  }

  this.searchHistory = new SearchHistory(
    [],
    this.renderEle,
    this.clickSearchHistory
  )
  this.searchInput = new SearchInput(
    '',
    this.renderEle,
    this.inputSearchKeyword
  )
  this.searchResult = new SearchResult([], this.renderEle)

  this.render()
}
