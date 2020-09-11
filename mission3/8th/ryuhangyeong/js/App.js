class App {
  constructor($target) {
    this.searchKeyword = new SearchKeyword({
      $target,
      onSearch: (value) => {
        getListByKeyword(value)
          .then((data) => this.searchResult.setState(data))
          .catch((e) => {
            alert(e)
          })
      },
    })

    this.searchResult = new SearchResult({
      $target,
    })
  }
}
