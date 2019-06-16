
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
    const debouncedResult = _.debounce(this.renderResult.bind(this), 500);

    this.searchInput.addEventListener('keyup', (e) => {
      this.searchResult.setState({data: [], isLoading: true });
      debouncedResult(e.target.value);
    });
  }	

  async renderResult(value) {
    const result = await this.api.httpGet(value) || [];	
    this.searchResult.setState({result, isLoaindg: false});	
  }	
}	

const app = new App(searchResult, searchInput, api);	
app.init(); 