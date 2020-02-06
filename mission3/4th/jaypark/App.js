import SearchError from './SearchError.js'
import SearchResult from './SearchResult.js'
import SearchKeyword from './SearchKeyword.js'
import SearchHistory from './SearchHistory.js'
import { fetch_json } from './utils.js'


const usePixa = true;

class App {
  async search(keyword) {
    try {
      const data = await fetch_json(keyword, usePixa);
      this.result.setState(data);
      this.history.addKeyword(keyword);
    }
    catch (err) {
      this.error.setMessage('fetch failed', err);
    }
  }

  constructor(resultId, inputId) {
    this.error = new SearchError('#search-result');
    this.result = new SearchResult('#search-result', usePixa);
    this.input = new SearchKeyword('#keyword', this.search.bind(this));
    this.history = new SearchHistory('#history', this.search.bind(this));
  }
}

export default App;
