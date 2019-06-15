const BASE_URL = 'https://jjalbot.com/api/jjals';	

const inputSelector = '#search-keyword';	
const resultSelector = '#search-result';	

const searchResult = new SearchResult([], resultSelector);	
const api = new API(BASE_URL);	
const inputNode = document.querySelector(inputSelector);	

class App {	
  constructor(searchResult, inputNode, api) {	
    this.searchResult = searchResult;	
    this.api = api;	
    this.inputNode = inputNode;
    this.isLoading = false;	
  }	

   init() {	
    this.inputNode.addEventListener('keyup', this.renderResult.bind(this));	
  }	

   async renderResult(e) {	
    this.searchResult.setState({result: [], isLoading: true});	
    const result = await this.api.httpGet(e.target.value) || [];	
    this.searchResult.setState({result, isLoaindg: false});	
  }	
}	

const app = new App(searchResult, inputNode, api);	
app.init(); 