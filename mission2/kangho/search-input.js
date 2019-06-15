class SearchInput {

  constructor(selector) {
    this.selector = selector;
    this.searchInputNode = null;
  }

  init() {
    this.searchInputNode = document.querySelector(this.selector);
  }

  addEventListener(eventName, fn) {
    this.searchInputNode.addEventListener(eventName, fn);
  }
}