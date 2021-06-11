import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'

export default class SearchApp {
  constructor() {
    this.state = [];
    this.searchInput = new SearchInput(async (inputValue) => {
      console.log(inputValue);
      const receivedData = await this.communicateWithAPI(inputValue);
      this.setState(receivedData)
    })
    this.searchResult = new SearchResult(this.state, '#search-result')
  }

  async communicateWithAPI(inputValue){
    return await fetch(`https://jjalbot.com/api/jjals?text=${inputValue}`)
    .then((x) => {return x.json()})
}
    

  setState(receivedData) {
    this.state = receivedData;
    this.searchResult.setState(this.state)
  }
}
