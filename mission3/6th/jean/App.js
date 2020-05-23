import SearchResult from "./SearchResult.js"
import SearchInput from "./SearchInput.js"
import SearchHistory from "./SearchHistory.js"
import { fetchApi } from "./api.js"

export default function App () {
  this.data = {
    histories: [],
    searchData: []
  }

  const searchResult = new SearchResult({
    $target: document.querySelector("#search-result"),
    data: []
  })

  const searchInput = new SearchInput({
    $target: document.querySelector("#search-keyword"),
    onSearch: async (keyword) => {
      const data = await fetchApi(keyword)
      const nextHistory = [
        ...this.data.histories,
        keyword
      ]
      this.setState({
        histories: nextHistory,
        searchData: data
      })
    }
  })

  const searchHistory = new SearchHistory({
    $target: document.querySelector("#search-history"),
    data: this.data.histories,
    onClick: async (keyword) => {
      const data = await fetchApi(keyword)
      this.setState({
        ...this.data,
        searchData: data
      })
    }
  })

  this.setState = (nextData) => {
    this.data = nextData
    searchHistory.setState(nextData.histories)
    searchResult.setState(nextData.searchData)
  }
}
