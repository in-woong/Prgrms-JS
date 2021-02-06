import SearchInput from "./searchInput.js";
import SearchResult from "./searchResult.js";

export default function App($app, initialState) {
  this.$app = $app
  
  this.state = initialState
  
  this.setState = (newData) => {
    this.state = newData
    this.render()
  }

  this.fetchKeyword = async (keyword) => {
    const res = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
    return res.json();
  }

  let timer;
  const handleInput = (event) => {
    
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(async () => {
      console.log(event.target.value)
      const newData = await this.fetchKeyword(event.target.value)
      this.setState(newData)
    }, 200)

  }

  
  this.render = () => {
    const searchInput = new SearchInput(document.querySelector("#search-keyword"), handleInput);
    const searchResult = new SearchResult(document.querySelector("#search-result"), this.state);
    searchInput.render()
    searchResult.render()
  }

  this.render()
}
