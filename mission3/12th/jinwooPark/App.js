import Component from './component/Component.js'
import SearchInput from './component/SearchInput.js'
import SearchResult from './component/SearchResult.js'
import SearchHistory from './component/SearchHistory.js'

export default class App extends Component {

  setup() {
    this.state = {history: [], result: [], searchValue: ""};
  }

  template() {
    return `<div class='search-input-component'></div>
            <ul class='search-history-component'></ul>
            <div class='search-result-component'></div>`
  }

  mounted() {
    const $SearchInput = document.querySelector('.search-input-component')
    const $SearchHistory = document.querySelector('.search-history-component')
    const $SearchResult = document.querySelector('.search-result-component')
    new SearchInput({ $target: $SearchInput, initialState:{searchValue: this.searchValue}, setSearchValue: this.setSearchValue.bind(this) ,changeSearchItems: this.changeSearchItems.bind(this)})
    new SearchHistory({ $target: $SearchHistory, historyList: this.history, changeSearchItems: this.changeSearchItems.bind(this) })
    new SearchResult({ $target: $SearchResult, initialState:{result: this.result} })
  }

  get searchValue(){
    return this.state.searchValue;
  }

  setSearchValue(value){
    this.state.searchValue = value;
  }

  get history() {
    return [...this.state.history];
  }

  setHistory(keyword) {
    this.setState({history: [...this.state.history, keyword]});
  }

  get result(){
    return [...this.state.result];
  }

  setResult(results){
    this.setState({result: [...results]})
  }

  searchKeyword(keyword){
    ;(async () => {
      if (keyword) {
        await this.changeSearchItems(keyword, true);
      }
    })()
  }

  async changeSearchItems(keyword, onHistory){
    const response = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
    const data = await response.json()
    this.setResult(data)
    if(onHistory) {
      this.setHistory(keyword)
    }
  }

  setEvent() {

  }
}
