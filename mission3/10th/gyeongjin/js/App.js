import { fetchJjal } from './api.js'
import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'

export default function App($target) {
  const $form = document.createElement('form')
  const $contentBox = document.createElement('div')
  $contentBox.className = 'content-box'
  $target.append($form, $contentBox)

  this.state = { searchResults: [], searchHistories: [] }

  this.components = {
    searhInput: new SearchInput({
      $target: $form,
      onSearch: async (keyword) => {
        const nextHistories = [...this.state.searchHistories].concat([keyword])
        const searchResults = await fetchJjal(keyword)
        console.log(nextHistories)
        this.setState({
          searchResults,
          searchHistories: nextHistories,
        })
      },
    }),
    searchResult: new SearchResult({
      $target: $contentBox,
      initialData: null,
    }),
    searchHistory: new SearchHistory({
      $target: $contentBox,
      onClick: async (clickedItem) => {
        const searchResults = await fetchJjal(clickedItem)
        const searchHistories = [...this.state.searchHistories]
        this.setState({ searchResults, searchHistories })
      },
    }),
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.components.searchResult.setState(this.state.searchResults)
    this.components.searchHistory.setState(this.state.searchHistories)
    this.render()
  }

  this.render = () => {}
}
