import SearchResult from './searchResult.js';
import SearchInput from './searchInput.js';
import SearchHistory from './searchHistory.js';
import { fetchApi } from './api.js';

function App(){
    this.$target = document.querySelector("#app");  
    this.$history = document.querySelector("#search-history");
    this.$input = document.querySelector("#search-keyword");
    this.$result = document.querySelector("#search-result");

    this.historyState = new Map();

    this.searchResult = new SearchResult({
        $target :  this.$result, 
        initialState : [],
    });

    this.setResultState = (newData) => {
        this.searchResult.setState(newData);
    }

    this.setHistoryState = (newDataName, newDataArray) => {
        this.searchHistory.setState(newDataName, newDataArray);
    }

    this.setInputState = (timer, inputName) => {
        return fetchApi({
            timer : timer,
            inputName : inputName,
            setResultState : this.setResultState,
            setHistoryState: this.setHistoryState,
        })
    }

    this.searchHistory = new SearchHistory({
        $target : this.$history,
        historyState : this.historyState,
        setResultState : this.setResultState,
    });

    new SearchInput({
        $target : this.$input,
        setInputState : this.setInputState,
    });


}

export default App;