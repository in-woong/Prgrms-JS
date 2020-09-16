import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'

import { fetchJjal } from './api.js'
import SearchHistory from './SearchHistory.js'

export default function App($target, initialState) {
  /*
     {
       searchResults: [],
       searchHistories: []
     }
  */
  this.data = initialState
    ? initialState
    : {
        searchResults: [],
        searchHistories: [],
      }
  this.components = {
    searchInput: new SearchInput({
      $app: $target,
      onSearch: async (keyword) => {
        const searchResults = await fetchJjal(keyword)
        const nextSearchHistories = [...this.data.searchHistories].concat([
          keyword,
        ])
        this.setState({
          searchHistories: nextSearchHistories,
          searchResults,
        })
      },
    }),
    searchHistory: new SearchHistory({
      $app: $target,
      onClick: async (keyword) => {
        const searchResults = await fetchJjal(keyword)
        this.setState({
          ...this.data,
          searchResults,
        })
      },
    }),
    searchResult: new SearchResult({
      $app: $target,
      initialData: null,
    }),
  }

  this.setState = (nextData) => {
    this.data = nextData
    this.components.searchResult.setState(this.data.searchResults)
    this.components.searchHistory.setState(this.data.searchHistories)

    this.render()
  }

  this.render = () => {}
}
