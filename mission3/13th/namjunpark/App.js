import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import SearchHistory from './SearchHistory.js';
import { API } from './config.js';

function App($target) {
  this.searchedResult = [];
  this.inputHistory = [];

  this.setState = ({ searchedResult }) => {
    this.searchedResult = searchedResult;
    this.render();
  };

  this.render = () => {
    searchResult.setState(this.searchedResult);
    searchHistory.setState({ historyList: this.inputHistory });
  };

  // promise or async
  // const onSearch = (input) => {
  //   fetch(`${API}${input}`)
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ searchedResult: res }));
  // };

  const recordSearchHistory = (nextState) => {
    if (nextState) {
      this.inputHistory.push(nextState);
    }
  };

  const getResult = (input) => {
    const response = fetch(`${API}${input}`);
    return response.then((res) => res.json());
  };

  const onSearch = async (input) => {
    const result = await getResult(input);
    this.setState({ searchedResult: result });
  };

  new SearchInput($target, onSearch, recordSearchHistory);
  const searchHistory = new SearchHistory({
    $target,
    initialState: this.inputHistory,
  });
  const searchResult = new SearchResult({
    $target,
    initialState: this.searchedResult,
  });

  searchHistory.history.addEventListener('click', (e) => {
    const $history = e.target.closest('span.result-span-history');
    onSearch($history.textContent);
  });
}

export default App;
