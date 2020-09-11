class App {
  constructor($target) {
    this.searchKeyword = new SearchKeyword({
      $target,
      onSearch: (value) => {
        try {
          debounce(async () => {
            const data = await getListByKeyword(value)
            this.searchResult.setState(data)
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
