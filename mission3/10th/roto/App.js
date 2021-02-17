import { fetchJjal } from './api.js'
import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'

export default function App($app) {
  // 컴포넌트 만들기
  const searchInput = new SearchInput({
    $app,
    onSearch: (keyword) => {
      fetchJjal(keyword).then((data) => {
        console.log(data)
        searchResult.setState(data)
      })
    },
  })

  const searchResult = new SearchResult({
    $app,
    initialState: [],
  })
}
