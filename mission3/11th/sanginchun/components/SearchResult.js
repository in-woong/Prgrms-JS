class SearchResult {
  constructor({ $parent, initialResult }) {
    if (!$parent) throw new Error('타겟 DOM이 없습니다');
    this.validateResult(initialResult);

    this.state = initialResult;

    this.$target = document.createElement('div');
    this.$target.setAttribute('data-component-type', 'SearchResult');

    this._render();
    $parent.appendChild(this.$target);
  }

  setState(nextState) {
    this.validateResult(nextState);

    this.state = nextState;
    this._render();
  }

  _render() {
    this.$target.innerHTML = `
      ${this.state
        .map(
          ({ imageUrl, title }) =>
            `<div class="container">
              <img src="${imageUrl}" alt="${title}" title="${title}">
            </div>`
        )
        .join('')}
    `;
  }

  validateResult(result) {
    if (!Array.isArray(result)) throw new Error('Result가 Array가 아닙니다.');
  }
}

export default SearchResult;
