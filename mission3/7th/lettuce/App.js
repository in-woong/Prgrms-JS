import SearchResult from './SearchResult.js';
import SearchInput from './SearchInput.js';
import SearchHistory from './SearchHistory.js';
import { getDataFromjjalbot } from './api.js';
import { debounce } from './utils.js';

function App() {
  if (!(this instanceof App)) {
    throw new Error("Call with 'new'");
  }
  this.$target = document.querySelector('#app');
  this.historyList = [];

  this.render = function () {
    this.$target.innerHTML = `
        <div id="search-history"></div>
        <input id="search-keyword" />
        <div id="search-result"></div>
    `;
    this.searchHistoryComponent = new SearchHistory(
      document.querySelector('#search-history'),
      this.historyList,
      this.onClickHistory
    );
    this.searchResultComponent = new SearchResult(
      document.querySelector('#search-result'),
      []
    );
    this.searchInputComponent = new SearchInput(
      document.querySelector('#search-keyword'),
      this.OnKeyupForSearchInput
    );
  };

  this.search = async (searchText) => {
    if (searchText === '') {
      return;
    }
    const data = await getDataFromjjalbot(searchText);
    this.searchResultComponent.setState(data);
  };

  this.OnKeyupForSearchInput = debounce((event) => {
    const searchText = event.target.value.trim();
    if (searchText === '') {
      return;
    }
    this.search(searchText);
    this.historyList.push(searchText);
    event.target.value = '';
    event.target.blur();
    event.target.focus();
    this.searchHistoryComponent.setState(this.historyList);
  });

  this.onClickHistory = debounce((event) => {
    const searchText = event.target.textContent.trim();
    this.search(searchText);
  });

  this.render();
}

export default App;
