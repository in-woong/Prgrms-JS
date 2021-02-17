import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import { getTargetElement } from './validationUtil.js';
import { fetchJjalsList } from './fetchApi.js';

function App() {
  const searchInputElement = getTargetElement('#search-keyword');
  const searchResultElement = getTargetElement('#search-result');

  this.keyPressInput = async e => {
    const searchText = e.target.value;
    const jjals = await fetchJjalsList(searchText);
    this.searchResult.setState(jjals);
  }

  this.searchResult = new SearchResult(searchResultElement, []);
  this.searchInput = new SearchInput(searchInputElement, this.keyPressInput);
}  

export default App;
