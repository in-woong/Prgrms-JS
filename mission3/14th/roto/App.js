import SearchHistory from './SearchHistory.js';
import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import { fetchJjal } from './api.js';

export default function App({ $target }) {
  this.state = {
    keyword: '',
    searchHistories: [],
    searchResults: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;
    searchInput.setState(this.state.keyword);
    searchHistory.setState(this.state.searchHistories);
    searchResult.setState(this.state.searchResults);
  };

  const searchHistory = new SearchHistory({
    $target,
    initialState: this.state.searchHistories,
    onClick: async (keyword) => {
      const data = await fetchJjal(keyword);

      this.setState({
        ...this.state,
        keyword,
        searchResults: data,
      });
    },
  });

  const searchInput = new SearchInput({
    $target,
    initialState: this.state.keyword,
    onChange: async (keyword) => {
      if (keyword && keyword.length > 0) {
        const data = await fetchJjal(keyword);
        const nextHistories = [...this.state.searchHistories];

        if (!nextHistories.includes(keyword)) {
          nextHistories.push(keyword);
        }
        this.setState({
          ...this.state,
          searchHistories: nextHistories,
          searchResults: data,
        });
      }
    },
  });

  const searchResult = new SearchResult({
    $target,
    initialState: this.state.searchResults,
  });
}
