import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'

const searchHistoryArray = []
let searchResult
let searchHistory

const Search = async (event) => {
  const resultHTMLString = document.querySelector('#search-result')
  const historyHTMLString = document.querySelector('#search-history')

  try {
    const data = event.target.matches('#search-history > li')
      ? await SearchInput(event.target.innerHTML)
      : await SearchInput(event.target.value)

    if (searchHistory === undefined) {
      searchHistory = new SearchHistory({
        initialState: searchHistoryArray,
        $target: historyHTMLString,
      })
    }
    searchHistory.addValue(event.target.value)
    searchHistory.render()

    if (searchResult === undefined) {
      searchResult = new SearchResult({
        initialState: data,
        $target: resultHTMLString,
      })
      searchResult.render()
      return
    }

    if (searchResult) searchResult.setState(data)
  } catch (err) {
    console.error(err)
  }
}

export default Search
