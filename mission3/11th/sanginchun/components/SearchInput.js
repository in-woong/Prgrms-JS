class SearchInput {
  constructor({ $parent, initialState, onSearchTermInput }) {
    if (!$parent) throw new Error('타겟 DOM이 없습니다');
    if (typeof onSearchTermInput !== 'function')
      throw new Error('onInput 함수가 올바르지 않습니다');

    this.state = initialState;

    this.$target = document.createElement('div');
    this.$target.setAttribute('data-component-type', 'SearchInput');

    this.$target.addEventListener('input', (e) =>
      onSearchTermInput(e.target.value)
    );

    this._render();
    $parent.appendChild(this.$target);
  }

  setState(nextState) {
    this.state = nextState;
    this._render();
  }

  _render() {
    this.$target.innerHTML = `
      <input type="text" placeholder="검색어를 입력하세요" value="${this.state}">
    `;
  }
}

export default SearchInput;
