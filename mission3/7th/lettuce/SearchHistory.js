import { isValidHistoryList } from './utils.js';

function SearchHistory($target, historyList, onClickHistory) {
  if (!(this instanceof SearchHistory)) {
    throw new Error("Call with 'new'");
  }
  if (!isValidHistoryList(historyList)) {
    throw new Error('Wrong historyList');
  }

  this.$target = $target;
  this.historyList = historyList;

  this.setState = (nextHistoryList) => {
    if (!isValidHistoryList(nextHistoryList)) {
      throw new Error('Wrong historyList');
    }
    this.historyList = nextHistoryList;
    this.render();
    this.initEventListener();
  };

  this.render = () => {
    const historyHTML = this.historyList
      .map(
        (history) => `<li><button class="history-btn">${history}</button></li>`
      )
      .join('');
    this.$target.innerHTML = `<ul>${historyHTML}</ul>`;
  };

  this.initEventListener = () => {
    this.$target.addEventListener('click', (event) => {
      if (!event.target.classList.contains('history-btn')) {
        return;
      }
      onClickHistory(event);
    });
  };

  this.render();
  this.initEventListener();
}

export default SearchHistory;
