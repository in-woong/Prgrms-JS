function App() {
  const init = () => {
    this.data = []
    this.historyData = []
    this.searchKeyword = new SearchKeyword('#search-keyword', {
      onKeyUp: getResultData,
    })
    try {
      this.searchResult = new SearchResult(this.data, '#search-result')
      this.searchHistory = new SearchHistory(
        this.historyData,
        '#search-history',
        { onClick: getResultData }
      )
    } catch (error) {
      console.error(error)
    }
  }

  this.setState = newData => {
    this.data = newData
    this.searchResult.setState(this.data)
  }

  this.setKeywordHistory = (keyword, isFromHistory) => {
    let newData = this.historyData
    if (isFromHistory) {
      newData = newData.filter(text => text !== keyword)
    }
    this.historyData = [...newData, keyword]
    this.searchHistory.setState(this.historyData)
  }

  const getResultData = async (searchKeyword, isFromHistory = false) => {
    if (typeof searchKeyword !== 'string' || searchKeyword.length < 1) return
    try {
      const jsonData = await loadJSONData(
        `https://jjalbot.com/api/jjals?text=${searchKeyword}`
      )
      this.setState(generateResultData(jsonData))
      this.setKeywordHistory(searchKeyword, isFromHistory)
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
