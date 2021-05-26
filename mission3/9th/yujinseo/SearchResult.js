function SearchResult({$app, initialState}) {
  this.data = initialState;

  const $searchResult = document.createElement('div');
  $searchResult.className = 'search-result';
  $app.appendChild($searchResult);

  this.setState = (nextState) => {
    this.data = nextState;
    this.render();
  }

  this.render = () => {
    this.data !== null ?
    $searchResult.innerHTML = `${this.data.map((item) => 
      `<li><img src="${item.imageUrl}" alt="${item.title}"></li>`
    ).join('')}` : $searchResult.innerHTML = ''
  }
  this.render();
}

export default SearchResult;