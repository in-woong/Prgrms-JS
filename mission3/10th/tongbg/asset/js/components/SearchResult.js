function SearchResult({ $appDOM, initData }) {
  this.searchResultData = initData
  this.$appDOM = $appDOM

  this.$serchResultDOM = document.createElement('div')
  $appDOM.appendChild(this.$serchResultDOM)

  this.setState = (newState) => {
    this.searchResultData = newState
    this.render()
  }

  this.render = () => {
    const htmlString = `${this.searchResultData.map((d) => `<img src="${d.imageUrl}">`).join('')}`
    this.$serchResultDOM.innerHTML = htmlString

    if (this.searchResultData.length === 0) this.$serchResultDOM.innerHTML = `<p>해당하는 검색결과가 없습니다.<p>`
  }

  this.render()
}

export default SearchResult
