class SearchResult {
  constructor({ initialState }) {
    this.state = initialState;

    this.$target = document.createElement('div');
    this.$target.className = 'search-result';

    this._render();
  }

  setState(nextState) {
    this.state = nextState;
    this._render();
  }

  _render() {
    this.$target.innerHTML = `
      <ul class="image-list">
        ${this._filterSearchResult(this.state)
          .map(
            ({ imageUrl, title }) =>
              `<li class="image-container">
                <img src="${imageUrl}" alt="${title}" title="${title}">
              </li>`
          )
          .join('')}
      </ul>
    `;
  }

  _filterSearchResult(searchResult) {
    if (!Array.isArray(searchResult)) {
      console.error('검색결과가 Array가 아닙니다.');
      return [];
    }

    return searchResult.filter(
      ({ imageUrl }) => typeof imageUrl === 'string' && imageUrl.length
    );
  }
}

export default SearchResult;
