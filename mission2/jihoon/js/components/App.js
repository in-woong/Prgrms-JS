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
    const searchKeywordHTMLString = this.keyword.render();
    const searchResultHTMLString = this.result.render();
    $root.innerHTML = searchInputHTMLString + searchKeywordHTMLString + searchResultHTMLString;
  }
  listen() {
    this.input.listen(this.result.setState.bind(this.result), this.keyword.setState.bind(this.keyword));
  }
}
