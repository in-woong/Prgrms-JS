function SearchHistory({ data, $target, onClickHistory }) {
  if (!(this instanceof SearchHistory)) {
    throw new Error('[SearchHistory] new 키워드로 실행되지 않았습니다.')
  }

  this.init = function() {
    this.data = data
    this.$target = $target
    this.$target.addEventListener('click', e => {
      onClickHistory(e.target.innerText)
    })
  }

  this.render = function() {
    this.$target.innerHTML = `<ul>${this.data
      .map(text => `<li>${text}</li>`)
      .join(' ')}</ul>`
  }

  this.setState = function(newData) {
    this.data = newData
    this.render()
  }

  this.init()
  this.render()
}

export default SearchHistory
