import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import SearchHistory from './SearchHistory.js';

function App({ $target, initialState }) {
  this.$target = $target;
  this.state = {
    ...initialState,
    isInitial: true,
  };
  this.$searchInput = document.querySelector('#search-keyword');
  this.$searchResult = document.querySelector('#search-result');
  this.$searchHistory = document.createElement('ul');

  this.onSearch = async ({ searchValue, isHistory }) => {
    try {
      const response = await fetch(
        `https://jjalbot.com/api/jjals?text=${searchValue}`
      );

      if (!response.ok) {
        throw Error('요청에 실패했습니다. 잠시 후 다시 시도해주세요.');
      }

      const data = await response.json();

      this.$searchInput.value = searchValue;
      this.setState({
        data,
        ...(!isHistory && { searchValue }),
      });
    } catch (error) {
      alert(error.message);
    }
  };

  this.onChange = async (e) => {
    const searchValue = e.target.value;

    if (!searchValue.trim()) {
      return;
    }

    this.onSearch({ searchValue, isHistory: false });
  };

  this.searchInput = new SearchInput({
    $target: this.$searchInput,
    onChange: this.onChange,
  });

  this.searchResult = new SearchResult({
    $target: this.$searchResult,
    initialState: this.state,
  });

  this.searchHistory = new SearchHistory({
    $target: this.$searchHistory,
    initialState: this.state,
    onSearch: this.onSearch,
  });

  this.setState = (newState) => {
    const { data, searchValue } = newState;

    this.state = {
      data,
      history: searchValue
        ? [...this.state.history, searchValue]
        : this.state.history,
      isInitial: false,
    };

    this.searchResult.setState(this.state);
    this.searchHistory.setState(this.state);
  };

  this.render = () => {
    this.$searchHistory.classList.add('history-container');
    this.$target.insertBefore(this.$searchHistory, this.$searchInput);
  };

  this.render();
}

export default App;
