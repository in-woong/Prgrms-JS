//SearchHistory.js

function SearchHistory(data, $selector, loadData) {
  this.data = data
  this.$target = document.querySelector($selector)

  this.render = () => {
    this.$target.innerHTML = this.data
      .map(d => {
        return `<li>${d}</li>`
      })
      .join('')
  }

  this.setState = nextData => {
    const newData = [...this.data, nextData]
    this.data = newData
    this.render()
  }

  //클릭 이벤트 추가
  this.$target.addEventListener('click', e => {
    if (e.target && e.target.nodeName === 'LI') {
      const value = e.target.textContent
      loadData(value)
    }
  })

  this.render()
}
