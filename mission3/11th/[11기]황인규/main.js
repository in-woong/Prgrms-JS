import SearchInput from "./components/searchInput.js";
import SearchResult from "./components/searchResult.js";
import SearchHistory from "./components/searchHistory.js";
import {UniId} from "./utils/curTime.js";
import {requestAPI} from "./api/api.js";
import {useDebounceFunction} from "./utils/debounce.js";
import {errorMessage} from "./utils/errorMessage.js";
import {checkDataValidation} from "./utils/validation.js";
import {setLocalStorage} from "../utils/localStorage.js";


function main($app, initialState){
  this.$app = $app;
  this.$state = initialState;
  if(!new.target)
    throw new Error(errorMessage.CHECK_NEW_ERROR());

  const attachAppToDom = (...components) => {
    components.forEach(({element}) => this.$app.appendChild(element));
    document.body.appendChild($app);
  }
  this.render = () => {
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
            isLoading : true,
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
          
          const previousData = {
            searchHistory : [...this.$state.searchHistory],
            isLoading : false,
            data : [...this.$state.data],
          }

          this.setState(previousData);

          try{
          
            const response = await requestAPI.fetchJjalGif(text);
            setLocalStorage(text, response);
            if(!response)
              alert("API 요청이 잘못 되었습니다.");

            checkDataValidation(response);
            
            const newData = {
              searchHistory : this.$state.searchHistory.indexOf(text) >=0 || response.length === 0 ? [...this.$state.searchHistory] : [...this.$state.searchHistory, text],
              isLoading : true,
              data : response,
            }
            this.setState(newData);

         }catch(error){
          if (error.name === "Error") {
            const statusCode = parseInt(e.message);
      
            if (statusCode >= 500) throw new Error(errorMessage.CHECK_SERVER_ERROR(statusCode));
            else if (statusCode >= 400) throw new Error(errorMessage.CHECK_CLIENT_ERROR(statusCode));
            else throw new Error(errorMessage.CHECK_STATUS_CODE());
          }
          throw new Error(errorMessage.CHECK_FETCH());
         }
    }

    this.onUseDebounceFunction = useDebounceFunction(
      fetchAPI, 500
    )

    const searchResult = new SearchResult(this.state, this.$app);

    attachAppToDom(searchInput, searchHistory, searchResult);

    this.setState = (nextState) => {
      this.$state = nextState
      searchResult.setState(this.$state);
      searchHistory.setState(this.$state);
    }
  }
  this.render();
}

export default main;
