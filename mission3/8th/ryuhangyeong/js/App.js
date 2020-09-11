class App {
  state = {
    historyData: [],
  }

  constructor($target) {
    this.searchHistory = new SearchHistory({
      $target,
      onSearch: async (value) => {
        try {
          const data = await getListByKeyword(value)
          this.searchResult.setState(data)
        } catch (e) {
          alert(e)
        }
      },
    })

    this.searchInput = new SearchInput({
      $target,
      onSearch: (value) => {
        try {
          debounce(async () => {
            const data = await getListByKeyword(value)
            const { historyData } = this.state

            this.searchResult.setState(data)

            historyData.unshift(value)
            this.searchHistory.setState(historyData)
          }, 400)
        } catch (e) {
          alert(e)
        }
      },
    })

    this.searchResult = new SearchResult({
      $target,
    })
  }
}
