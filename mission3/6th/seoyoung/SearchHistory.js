class SearchHistory {
  constructor() {
    this.history = []
    this.init()
  }
  add(keyWord) {
    if (keyWord && !this.history.includes(keyWord)) {
      this.history.push(keyWord)
      this.render()
    }
  }
  render() {
    console.log(this.history)
    const htmlString = this.history
      .map((keyWord) => `<li>${keyWord}</li>`)
      .join('')
    this.$history.innerHTML = htmlString
  }
  init() {
    this.$ = document.querySelector('#search-history')
    this.$.innerHTML = '<h2>검색 히스토리</h2><div id = "history"></div>'
    this.$history = document.querySelector('#history')
    this.$history.innerHTML = '검색내역이 없습니다'
  }
}

export default SearchHistory
