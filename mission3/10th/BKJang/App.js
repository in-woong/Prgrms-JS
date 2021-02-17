import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import SearchHistory from './SearchHistory.js';
import { getTargetElement } from './validationUtil.js';
import { fetchJjalsList } from './fetchApi.js';

function App() {
  const searchInputElement = getTargetElement('#search-keyword');
  const searchResultElement = getTargetElement('#search-result');
  const searchHistoryElement = getTargetElement('#search-history');

  this.getJjalsListWithHistory = async searchText => {
    this.searchInput.changeSearchInput(searchText);
    const jjals = await fetchJjalsList(searchText);
    this.searchResult.setState(jjals);
  }

  this.getJjalsList = async searchText => {
    this.getJjalsListWithHistory(searchText);
    this.searchHistory.addSearchHistory(searchText);
  }

  this.searchResult = new SearchResult(searchResultElement, []);
  this.searchInput = new SearchInput(searchInputElement, this.getJjalsList);
  this.searchHistory = new SearchHistory(searchHistoryElement, [], this.getJjalsListWithHistory);
}  

export default App;
