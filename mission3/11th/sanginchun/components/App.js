import SearchHistory from './SearchHistory.js';
import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';

import jjalbotApi from '../api/jjalbotApi.js';

const DEBOUNCE_MILISEC = 500;

class App {
  constructor($app) {
    if (!$app) throw new Error('타겟 DOM이 없습니다');

    this.state = { searchHistory: [], searchResult: [] };

    this.searchHistory = new SearchHistory({
      $parent: $app,
      initialState: this.state.searchHistory,
      onClick: this.onSearchTermInput.bind(this),
    });

    this.searchInput = new SearchInput({
      $parent: $app,
      onInput: this.onSearchTermInput.bind(this),
    });

    this.searchResult = new SearchResult({
      $parent: $app,
      initialState: this.state.searchResult,
    });

    this.debounceTimer = null;
  }

  setState(nextState) {
    this.state = nextState;

    this.searchHistory.setState(this.state.searchHistory);
    this.searchResult.setState(this.state.searchResult);
  }

  onSearchTermInput(searchTerm) {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(async () => {
      if (!searchTerm) return;

      try {
        const nextSearchHistory = [...this.state.searchHistory];
        const nextSearchResult = await jjalbotApi.get(searchTerm);

        if (!nextSearchHistory.includes(searchTerm))
          nextSearchHistory.push(searchTerm);

        this.setState({
          ...this.state,
          searchHistory: nextSearchHistory,
          searchResult: nextSearchResult,
        });
      } catch (e) {
        console.error(e);
      }
    }, DEBOUNCE_MILISEC);
  }
}

export default App;
