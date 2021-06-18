class SearchInput {
  constructor({ onInput }) {
    this.$target = document.createElement('div');
    this.$target.className = 'search-input';

    this.$target.addEventListener('input', onInput);

    this._render();
  }

  _render() {
    this.$target.innerHTML = `
      <label>움짤을 검색해보세요
        <input type="search">
      </label>
    `;
  }
}

export default SearchInput;
