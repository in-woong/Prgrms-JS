export default class SearchHistory {
  constructor({ $app, initialState: { searchHistory: { data } }, onClickHistory }) {
    this.$target = document.createElement('ul');
    this.state = data;
    this.onClickHistory = onClickHistory;

    this.$target.addEventListener('click', ({ target }) => {
      if (target.closest('li') !== null) {
        this.onClickHistory(target.closest('li').innerText);
      }
    });

    $app.appendChild(this.$target);
  }

  render() {
    this.$target.innerHTML = this.state.reduce((acc, cur) => `${acc} <li>${cur}</li>`, '');
  }

  setState({ searchHistory: { data } }) {
    this.state = data;
    this.render();
  }
}
