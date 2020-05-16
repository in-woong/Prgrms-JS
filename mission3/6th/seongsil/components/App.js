import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import { fetchJjalbotList } from '../api/index.js';

function App() {
  this.jjalbotData = [];

  const $searchInput = document.querySelector('#search-keyword');
  const $searchResult = document.querySelector('#search-result');

  this.updateState = (newData) => {
    this.jjalbotData = fetchJjalbotList(newData);
    this.searchResult.setState(this.jjalbotData);
  }

  this.searchInput = new SearchInput($searchInput, this.jjalbotData, {
    onSearchKeyword: (data) => {
      this.updateState(data);
    }
  })

  this.searchResult = new SearchResult($searchResult, this.jjalbotData);
}

export default App;
