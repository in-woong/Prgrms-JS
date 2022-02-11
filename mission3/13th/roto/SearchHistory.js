const MAX_HISTORY_SIZE = 5

export default function SearchHistory({ $target, initialState, onClick }) {
  this.$searchHistory = document.createElement('div')
  $target.appendChild(this.$searchHistory)

  this.state = initialState

  this.setState = (nextState) => {
    if (nextState.length > MAX_HISTORY_SIZE) {
      nextState.shift()
    }
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const htmlString = Array.isArray(this.state)
      ? `${this.state
          .map(
            (keyword) =>
              `<div style="display:inline-block;margin: 8px; border: 1px solid #ccc; padding: 5px;" class="SearchHistory__keyword">${keyword}</div>`
          )
          .join('')}`
      : ''

    this.$searchHistory.innerHTML = htmlString
  }

  this.$searchHistory.addEventListener('click', (e) => {
    const $searchHistoryKeyword = e.target.closest('.SearchHistory__keyword')

    if ($searchHistoryKeyword) {
      onClick($searchHistoryKeyword.textContent)
    }
  })
  this.render()
}
