import SearchKeyword from './SearchKeyword.js';
import SearchResult from './SearchResult.js';
import { GET } from './Api.js';

class App {
    constructor() {
        this.state = [];
        this.searchKeyword = new SearchKeyword('#search-keyword',(keyword)=> {
            
            GET(keyword).then((data) => {
                this.setState(data);
            })
            
        }); 
        this.searchResult = new SearchResult('#search-result',this.state); 
        this.render();
    }

    setState = (newState) => {
        this.state = newState;
        this.render();
    }

    render = () => {
        this.searchResult.setState(this.state);
    }
}

export default App;