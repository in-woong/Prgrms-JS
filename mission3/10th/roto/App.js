import { fetchJjal } from './api.js'
import SearchResult from './SearchResult.js'

export default function App($app) {
  document.querySelector('#search-keyword').addEventListener('keyup', function (e) {
    const keyword = e.target.value

    fetchJjal(keyword).then((data) => {
      console.log(data)
      searchResult.setState(data)
    })
  })

  // 컴포넌트 만들기
  const searchResult = new SearchResult({
    $app,
    initialState: [],
  })
}
