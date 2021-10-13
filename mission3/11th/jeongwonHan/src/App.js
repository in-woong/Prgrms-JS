import SearchInput from './components/SearchInput.js'
import SearchResult from './components/SearchResult.js'
import SearchHistory from './components/SearchHistory.js'
import { api } from './api/api.js'
import { dummyData } from './util/dummyData.js'
import { getUuidv4 } from './util/Uuid.js'

function App($target) {
  this.$target = $target
  this.state = {
    searchHistory: [],
    gifs: null,
  }

  const searchHistory = new SearchHistory({
    $target: this.$target.querySelector('.search-history'),
    state: this.state,
    onSearchHistory: async (historyText) => {
      try {
        const response = await api.fetchGifs(historyText)
        if (!response) {
          alert('error')
        } else {
          const newState = {
            ...this.state,
            gifs: response,
          }
          this.setState(newState)
        }
      } catch (e) {
        console.log(e)
      }
    },
  })

  const searchInput = new SearchInput({
    $target: this.$target.querySelector('.search-keyword'),
    state: this.state,
    onSearch: async (keyword) => {
      try {
        const response = await api.fetchGifs(keyword)
        if (!response) {
          alert('error')
        } else {
          const test = this.state.searchHistory.filter(
            (v) => v.text === keyword
          )
          const newState = {
            searchHistory:
              this.state.searchHistory.filter((v) => v.text === keyword)
                .length > 0
                ? [...this.state.searchHistory]
                : [
                    ...this.state.searchHistory,
                    { id: getUuidv4(), text: keyword },
                  ],
            gifs: response,
          }
          this.setState(newState)
        }
      } catch (e) {
        console.log(e)
      }
    },
  })
  const searchResult = new SearchResult({
    $target: this.$target.querySelector('.search-result'),
    state: this.state,
  })

  this.setState = (nextState) => {
    this.state = nextState
    searchResult.setState(this.state)
    searchHistory.setState(this.state)
  }

  // 테스트 코드
  /*
  const testState = {
    searchHistory: [
      { id: getUuidv4(), text: '고양이' },
      { id: getUuidv4(), text: '짤짤' },
      { id: getUuidv4(), text: '음식' },
    ],
    gifs: dummyData,
  }
  this.setState(testState)
  */
  searchResult.setState(this.state)
  searchHistory.setState(this.state)
}

export default App
