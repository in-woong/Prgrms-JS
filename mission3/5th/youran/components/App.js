function App() {
  const init = () => {
    this.data = []
    this.searchKeyword = new SearchKeyword('#search-keyword', {
      onKeyUp: getResultData,
    })
    this.searchResult = new SearchResult(this.data, '#search-result')
  }

  const getResultData = searchKeyword => {
    searchData(searchKeyword).then(data => this.setState(data))
  }

  this.setState = newData => {
    this.data = newData
    this.searchResult.setState(this.data)
  }

  init()
}
