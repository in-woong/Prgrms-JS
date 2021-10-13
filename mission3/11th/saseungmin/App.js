import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import SearchHistory from './SearchHistory.js';

import fetchJjals from './api.js';

class App {
  constructor() {
    this.SearchInput = new SearchInput(
      '#search-keyword',
      (text) => this.setState(text),
    );
    this.SearchResult = new SearchResult('#search-result');
    this.SearchHistory = new SearchHistory(
      '#search-history',
      (keyword) => this.setState(keyword),
    );
  }

  async setState(newText) {
    try {
      const data = await fetchJjals(newText);

      this.SearchResult.render(data);
      this.SearchHistory.setHistory(newText);
    } catch (error) {
      this.SearchResult.render([]);
      console.error(error.message);
    }
  }
}

export default App;
