class SearchResult {
  constructor({ $parent, initialState }) {
    if (!$parent) throw new Error('타겟 DOM이 없습니다');
    this.state = {
      ...initialState,
      data: this.validateSearchResult(initialState.data),
    };

    this.$target = document.createElement('div');
    this.$target.className = 'search-result';

    this._render();
    $parent.appendChild(this.$target);
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

    if (!this.state.data.length) {
      this.$target.innerHTML = `<div class="message">검색 결과가 없습니다</div>`;
      return;
    }

    this.$target.innerHTML = `
      ${this.state.data
        .map(
          ({ imageUrl, title }) =>
            `<div class="container">
              <img src="${imageUrl}" alt="${title}" title="${title}">
            </div>`
        )
        .join('')}
    `;
  }

  validateSearchResult(searchResult) {
    if (!Array.isArray(searchResult)) {
      console.error('검색결과가 Array가 아닙니다.');
      return [];
    }

    return searchResult.filter(({ imageUrl }) => imageUrl);
  }
}

export default SearchResult;
