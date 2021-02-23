import { fetchJjal } from './api.js'
import SearchInput from './searchInput.js'
import SearchResult from './searchResult.js'

export default function App($app) {
  const searchInput = new SearchInput({
    $app,
    onSearch: async (keyword) => {
      const data = await fetchJjal(keyword)
      searchResult.setState(data)
    },
  })

  const searchResult = new SearchResult({
    $app,
    initialState: [],
  })
}
