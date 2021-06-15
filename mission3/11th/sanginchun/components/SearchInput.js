class SearchInput {
  constructor({ onSearchTermInput }) {
    if (typeof onSearchTermInput !== 'function')
      throw new Error('onSearchTermInput 함수가 없습니다');

    this.$target = document.createElement('div');
    this.$target.className = 'search-input';

    this.$target.addEventListener('input', (e) =>
      onSearchTermInput(e.target.value)
    );

    this._render();
  }

  _render() {
    this.$target.innerHTML = `
      <input type="search" placeholder="검색어를 입력하세요">
    `;
  }
}

export default SearchInput;
