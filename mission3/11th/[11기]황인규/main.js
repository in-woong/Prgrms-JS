import SearchInput from "./components/searchInput.js";
import SearchResult from "./components/searchResult.js";
import SearchHistory from "./components/searchHistory.js";
import {UniId} from "./utils/curTime.js";
import {requestAPI} from "./api/api.js";
import {useDebounceFunction} from "./utils/debounce.js";
import {errorMessage} from "./utils/errorMessage.js";
import {checkDataValidation} from "./utils/validation.js"






function main($app, initialState){
  this.$app = $app;
  this.$state = initialState;
  if(!new.target)
    throw new Error(errorMessage.CHECK_NEW_ERROR());

  const searchHistory = new SearchHistory({
      $app : $app,
      $state : this.$state,
      onSearchHistory : async(text) => {
        const response = await requestAPI.fetchJjalGif(text);
        if(!response)
          alert("API 요청이 잘못 되었습니다.");
        
        checkDataValidation(response);

        const newData = {
          searchHistory : [...this.$state.searchHistory],
          data : response,
        }
        this.setState(newData);
      }
  });

  const searchInput = new SearchInput({
    $app : this.$app,
    
    //FIXME : 2번씩 호출되는 현상 
    onFetchData: async(text) => {
      this.onUseDebounceFunction(text);
    }
  });

  const fetchAPI = async(text) => {
    const response = await requestAPI.fetchJjalGif(text);
        if(!response)
        alert("API 요청이 잘못 되었습니다.");
       
        checkDataValidation(response);
        
        const newData = {
        searchHistory : this.$state.searchHistory.includes(text) === true ? [...this.$state.searchHistory] : [...this.$state.searchHistory, {id : UniId(), data : text}],
        data : response,
      }
      this.setState(newData);
  }

  this.onUseDebounceFunction = useDebounceFunction(
    fetchAPI, 500
  )

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
