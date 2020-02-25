//App.js

function App() {
  this.init = () => {
    //data 초기화
    this.data = []
    this.historyData = []

    try {
      //Component 선언
      this.$searchKeyword = new SearchKeyword(searchKeywordSelector, {
        onSearch: this.getFetchedData,
        onAddHistory: this.addHistory,
      })
      this.searchResult = new SearchResult(this.data, searchResultSelector)
      this.searchHistory = new SearchHistory(
        this.historyData,
        searchHistorySelector,
        {
          onSearch: this.getFetchedData,
        }
      )
    } catch (e) {
      console.log(e)
    }
  } //End Init

  //functions
  this.fetchData = inputValue => {
    return fetch(`https://jjalbot.com/api/jjals?text=${inputValue}`).then(
      res => {
        return res.json()
      }
    )
  }

  this.getFetchedData = async inputValue => {
    try {
      const resultData = await this.fetchData(inputValue)
      console.log(JSON.stringify(resultData, null, 2))
      //   return data
      this.data = resultData
      this.searchResult.setState(resultData)
    } catch (e) {
      console.log(e)
    }
  }

  this.addHistory = inputHistory => {
    if (inputHistory !== '') {
      const newHistoryData = [...this.historyData, inputHistory]
      this.historyData = newHistoryData
      this.searchHistory.setState(newHistoryData)
    }
  }

  this.init()
}
