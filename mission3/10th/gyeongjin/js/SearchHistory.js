export default function SearchHistory({ $target, initialState, onClick }) {
  const $historyList = document.createElement('ul')

  $target.appendChild($historyList)

  this.state = initialState
  this.$historyList = $historyList

  this.$historyList.addEventListener('click', (e) => {
    onClick(e.target.innerHTML)
  })

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const historyList = this.state.map((item) => `<li class="history-item">${item}</li>`).join('')
    this.$historyList.innerHTML = historyList
  }
}
