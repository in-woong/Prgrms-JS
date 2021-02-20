import SearchInput from './components/SearchInput.js';
import SearchResult from './components/SearchResult.js';
import jjalbotAPI from './api/jjalbotAPI.js';

const App = function($App) {
  const HandleSearch = async(value) => {
    try {
      const result = await jjalbotAPI(value);
      this.searchResult.setState(result);
    } catch(error) {
      alert(error);
    }
  }
  this.searchInput = new SearchInput({
    $app: $App,
    onSearch: HandleSearch
  });
  this.searchResult = new SearchResult({
    $app: $App,
    data: [],
  })
}

export default App;