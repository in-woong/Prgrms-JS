class SearchHistory {
  constructor({ initialState, onClick }) {
    this.state = initialState;

    this.$target = document.createElement('div');
    this.$target.className = 'search-history';

    this.$target.addEventListener('click', onClick);

    this._render();
  }

  setState(nextState) {
    this.state = nextState;
    this._render();
  }

  _render() {
    this.$target.innerHTML = `
      <ul class="search-term-list">
        ${this.state.searchHistory
          .map((searchTerm) => {
            const className = `search-term ${
              this.state.currentSearchTerm === searchTerm ? 'current' : ''
            }`.trimEnd();

            return `<li class="${className}">${searchTerm}</li>`;
          })
          .join('')}
      </ul>
    `;
  }
}

export default SearchHistory;
