import { isNew } from '../common/validateData.js'

function SearchHistory({ targetDOM, initData, onClickHistory }) {
  if (isNew(new.target)) {
    this.$targetDOM = targetDOM
    this.searchHistory = initData

    // 히스토리 목록 ul DOM 객체
    this.$serchHistorytDOM = document.createElement('ul')
    this.$serchHistorytDOM.id = 'search-history'
    this.$serchHistorytDOM.addEventListener('mousedown', onClickHistory)

    this.$targetDOM.appendChild(this.$serchHistorytDOM)
  }

  this.setState = (nextState) => {
    this.searchHistory = nextState
    this.render()
  }

  // 가장 최근것부터 위에서 아래로 나열
  this.render = () => {
    this.$serchHistorytDOM.innerHTML = [...this.searchHistory]
      .reverse()
      .map((historyData) => `<li>${historyData}</li>`)
      .join('')
  }

  this.render()
}

export default SearchHistory