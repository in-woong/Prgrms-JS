const BASE_URL = 'https://jjalbot.com/api/jjals';	

const inputSelector = '#search-keyword';	
const resultSelector = '#search-result';	

const searchResult = new SearchResult();
const searchInput = new SearchInput();
const api = new API(BASE_URL);	

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
      this.searchInput.init(this.$container, inputSelector);
      this.searchResult.init(this.$container, resultSelector);
      this.searchInput.addEventListener('keyup', this.renderResult.bind(this));
   }	

   async renderResult(e) {	
    this.searchResult.setState({result: [], isLoading: true});	
    const result = await this.api.httpGet(e.target.value) || [];	
    this.searchResult.setState({result, isLoaindg: false});	
  }	
}	

const app = new App(searchResult, searchInput, api);	
app.init(); 