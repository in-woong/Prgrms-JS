import SearchInput from './SearchInput.js';
import SearchHistory from './SearchHistory.js';
import SearchStatus from './SearchStatus.js';
import SearchResult from './SearchResult.js';

import getImage from '../api/jjalbotApi.js';

import useDebounceFunction from '../helpers/debounce.js';

class App {
  constructor($app) {
    if (!$app) throw new Error('타겟 DOM이 없습니다');

    this.state = {
      currentSearchTerm: '',
      searchHistory: [],
      searchResult: [],
      searchStatus: { isLoading: false, isError: false },
    };

    this.searchInput = new SearchInput({
      onInput: this.onSearchTermInput.bind(this),
    });

    this.searchHistory = new SearchHistory({
      initialState: {
        currentSearchTerm: this.state.currentSearchTerm,
        searchHistory: this.state.searchHistory,
      },
      onClick: this.onSearchHistoryClick.bind(this),
    });

    this.searchStatus = new SearchStatus({
      initialState: {
        currentSearchTerm: this.state.currentSearchTerm,
        searchResult: this.state.searchResult,
        searchStatus: this.state.searchStatus,
      },
    });

    this.searchResult = new SearchResult({
      initialState: this.state.searchResult,
    });

    this.debounceSearchGif = useDebounceFunction(
      this.searchGif.bind(this),
      500
    );

    const fragment = document.createDocumentFragment();
    [
      this.searchInput,
      this.searchHistory,
      this.searchStatus,
      this.searchResult,
    ].forEach((childComponent) => fragment.appendChild(childComponent.$target));

    $app.appendChild(fragment);
  }

  setState(nextState) {
    this.state = nextState;

    this.searchHistory.setState({
      currentSearchTerm: this.state.currentSearchTerm,
      searchHistory: this.state.searchHistory,
    });
    this.searchStatus.setState({
      currentSearchTerm: this.state.currentSearchTerm,
      searchResult: this.state.searchResult,
      searchStatus: this.state.searchStatus,
    });
    this.searchResult.setState(this.state.searchResult);
  }

  onSearchTermInput(e) {
    const searchTerm = e.target.value;
    if (searchTerm) this.debounceSearchGif(searchTerm);
  }

  onSearchHistoryClick(e) {
    const searchTerm = e.target.closest('li.search-term')?.innerText;
    if (searchTerm) this.searchGif(searchTerm);
  }

  async searchGif(searchTerm) {
    try {
      this.setState({
        ...this.state,
        currentSearchTerm: searchTerm,
        searchResult: [],
        searchStatus: {
          isLoading: true,
          isError: false,
        },
      });

      const nextSearchResult = await getImage(searchTerm);

      const shouldUpdateSearchHistory =
        nextSearchResult.length &&
        !this.state.searchHistory.includes(searchTerm);

      this.setState({
        currentSearchTerm: searchTerm,
        searchHistory: shouldUpdateSearchHistory
          ? [...this.state.searchHistory, searchTerm]
          : this.state.searchHistory,
        searchStatus: { isLoading: false, isError: false },
        searchResult: nextSearchResult,
      });
    } catch (e) {
      if (e.name === 'Error') {
        console.error(e.message);

        this.setState({
          ...this.state,
          currentSearchTerm: searchTerm,
          searchResult: [],
          searchStatus: {
            isLoading: false,
            isError: true,
          },
        });
      } else throw e;
    }
  }
}

export default App;
