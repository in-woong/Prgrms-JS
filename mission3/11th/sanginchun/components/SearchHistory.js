class SearchHistory {
  constructor({ initialState, onSearchTermClick }) {
    if (typeof onSearchTermClick !== 'function')
      throw new Error('onSearchTermClick 함수가 없습니다');

    this.state = initialState;

    this.$target = document.createElement('div');
    this.$target.className = 'search-history';

    this.$target.addEventListener('click', (e) => {
      if (!e.target.closest('li')) return;

      onSearchTermClick(e.target.closest('li').innerText);
    });

    this._render();
  }

  setState(nextState) {
    this.state = nextState;
    this._render();
  }

  _render() {
    this.$target.innerHTML = `
      <ul>
        ${this.state.data
          .map(
            (searchTerm) =>
              `<li class="${
                this.state.currentSearchTerm === searchTerm ? 'current' : ''
              }">${searchTerm}</li>`
          )
          .join('')}
      </ul>
    `;
  }
}

export default SearchHistory;
