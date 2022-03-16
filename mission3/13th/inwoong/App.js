import SearchInput from './component/SearchInput.js'
import SearchReasult from './component/SearchResult.js'
import dataFetch from './util/DataFetch.js'
import SearchHistory from './component/SearchHistory.js'

export default function App() {
  this.state = {
    histories: [],
  }
  const $target = document.querySelector('#app')

  const onSubmit = (text) => {
    if (text?.length <= 0) return
    this.setState({ histories: [...this.state.histories, text] })
    dataFetch(text).then((data) => this.searchResult.setState(data))
  }

  this.render = () => {
    this.searchInput = new SearchInput({ $target, onSubmit })
    this.searchHistory = new SearchHistory({
      $target,
      histories: this.state.histories,
      onHistory: (text) => {
        dataFetch(text).then((data) => this.searchResult.setState(data))
      },
    })
    this.searchResult = new SearchReasult({
      initialData: [],
      $target,
    })
  }

  this.setState = (newData) => {
    this.state = newData
    this.searchHistory.setState(newData.histories)
  }
  this.render()
}
