import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';

import jjalbotApi from '../api/jjalbotApi.js';

const DEBOUNCE_MILISEC = 500;

class App {
  constructor($app) {
    if (!$app) throw new Error('타겟 DOM이 없습니다');

    this.state = { searchResult: [] };

    this.searchInput = new SearchInput({
      $parent: $app,
      onInput: this.onSearchTermInput.bind(this),
    });

    this.searchResult = new SearchResult({
      $parent: $app,
      initialResult: this.state.searchResult,
    });

    this.debounceTimer = null;
  }

  setState(nextState) {
    this.state = nextState;

    this.searchResult.setState(this.state.searchResult);
  }

  onSearchTermInput(searchTerm) {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(async () => {
      if (!searchTerm) return;

      try {
        const searchResult = await jjalbotApi.get(searchTerm);

        this.setState({ ...this.state, searchResult });
      } catch (e) {
        console.error(e);
      }
    }, DEBOUNCE_MILISEC);
  }
}

export default App;
