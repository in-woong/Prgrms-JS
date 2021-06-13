class SearchResult {
  constructor({ $parent, initialState }) {
    if (!$parent) throw new Error('타겟 DOM이 없습니다');
    this.validateResult(initialState.data);

    this.state = initialState;

    this.$target = document.createElement('div');
    this.$target.setAttribute('data-component-type', 'SearchResult');

    this._render();
    $parent.appendChild(this.$target);
  }

  setState(nextState) {
    this.validateResult(nextState.data);

    this.state = nextState;
    this._render();
  }

  _render() {
    if (this.state.isLoading) {
      this.$target.innerHTML = `<div>검색 중 ...</div>`;
      return;
    }

    if (!this.state.data.length) {
      this.$target.innerHTML = `<div>검색 결과가 없습니다</div>`;
      return;
    }

    this.$target.innerHTML = `
      ${this.state.data
        .map(({ imageUrl, title }) =>
          imageUrl
            ? `<div class="container">
              <img src="${imageUrl}" alt="${title}" title="${title}">
            </div>`
            : ''
        )
        .join('')}
    `;
  }

  validateResult(result) {
    if (!Array.isArray(result)) throw new Error('Result가 Array가 아닙니다.');
  }
}

export default SearchResult;
