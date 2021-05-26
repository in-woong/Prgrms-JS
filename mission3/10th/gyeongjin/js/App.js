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
        const searchResults = await fetchJjal(keyword)
        const getNextHistories = () => {
          // review1
          // 1. array의 includes가 기존 배열에 영향을 주지 않으므로 spread를 사용하지 않아도 됨
          // 2. array의 concat 자체가 새로운 배열을 만들기 때문에 spread로 배열을 복사하지 않아도 됨
          // 3. keyword가 이미 존재한다면 배열을 spread로 복사하지 않아도 됨

          // review1-2 
          // 1. 이중 배열을 사용할 필요 없음 
          // this.state.searchHistories.concat([keyword]) -> this.state.searchHistories.concat(keyword)
          // 2. 함수명 변경 nextHistories -> getNextHistories
          if (!this.state.searchHistories.includes(keyword)) {
            return this.state.searchHistories.concat(keyword)
          } else {
            return this.state.searchHistories
          }
        }
        this.setState({
          searchResults,
          searchHistories: getNextHistories(),
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
        // review2 - this.setState({ ...this.state, searchResults })로 쓸 수 있음
        // const searchHistories = [...this.state.searchHistories]
        this.setState({ ...this.state, searchResults })
      },
      removeHistoryItem: (itemIndex) => {
        // review3 - filter은 새로운 배열을 생성하기 때문에 spread 기법 필요하지 않음
        const nextHistories = this.state.searchHistories.filter((target) => target !== this.state.searchHistories[itemIndex])
        const searchResults = [...this.state.searchResults]
        this.setState({ searchHistories: nextHistories, searchResults })
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
