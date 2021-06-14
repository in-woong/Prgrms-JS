import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";
import {requestAPI} from "./api/api.js";

function main($app, $input, $target, initialState){
  this.data = initialState;
  this.$input = $input;
  this.$target = $target;

  const searchInput = new SearchInput({
    $input : this.$input,
    onFetchData: (text) => {
    const data = requestAPI.fetchJjalGif(text);
    this.setState(data);
  }});

  const searchResult = new SearchResult(this.data, $target);
  

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    searchResult.setState(this.state)
  }
}

export default main;