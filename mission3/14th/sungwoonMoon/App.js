import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import SearchHistory from './SearchHistory.js';

export default function () {
  this.state = {
    jjals: [],
    history: [],
  };

  this.searchHistory = new SearchHistory({
    initialState: this.state.history,
    $target: '#search-history',
    onHistoryClick: (text) => {
      this.searchInput.search(text, false);
    },
  });

  this.searchInput = new SearchInput({
    onDataLoad: (text, jjals, isSaveHistory = true) => {
      let history = isSaveHistory
        ? [...this.state.history, text]
        : [...this.state.history];
      const nextState = { jjals, history };
      this.setState(nextState);
    },
  });

  this.searchResult = new SearchResult({
    initialState: this.state.jjals,
    $target: '#search-result',
  });

  this.setState = (nextState) => {
    this.state = nextState;
    this.searchResult.setState(this.state.jjals);
    this.searchHistory.setState(this.state.history);
  };
}
