function SearchHistory(target, search, histories) {
  this.$target = target
  this.histories = histories
  this.$history = document.createElement('div')
  this.$target.appendChild(this.$history)
  this.$history.addEventListener('click', (e) => {
    search(e.target.getAttribute('data'))
  })
  this.render = function () {
    const htmlString = this.histories
      .map((data) => `<p data="${data}">${data}</p>`)
      .join('')
    this.$history.innerHTML = htmlString
  }
  this.setState = function (histories) {
    this.histories = histories
    this.render()
  }
}

export default SearchHistory
