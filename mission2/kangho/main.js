import SearchInput from './search-input.js';
import SearchResult from './search-result.js';
import API from './api.js';
import * as _ from './utils.js';

const BASE_URL = 'https://jjalbot.com/api/jjals';	

const inputSelector = '#search-keyword';	
const resultSelector = '#search-result';	

class App {	
  constructor(
    searchResult,
    searchInput,
    api
  ) {	
    this.searchResult = searchResult;	
    this.api = api;	
    this.searchInput = searchInput;
    this.isLoading = false;
    this.$container = document.body;
  }	

  init() {
    this.searchInput.init(this.$container, 'input', inputSelector);
    this.searchResult.init(this.$container, 'div', resultSelector);
    const debounce = _.debounce(this.renderResult.bind(this), 500);

    this.searchInput.addEventListener('keyup', (e) => {
      this.searchResult.setState({data: [], isLoading: true });
      debounce(e.target.value);
    });
  }	

  async renderResult(value) {
    const result = await this.api.httpGet({text: value}) || [];	
    this.searchResult.setState({result, isLoaindg: false});	
  }	
}	

const app = new App(new SearchResult(),  new SearchInput(), new API(BASE_URL));	
app.init(); 