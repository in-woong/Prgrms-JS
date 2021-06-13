class SearchHistory {
  constructor({ $parent, initialState, onClick }) {
    if (!$parent) throw new Error('타겟 DOM이 없습니다');
    if (typeof onClick !== 'function')
      throw new Error('onClick 함수가 올바르지 않습니다');

    this.state = initialState;

    this.$target = document.createElement('div');
    this.$target.setAttribute('data-component-type', 'SearchHistory');

    this.$target.addEventListener('click', (e) => {
      if (!e.target.closest('li')) return;

      onClick(e.target.closest('li').innerText);
    });

    this._render();
    $parent.appendChild(this.$target);
  }

  setState(nextState) {
    this.state = nextState;
    this._render();
  }

  _render() {
    if (!this.state.length) {
      this.$target.innerHTML = `<div>검색 기록이 없습니다</div>`;
      return;
    }

    this.$target.innerHTML = `
      <ul>
        ${this.state.map((searchTerm) => `<li>${searchTerm}</li>`).join('')}
      </ul>
    `;
  }
}

export default SearchHistory;