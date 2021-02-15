function SearchResult({ targetDOM, initData }) {
  this.$targetDOM = targetDOM
  this.searchResultData = initData

  this.$serchResultDOM = document.createElement('div')
  this.$serchResultDOM.id = 'search-result'
  this.$targetDOM.appendChild(this.$serchResultDOM)

  this.setState = (newState) => {
    this.searchResultData = newState
    this.render()
  }

  this.render = () => {
    const htmlString = `${this.searchResultData.map((d) => (d.imageUrl ? `<img src="${d.imageUrl}">` : ``)).join('')}`
    this.$serchResultDOM.innerHTML = htmlString

    if (this.searchResultData.length === 0) this.$serchResultDOM.innerHTML = `<p>해당하는 검색결과가 없습니다.</p>`
  }

  this.render()
}

export default SearchResult
