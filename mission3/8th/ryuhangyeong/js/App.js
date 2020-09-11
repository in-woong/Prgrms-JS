class App {
  constructor($target) {
    this.searchKeyword = new SearchKeyword({
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

    this.searchResult = new SearchResult({
      $target,
    })
  }
}
