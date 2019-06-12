class App {
  constructor(rootId, inputId, resultId) {
    this.rootId = rootId;
    this.input = new SearchInput(inputId);
    this.result = new SearchResult([], resultId);
  }
  render() {
    const $root = document.querySelector(this.rootId);
    const $searchInput = this.input.render();
    const $searchResult = this.result.render();
    $root.innerHTML = $searchInput + $searchResult;
  }
  listen() {
    this.input.listen(this.result.setState.bind(this.result));
  }
}
