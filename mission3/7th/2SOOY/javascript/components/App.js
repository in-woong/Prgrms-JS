import SearchResult from './SearchResult.js';
import SearchInput from './SearchInput.js';
import SearchHistory from './SearchHistory.js';

import { fetchJJals, getJJalResults } from '../utils/data.js';
import { checkTarget, checkNode } from '../utils/validator.js';
import { SELECTOR, NODE } from '../utils/constant.js';

function App($target) {
  this.init = () => {
    checkTarget($target);
    checkNode($target, NODE.MAIN);

    this.$target = $target;
    this.appState = {
      jjals: [],
      histories: [],
      isInputEmpty: true,
    };

    this.searchResult = new SearchResult(
      this.$target.querySelector(SELECTOR.SEARCH_RESULT),
      this.appState.jjals,
      this.appState.isInputEmpty
    );

    this.searchInput = new SearchInput(
      this.$target.querySelector(SELECTOR.SEARCH_INPUT),
      this.onSearchKeyword
    );

    this.searchHistory = new SearchHistory(
      this.$target.querySelector(SELECTOR.SEARCH_HISTORY),
      this.appState.histories,
      this.onSearchKeyword
    );
  };

  this.onSearchKeyword = async (keyword) => {
    let jjals = [];
    let histories = new Set([...this.appState.histories]);
    let isInputEmpty = true;

    if (keyword) {
      isInputEmpty = false;
      const jjalsTotalInfo = await fetchJJals(keyword);
      jjals = getJJalResults(jjalsTotalInfo);
      histories.add(keyword);
    }
    histories = Array.from(histories);

    const nextState = {
      jjals,
      histories,
      isInputEmpty,
    };

    this.searchInput.$target.value = keyword;
    this.setState(nextState);
  };

  this.setState = ({ jjals, histories, isInputEmpty }) => {
    this.appState = {
      ...this.appState,
      jjals,
      histories,
      isInputEmpty,
    };

    this.searchResult.setState({
      jjals: this.appState.jjals,
      isInputEmpty: this.appState.isInputEmpty,
    });
    this.searchHistory.setState(this.appState.histories);
  };

  this.init();
}

export default App;
