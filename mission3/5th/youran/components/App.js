function App() {
  const init = () => {
    this.data = []
    this.searchKeyword = new SearchKeyword('#search-keyword', {
      onKeyUp: getResultData,
    })
    this.searchResult = new SearchResult(this.data, '#search-result')
  }

  this.setState = newData => {
    this.data = newData
    this.searchResult.setState(this.data)
  }

  const getResultData = async searchKeyword => {
    try {
      const jsonData = await loadJSONData(
        `https://jjalbot.com/api/jjals?text=${searchKeyword}`
      )
      this.setState(generateResultData(jsonData))
    } catch (error) {
      console.error(error)
    }
  }

  init()
}

const generateResultData = jsonData => {
  return jsonData.map(item => ({
    imageUrl: item.imageUrl,
    title: item.title,
  }))
}
