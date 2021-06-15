class SearchResult {
  constructor({ initialState }) {
    this.state = {
      ...initialState,
      data: this.validateSearchResult(initialState.data),
    };

    this.$target = document.createElement('div');
    this.$target.className = 'search-result';

    this._render();
  }

  setState(nextState) {
    this.state = {
      ...nextState,
      data: this.validateSearchResult(nextState.data),
    };
    this._render();
  }

  _render() {
    if (this.state.isLoading) {
      this.$target.innerHTML = `<div class="message">검색 중 ...</div>`;
      return;
    }

    if (this.state.isError) {
      this.$target.innerHTML = `<div class="message">오류가 발생했습니다. 다시 검색해주세요</div>`;
      return;
    }

    if (!this.state.data.length && this.state.currentSearchTerm) {
      this.$target.innerHTML = `<div class="message">'${this.state.currentSearchTerm}'에 대한 검색 결과가 없습니다</div>`;
      return;
    }

    this.$target.innerHTML = `
      <ul class="image-list">
        ${this.state.data
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

  validateSearchResult(searchResult) {
    if (!Array.isArray(searchResult)) {
      console.error('검색결과가 Array가 아닙니다.');
      return [];
    }

    return searchResult.filter(({ imageUrl }) => typeof imageUrl === 'string');
  }
}

export default SearchResult;
