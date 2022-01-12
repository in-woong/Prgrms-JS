export default function SearchHistory({ $target, initialState, onHistoryClick }) {
  this.state = initialState
  this.onHistoryClick = onHistoryClick

  const $searchHistory = document.createElement('div')

  $target.appendChild($searchHistory)

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    if (Array.isArray(this.state)) {
      $searchHistory.innerHTML = `
        ${this.state.map(history => `<button>${history}</button>`).join('')}
      `
    }
  }

  this.render()

  $searchHistory.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
     const $button = e.target
     this.onHistoryClick($button.innerText)
    }
  })
}