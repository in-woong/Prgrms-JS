import SearchHistory from './SearchHistory.js';
import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';

import getImage from '../api/jjalbotApi.js';

import useDebounceFunction from '../helpers/debounce.js';

class App {
  constructor($app) {
    if (!$app) throw new Error('타겟 DOM이 없습니다');

    this.state = {
      searchHistory: { currentSearchTerm: '', data: [] },
      searchResult: {
        isLoading: false,
        isError: false,
        currentSearchTerm: '',
        data: [],
      },
    };

    new SearchInput({
      $parent: $app,
      onSearchTermInput: this.onSearchTermInput.bind(this),
    });

    this.searchHistory = new SearchHistory({
      $parent: $app,
      initialState: this.state.searchHistory,
      onSearchTermClick: this.searchGif.bind(this),
    });

    this.searchResult = new SearchResult({
      $parent: $app,
      initialState: this.state.searchResult,
    });

    this.debounceSearchGif = useDebounceFunction(
      this.searchGif.bind(this),
      500
    );
  }

  setState(nextState) {
    this.state = nextState;

    this.searchHistory.setState(this.state.searchHistory);
    this.searchResult.setState(this.state.searchResult);
  }

  onSearchTermInput(searchTerm) {
    this.debounceSearchGif(searchTerm);
  }

  async searchGif(searchTerm) {
    if (!searchTerm) return;

    try {
      this.setState({
        ...this.state,
        searchResult: {
          ...this.state.searchResult,
          isLoading: true,
        },
      });

      const nextSearchResultData = await getImage(searchTerm);

      const shouldUpdateSearchHistory =
        nextSearchResultData.length &&
        !this.state.searchHistory.data.includes(searchTerm);

      this.setState({
        searchHistory: {
          currentSearchTerm: searchTerm,
          data: shouldUpdateSearchHistory
            ? [...this.state.searchHistory.data, searchTerm]
            : this.state.searchHistory.data,
        },
        searchResult: {
          isLoading: false,
          isError: false,
          currentSearchTerm: searchTerm,
          data: nextSearchResultData,
        },
      });
    } catch (e) {
      if (e.name === 'Error') {
        console.error(e.message);

        this.setState({
          ...this.state,
          searchResult: {
            isLoading: false,
            isError: true,
            currentSearchTerm: searchTerm,
            data: [],
          },
        });
      } else throw e;
    }
  }
}

export default App;
