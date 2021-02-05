import SearchInput from "./searchInput.js";
import SearchResult from "./searchResult.js";

const ENTER_KEY_CODE = 13;

export default function App($app, initialState) {
  this.$app = $app
  
  this.state = initialState
  
  this.setState = (newData) => {
    this.state = newData
    this.render()
  }
 
  const handleInput = (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      fetch (`https://jjalbot.com/api/jjals?text=${event.target.value}`) 
        .then(x => x.json())
        .then(data => this.setState(data)) 
    } 
  }

  this.render = () => {
    const searchInput = new SearchInput(document.querySelector("#search-keyword"), handleInput);
    const searchResult = new SearchResult(document.querySelector("#search-result"), this.state);
    searchInput.render()
    searchResult.render()
  }

  this.render()
}
