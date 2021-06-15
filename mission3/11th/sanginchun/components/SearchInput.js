class SearchInput {
  constructor({ onInput }) {
    this.$target = document.createElement('div');
    this.$target.className = 'search-input';

    this.$target.addEventListener('input', onInput);

    this._render();
  }

  _render() {
    this.$target.innerHTML = `
      <input type="search" placeholder="검색어를 입력하세요">
    `;
  }
}

export default SearchInput;
