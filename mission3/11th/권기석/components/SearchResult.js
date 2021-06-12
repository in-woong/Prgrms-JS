export default function SearchResult({ $app, initialState }) {
  this.state = initialState
  this.$searchResult = document.createElement('ul')
  this.$searchResult.id = 'search-result'
  $app.appendChild(this.$searchResult)

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    this.$searchResult.innerHTML = this.state.map((item) => `<li><img src="${item.imageUrl}"/></li>`).join('')
  }

  this.render()
}
