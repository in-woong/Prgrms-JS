import SearchHistory from './SearchHistory.js';
import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';

import jjalbotApi from '../api/jjalbotApi.js';

const DEBOUNCE_MILISEC = 500;

class App {
  constructor($app) {
    if (!$app) throw new Error('타겟 DOM이 없습니다');

    this.state = {
      searchHistory: [],
      currentSearchTerm: '',
      searchResult: { isLoading: false, isError: false, data: [] },
    };

    this.searchHistory = new SearchHistory({
      $parent: $app,
      initialState: {
        currentSearchTerm: this.state.currentSearchTerm,
        data: this.state.searchHistory,
      },
      onSearchTermClick: this.searchGif.bind(this),
    });

    this.searchInput = new SearchInput({
      $parent: $app,
      initialState: this.state.currentSearchTerm,
      onSearchTermInput: this.onSearchTermInput.bind(this),
    });

    this.searchResult = new SearchResult({
      $parent: $app,
      initialState: this.state.searchResult,
    });

    this.debounceTimer = null;
  }

  setState(nextState) {
    this.state = nextState;

    this.searchHistory.setState({
      currentSearchTerm: this.state.currentSearchTerm,
      data: this.state.searchHistory,
    });
    this.searchInput.setState(this.state.currentSearchTerm);
    this.searchResult.setState(this.state.searchResult);
  }

  onSearchTermInput(searchTerm) {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(
      () => this.searchGif.call(this, searchTerm),
      DEBOUNCE_MILISEC
    );
  }

  async searchGif(searchTerm) {
    if (!searchTerm) return;

    try {
      const nextSearchHistory = [...this.state.searchHistory];
      if (!nextSearchHistory.includes(searchTerm))
        nextSearchHistory.push(searchTerm);

      this.setState({
        ...this.state,
        searchHistory: nextSearchHistory,
        currentSearchTerm: searchTerm,
        searchResult: {
          ...this.state.searchResult,
          isLoading: true,
        },
      });

      const nextSearchResultData = await jjalbotApi.get(searchTerm);

      this.setState({
        ...this.state,
        searchResult: {
          isLoading: false,
          isError: false,
          data: nextSearchResultData,
        },
      });
    } catch (e) {
      this.setState({
        ...this.state,
        searchResult: { isLoading: false, isError: true, data: [] },
      });
    }
  }
}

export default App;
