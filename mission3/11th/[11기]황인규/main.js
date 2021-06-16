import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import SearchHistory from "./components/SearchHistory.js";
import {UniId} from "./utils/curTime.js";
import {requestAPI} from "./api/api.js";


function main($app, initialState){
  this.$app = $app;
  this.$state = initialState;
  const searchHistory = new SearchHistory({
      $app : $app,
      $state : this.$state,
      onSearchHistory : async(text) => {
        const response = await requestAPI.fetchJjalGif(text);
        if(!response)
          alert("API 요청이 잘못 되었습니다.");
        const newData = {
          searchHistory : [...this.$state.searchHistory],
          data : response,
        }
        this.setState(newData);
      }
  });

  const searchInput = new SearchInput({
    $app : this.$app,
    onFetchData: async(text) => {
      const response = await requestAPI.fetchJjalGif(text);
      if(!response)
        alert("API 요청이 잘못 되었습니다.");
      const newData = {
        searchHistory : this.$state.searchHistory.includes(text) === true ? [...this.$state.searchHistory] : [...this.$state.searchHistory, {id : UniId(), data : text}],
        data : response,
      }
      this.setState(newData);
    }
  });

  const searchResult = new SearchResult(this.state, this.$app);

  this.setState = (nextState) => {
    this.$state = nextState
    this.render(this.$state)
  }

  this.render = (state) => {
    searchResult.setState(state);
    searchHistory.setState(state);
  }
}

export default main;
