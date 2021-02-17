import SearchInput from "./searchInput.js";
import SearchResult from "./searchResult.js";

export default function App($app, initialState) {
  this.$app = $app
  
  this.state = initialState
  
  this.setState = (newData) => {
    this.state = newData
    this.render()
  }

  this.fetchJjalImage = async (keyword) => {
    const res = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
    return res.json();
  }


  const handleInput = async (event) => {
    const newData = await this.fetchJjalImage(event.target.value)
    console.log(newData)
    this.setState(newData)
  }

  
  this.render = () => {    
    searchInput.render()
    searchResult.render(this.state)
  }

  const searchInput = new SearchInput(document.querySelector("#search-keyword"), handleInput);
  const searchResult = new SearchResult(document.querySelector("#search-result"), this.state);

  this.render()
}
