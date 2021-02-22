import { fetchJjal } from './api.js';
import SearchInput from './searchInput.js';
import SearchResult from './searchResult.js';

export default function App($app) {

  const searchInput = new SearchInput({
    $app,
    onSearch: (keyword) => {
      fetchJjal(keyword)
        .then((data) => {
          searchResult.setState(data)
        })
    }
  })

  const searchResult = new SearchResult({
    $app,
    initialState: []
  })
}