const searchKeywordCreateView = () => { return `<input id="search-keyword" />`; }

const searchKeywordRender = () => {
  this.element.innerHTML = this.createView();
}

function SearchKeyword() {
  this.element = document.querySelector(`#${this.elementId}`);
}

export { SearchKeyword, searchKeywordCreateView };
