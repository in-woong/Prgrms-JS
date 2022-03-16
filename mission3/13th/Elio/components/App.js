import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import SearchHistory from './SearchHistory.js'
import { getJjals } from '../apis/jjals.api.js'

function App($app) {
  this.$target = $app
  this.state = {
    jjals: [],
    histories: [],
  }

  this.setState = (nextState) => {
    this.state = nextState
    searchResult.setState(nextState.jjals)
    searchHistory.setState(nextState.histories)
  }

  this.handleSearch = async (keyword) => {
    const data = await getJjals(keyword)

    // next history로 중복된 키워드 뺴는 로직 넣기
    this.setState({
      jjals: data,
      histories: [...this.state.histories, keyword],
    })
  }

  this.clickHistory = async (clickedKeyword) => {
    const data = await getJjals(clickedKeyword)
    this.setState({
      jjals: data,
      histories: this.state.histories,
    })
  }

  const searchInput = new SearchInput({
    $target: this.$target,
    handleSearch: this.handleSearch,
  })

  const searchHistory = new SearchHistory({
    initalState: this.state.histories,
    $target: this.$target,
    clickHistory: this.clickHistory,
  })

  const searchResult = new SearchResult({
    initialState: this.state.jjals,
    $target: this.$target,
  })
}

export default App
