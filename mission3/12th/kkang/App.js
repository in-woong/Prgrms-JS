import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";
import SearchHistory from "./SearchHistory.js";
import $ from "./helpers.js";

export default function App($target) {
  this.$target = $target;
  this.state = {
    searchResult: [],
    searchHistory: [],
    debounceTimerID: undefined,
  };

  this.getJjal = async (keyword) => {
    if (keyword.length === 0) {
      return;
    }

    const result = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`);

    if (result.ok) {
      const data = await result.json();

      return data;
    }
  }

  this.onSearchKeyword = async (e) => {
    if (e.target.value === '') {
      $('#search-result').innerHTML = '';
      return;
    }
    if (this.state.debounceTimerID !== undefined) {
      clearTimeout(this.state.debounceTimerID);
    }
    this.state.debounceTimerID = setTimeout(async () => {
      const datas = await this.getJjal(e.target.value);

      this.setState({searchResult: datas, searchHistory: [...this.state.searchHistory, e.target.value]});
    }, 600);
  };

  this.onSearchHistoryKeyword = async (e) => {
    if (e.target.value === '') {
      return; 
    }

    const datas = await this.getJjal(e.target.innerText);

    this.setState({...this.state, searchResult: datas});
  };

  this.searchResult = new SearchResult(
    {
      initialState: [],
      $target: $('#app')
    }
  );

  this.searchHistory = new SearchHistory(
    {
      initialState: [],
      $target: $('#app'),
      onClick: this.onSearchHistoryKeyword
    }
  );

  this.searchInput = new SearchInput(
    {
      $target: $('#app'),
      onSearchKeyword: this.onSearchKeyword
    }
  );

  this.setState = (nextState) => {
    this.searchHistory.setState(nextState.searchHistory);
    this.searchResult.setState(nextState.searchResult);
    
    this.state.searchResult = nextState.searchResult;
    this.state.searchHistory = nextState.searchHistory;
    this.searchResult.state = this.state.searchResult;
    this.searchHistory.state = this.state.searchHistory;
  };

  this.render = () => {
    this.searchHistory.render();
    this.searchInput.render();
    this.searchResult.render();
  };

  this.render();
}
