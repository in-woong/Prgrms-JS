import SearchResult from './SearchResult.js';
import SearchInput from './SearchInput.js';
import SearchHistory from './SearchHistory.js';
import { fetchData } from './utils.js';

function App() {
  if (!(this instanceof App)) {
    throw new Error('error: App must be called with new!');
  }

  this.data = null;
  this.keyword = null;

  const onSearchKeyword = async (newKeyword) => {
    this.keyword = newKeyword;
    try {
      const responseLists = await fetchData(newKeyword);
      this.setState(responseLists);
    } catch (error) {
      console.log(error);
    }
  };

  this.render = () => {
    this.HistoryContainer = document.querySelector('#search-history');
    this.KeywordContainer = document.querySelector('#search-keyword');
    this.ResultContainer = document.querySelector('#search-result');

    // prettier-ignore
    try {
      this.searchInput = new SearchInput(this.KeywordContainer, onSearchKeyword);
      this.SearchHistory = new SearchHistory(this.HistoryContainer, onSearchKeyword);
      this.searchResult = new SearchResult(this.data, this.ResultContainer);
    } catch (error) {
      console.log(error);
    }
  };

  this.setState = (data) => {
    data.length && this.SearchHistory.setState(this.keyword);
    this.searchResult.setState(data);
  };

  this.render();
}

export default App;
