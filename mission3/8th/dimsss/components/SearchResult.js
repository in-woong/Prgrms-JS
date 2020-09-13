const searchResultCreateView = (data) => {
  if (!data) return `<div id="search-result"></div>`;
  return `<div id="search-result">${data.map((item) => { return `<img src="${item.imageUrl}" />` }).join('')}</div>`
}

const searchResultRender = (element, data) => { element.innerHTML = searchResultCreateView(data) }

function SearchResult(searchResultElement) {
  this.element = searchResultElement;

  this.setState = (newState) => {
    this.data = newState;
    searchResultRender(this.element, this.data);
  }
}

export { SearchResult, searchResultCreateView }
