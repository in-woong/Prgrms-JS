function App() {
  const init = () => {
    this.data = []
    this.searchKeyword = new SearchKeyword('#search-keyword', {
      onKeyUp: getResultData,
    })
    this.searchResult = new SearchResult(this.data, '#search-result')
  }

  const getResultData = searchKeyword => {
    fetch(`https://jjalbot.com/api/jjals?text=${searchKeyword}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState(data)
      })
      .catch(error => console.log(error))
  }

  this.setState = newData => {
    this.data = newData
    this.searchResult.setState(this.data)
  }

  init()
}
