import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import SearchHistory from './SearchHistory.js';

function App() {
  const inputElement = document.querySelector('#search-keyword');
  const resultElement = document.querySelector('#search-result');
  const historyElement = document.querySelector('#search-history');

  this.state = {
    apiData: [],
    inputHistory: [],
  };
  const searchHistory = new SearchHistory({
    $target: historyElement,
    handleHistoryClick: function (text) {
      searchInput.setState(text);
    },
  });
  const searchResult = new SearchResult({
    $target: resultElement,
  });
  const searchInput = new SearchInput({
    $target: inputElement,
    handleResultImageData: (data) => {
      this.state.apiData = data;
      searchResult.setState(data);
    },
    handleHistoryText: (keyword) => {
      if (keyword) {
        this.state.inputHistory.push(keyword);
      }
      searchHistory.setState(this.state.inputHistory);
    },
  });
}
export default App;
