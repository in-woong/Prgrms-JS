class SearchHistory {
  constructor(target, onClickHistory) {
    this.$target = document.querySelector(target);
    this.histories = [];
    this.onClick = onClickHistory;
    this.handleClick();
  }

  handleClick() {
    this.$target.addEventListener('click', (e) => this.onClick(e.target.innerText));
  }

  setHistory(keyword) {
    const hasKeyword = this.histories.some((history) => history === keyword);

    if (!hasKeyword) {
      this.histories = [...this.histories, keyword];

      this.render();
    }
  }

  render() {
    this.$target.innerHTML = `<ul>${this.histories
      .reduce((elements, history) => `${elements}<li>${history}</li>`, '')}
    </ul>`;
  }
}

export default SearchHistory;
