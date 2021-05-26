import SearchInput from "./searchInput.js";
import SearchResult from "./searchResult.js";
import SearchHistory from "./searchHistory.js";

export default function App($app, initialState) {
  this.$app = $app
  
  this.state = initialState
  
  this.setState = (newData, keyword) => {
    this.state.imageData = newData
    this.state.searchHistory.push(keyword)
    this.render()
  }

  this.fetchJjalImage = async (keyword) => {
    const res = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
    return res.json();
  }


  const handleInput = async (event) => {
    const newData = await this.fetchJjalImage(event.target.value)
    this.setState(newData, event.target.value)
  }

  
  this.render = () => {    
    searchInput.render()
    searchResult.render(this.state.imageData)
    searchHistory.render(this.state.searchHistory)
  }

  const searchInput = new SearchInput(document.querySelector("#search-keyword"), handleInput);
  const searchResult = new SearchResult(document.querySelector("#search-result"));
  const searchHistory = new SearchHistory(document.querySelector("#search-history"));

  this.render()
}
