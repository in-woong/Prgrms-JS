import { fetchJjal } from './Components/api.js'
import SearchInput from './Components/SearchInput.js'
import SearchResult from './Components/SearchResult.js'


export default function ImgSearchApp($app) {

  const searchInput = new SearchInput({
    $app,
    onSearch: (keyword) => {
      if (keyword.length > 0) {
        fetchJjal(keyword).then((data) => {
          searchResult.setState(data)
        })
      }
    }
  })
  
  const searchResult = new SearchResult({
    $app,
    initialState: []
  })
}
