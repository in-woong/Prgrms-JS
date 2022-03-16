function SearchHistory({ $target, initialState }) {
  this.state = initialState;
  const history = document.createElement('div');
  $target.appendChild(history);
  this.history = history;

  this.setState = ({ historyList, currentIndex }) => {
    if (historyList) {
      this.state = historyList;
    }
    this.render();
  };

  this.render = () => {
    history.innerHTML = `
      ${this.state
        .map(
          (el, idx) =>
            `<span class="result-span-history" data-index=${idx}>${el}</span>`
        )
        .join('')}
    `;
  };

  this.render();

  history.addEventListener('click', (e) => {
    const $history = e.target.closest('span.result-span-history');
    const { index: indexString } = $history.dataset;
    const index = parseInt(indexString);
    this.setState({ currentIndex: index });
  });
}

export default SearchHistory;
