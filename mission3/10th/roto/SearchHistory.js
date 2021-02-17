export default function SearchHistroy({ $app, initialState, onClick }) {
  this.state = initialState

  const $target = document.createElement('ul')
  $target.className = 'SearchHistory'
  this.$target = $target
  $app.appendChild($target)

  this.onClick = onClick

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    console.log(this.state)
    this.$target.innerHTML = this.state.map((historyKeyword) => `<li data-keyword="${historyKeyword}">${historyKeyword}</li>`).join('')
  }

  $target.addEventListener('click', (e) => {
    const $li = e.target.closest('li')
    const { keyword } = $li.dataset

    this.onClick(keyword)
  })

  this.render()
}
