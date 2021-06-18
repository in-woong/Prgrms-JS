class SearchHistory {
  constructor({ initialState, onClick }) {
    this.state = initialState;

    this.$target = document.createElement('nav');
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
      <ul class="search-term-list" tabindex="0">
        ${this.state.searchHistory
          .map((searchTerm) => {
            const className = `search-term-button ${
              this.state.currentSearchTerm === searchTerm ? 'current' : ''
            }`.trimEnd();

            return `
              <li>
                <button class="${className}" value="${searchTerm}">${searchTerm}</button>
              </li>
            `;
          })
          .join('')}
      </ul>
    `;
  }
}

export default SearchHistory;
