import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import { fetchSearch } from '../api/index.js'

export default function App() {

  let searhResult = []
  const searchInputElement = document.querySelector('#search-input')
  const searchResultElement = document.querySelector('#search-result')

  // 검색어 입력
  const addSearch = async (keyword) => {
    searhResult = await fetchSearch(keyword)
    this.setState(searhResult)
  }

  this.setState = (keyword) => {
    searhResult.push(keyword)
    this.searchResult.setState(searhResult)
  }

  // SearchInput 컴포넌트 생성
  this.searchInput = new SearchInput({
    $target: searchInputElement,
    searchHandler: addSearch
  })

  // SearchResult 컴포넌트 생성
  this.searchResult = new SearchResult({
    $target: searchResultElement,
    keyword: searhResult
  })

}