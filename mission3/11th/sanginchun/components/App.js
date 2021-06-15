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

    this.searchInput = new SearchInput({
      onInput: this.onSearchTermInput.bind(this),
    });

    this.searchHistory = new SearchHistory({
      initialState: this.state.searchHistory,
      onClick: this.onSearchHistoryClick.bind(this),
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
      this.searchResult,
    ].forEach((childComponent) => fragment.appendChild(childComponent.$target));

    $app.appendChild(fragment);
  }

  setState(nextState) {
    this.state = nextState;

    this.searchHistory.setState(this.state.searchHistory);
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
