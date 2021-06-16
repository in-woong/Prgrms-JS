import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import SearchHistory from './SearchHistory.js';
import { searchUmzzal } from '../js/Api.js';

export default class App {
  constructor({ $app }) {
    this.$app = $app;
    this.state = {
      searchResult: {
        data: [],
        components: [],
      },
      searchHistory: {
        data: [],
        components: [],
      },
    };

    this.$children = [];

    this.register(new SearchHistory({
      $app,
      initialState: this.state,
      onClickHistory: async (text) => await this.searchHandler(text),
    }), 'searchHistory');

    this.register(new SearchInput({
      $app,
      onSearchInput: async (text) => await this.searchHandler(text),
    }));

    this.register(new SearchResult({
      $app,
      initialState: this.state,
    }), 'searchHistory');
  }

  register(component, stateKey) {
    this.$children.push(component);
    if (stateKey != null) {
      this.addStateToComponent({ component, key: stateKey });
    }
  }

  addStateToComponent({ component, key }) {
    this.state[key].components.push(component);
  }

  setState(key, newState) {
    this.state[key].data = newState;
    this.state[key].components.forEach((component) => {
      if (component.setState) component.setState(this.state);
    });
  }

  async searchHandler(text) {
    try {
      this.setState('searchResult', await searchUmzzal(text));
      if (text) {
        this.setState('searchHistory', Array.from(new Set([...this.state.searchHistory.data, text])));
      }
    } catch (err) {
      console.error(err);
    }
  }
}
