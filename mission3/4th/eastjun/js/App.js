import SearchInput from './SearchInput.js'
import SearchHistory from './SearchHistory.js'

export default function App() {
  this._history = []
  this.init = () => {
    const searchInput = new SearchInput({
      setHistoryState: (item) => this.setHistoryState(item),
    })
    const searchHistory = new SearchHistory(searchInput.search)
    searchInput.initEventListener()
    searchHistory.initEventListener()

    this.setHistoryState = (item) => {
      this._history = searchHistory.setState(item, this._history)
    }
  }
}
