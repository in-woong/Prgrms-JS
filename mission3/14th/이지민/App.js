import SearchInput from './SearchInput.js';
import API from './api.js';
import SearchResult from './SearchResult.js';
import SearchHistory from './SearchHistory.js';

export default function App() {
  const $history = document.querySelector('.history');
  const $target = document.querySelector('#search-result');

  this.state = [];
  this.historyState = [];

  this.setState = (nextState, searchText) => {
    this.state = nextState;
    if (!this.historyState.includes(searchText)) {
      this.historyState.push(searchText);
    }
    searchResult.setState(this.state);
    searchHistory.setState(this.historyState);
  };

  const searchHistory = new SearchHistory({
    $history,
    initialData: this.historyState,
    onSubmit: async (historyText) => {
      const result = await API(historyText);
      this.setState(result, historyText);
    },
  });

  const searchInput = new SearchInput({
    onSubmit: async (searchText) => {
      const result = await API(searchText);
      this.setState(result, searchText);
    },
  });

  const searchResult = new SearchResult({ $target, initialState: this.state });
}
