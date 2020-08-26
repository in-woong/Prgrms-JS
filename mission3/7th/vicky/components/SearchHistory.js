import { HISTORY_MAX_LENGTH } from './constantKeys.js';

function SearchHistory(target, onSearchKeyword) {
  if (!(this instanceof SearchHistory)) {
    throw new Error('error: SearchHistory must be called with new!');
  }

  this.targetContainer = target;
  this.historyLists = [];

  const onAddHistory = (keyword) => {
    const historyList = [...this.historyLists];
    if (historyList.includes(keyword)) {
      return historyList;
    }

    const isMax = historyList.length >= HISTORY_MAX_LENGTH;
    return isMax
      ? [...historyList.splice(1), keyword]
      : [...historyList, keyword];
  };

  this.render = () => {
    const historyHtmlString = this.historyLists
      .map((searchHistory) => `<li>${searchHistory}</li>`)
      .join('');
    this.targetContainer.innerHTML = historyHtmlString;
  };

  this.setState = (newKeyword) => {
    this.historyLists = onAddHistory(newKeyword);
    this.render();
  };

  this.targetContainer.addEventListener('click', function (event) {
    const {
      target: { nodeName, innerHTML },
    } = event;
    if (nodeName === 'LI') {
      onSearchKeyword(innerHTML);
    }
  });
}

export default SearchHistory;
