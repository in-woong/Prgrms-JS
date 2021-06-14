class SearchHistory {
  constructor($app) {
    this.$target = document.createElement('div')
    this.$target.className = 'search-histroy'
    $app.append(this.$target)
  }

  render = () => {
    this.$target.innerHTML = `
      <input type="text">
    `
  }
}

export default SearchHistory
