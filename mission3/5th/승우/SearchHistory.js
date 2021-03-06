//SearchHistory.js

function SearchHistory({ historyData, $selector, onSearch }) {
  validateSelector($selector)

  this.historyData = historyData || []
  this.$target = document.querySelector($selector)

  this.render = () => {
    this.$target.innerHTML = this.historyData
      .map(d => {
        return `<li>${d}</li>`
      })
      .join('')
  }

  this.setState = newData => {
    this.historyData = newData
    this.render()
  }

  //클릭 이벤트 추가
  this.$target.addEventListener(
    'click',
    debounce(e => {
      if (e.target && e.target.nodeName === 'LI') {
        onSearch(e.target.textContent)
      }
    }, debounceTime)
  )

  this.render()
}
