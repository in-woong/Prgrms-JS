class SearchKeyword {
  $target = null
  $searchKeyword = null
  onSearch = null

  constructor({ $target, onSearch }) {
    this.$target = $target
    this.$searchKeyword = document.createElement('input')
    this.$searchKeyword.placeholder = '검색하세요'

    this.$target.appendChild(this.$searchKeyword)

    this.onSearch = onSearch

    this.$searchKeyword.addEventListener('keyup', (e) => {
      const { value } = e.target
      if (!value) return
      this.onSearch(value)
    })
  }
}
