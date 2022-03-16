function SearchHistory({ $target, initialState, onSearch }) {
  this.$target = $target;
  this.state = initialState;

  this.onClick = (e) => {
    if (
      e.target.classList.contains('history') &&
      e.target instanceof HTMLSpanElement
    ) {
      onSearch({ searchValue: e.target.textContent, isHistory: true });
    }
  };

  this.$target.addEventListener('click', this.onClick);

  this.render = () => {
    const { history } = this.state;
    const list = history
      .map((item) => `<li><span class="history">${item}</span></li>`)
      .join('');

    this.$target.innerHTML = list;
  };

  this.setState = (newState) => {
    this.state = newState;

    this.render();
  };

  this.render();
}

export default SearchHistory;
