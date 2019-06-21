class App {
  constructor() {
    this.id = '#app';
    this.input = new SearchInput();
    this.result = new SearchResult();
    this.keyword = new FetchedKeyword();
  }
  render() {
    const $root = document.querySelector(this.id);
    const searchInputHTMLString = this.input.render();
    const fetchedKeywordHTMLString = this.keyword.render();
    const searchResultHTMLString = this.result.render();
    $root.innerHTML = searchInputHTMLString + fetchedKeywordHTMLString + searchResultHTMLString;
  }
  listen() {
    this.input.listen(async function(keyword) {
      try {
        const result = await getJjals(keyword);
        this.keyword.setState(keyword);
        this.result.setState(result);
      } catch(e) {
        this.keyword.setState(keyword);
        this.result.setState([]);
      }
    }.bind(this), 1000);
  }
}
