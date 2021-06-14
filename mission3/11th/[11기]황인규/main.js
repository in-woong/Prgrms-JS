import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";

function main($app, $target, initialState){
  this.data = initialState;
  const searchInput = new SearchInput({onFetchData: (text) => {
    this.setState(text);
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