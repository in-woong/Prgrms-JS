export default function SearchHistory({ $app, onClickKeyword }) {
  this.state = []
  this.$searchHistory = document.createElement('ul')
  this.$searchHistory.id = 'search-history'
  this.onClickKeyword = onClickKeyword

  $app.appendChild(this.$searchHistory)

  this.$searchHistory.addEventListener('click', (e) => {
    const keyword = e.target.closest('li')?.dataset.keyword
    if (keyword) {
      this.onClickKeyword(keyword)
    }
  })

  this.setState = (nextState) => {
    if (this.state.length > 10) {
      this.state = [nextState, ...this.state].pop()
    }
    this.state = [nextState, ...this.state]
    this.render()
  }

  this.render = () => {
    this.$searchHistory.innerHTML = this.state.map((keyword) => `<li class="keyword" data-keyword=${keyword}>${keyword}</li>`).join('')
  }

  this.render()
}
