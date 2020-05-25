import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import { fetchSearch } from '../api/index.js'

export default function App() {

  let data = []
  const searchInputElement = document.querySelector('#search-input')
  const searchResultElement = document.querySelector('#search-result')

  // 검색어 입력
  const addSearch = async (keyword) => {
    data = await fetchSearch(keyword)
    this.setState(data)
  }

  this.setState = (keyword) => {
    data.push(keyword)
    this.searchResult.setState(data)
  }

  // SearchInput 컴포넌트 생성
  this.searchInput = new SearchInput({
    $target: searchInputElement,
    searchHandler: addSearch
  })

  // SearchResult 컴포넌트 생성
  this.searchResult = new SearchResult({
    $target: searchResultElement,
    keyword: data
  })

}