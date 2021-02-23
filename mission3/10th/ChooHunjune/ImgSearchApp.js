import { fetchJjal } from './Components/api.js'
import SearchInput from './Components/SearchInput.js'
import SearchResult from './Components/SearchResult.js'


export default function ImgSearchApp($app) {

  const $searchInput = document.createElement('input')
  $searchInput.className = 'SearchInput'
  $app.appendChild($searchInput)
  const searchInput = new SearchInput({
    $searchInput,
    onSearch: (keyword) => {
      fetchJjal(keyword).then((data) => {
        searchResult.setState(data)
      })
    }
  })
  
  const $searchResult = document.createElement('div')
  $searchResult.className = 'SearchResult'
  $app.appendChild($searchResult)
  const searchResult = new SearchResult({
    $searchResult,
    initialState: []
  })
}
