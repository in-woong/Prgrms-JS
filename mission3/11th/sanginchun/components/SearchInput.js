class SearchInput {
  constructor({ onInput }) {
    this.$target = document.createElement('section');
    this.$target.className = 'search-input';
    this.$target.setAttribute('role', 'search');

    this.$target.addEventListener('input', onInput);

    this._render();
  }

  _render() {
    this.$target.innerHTML = `
      <label for="search-term-input">검색어를 입력하세요</label>
      <input id="search-term-input" type="search">
    `;
  }
}

export default SearchInput;
