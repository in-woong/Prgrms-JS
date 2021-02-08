import SearchKeyword from './SearchKeyword.js';
import SearchResult from './SearchResult.js';
import GET  from './Api.js';

class App {
    constructor() {
        this.state = [];
        this.searchKeyword = new SearchKeyword('#search-keyword', this.searchHandler)
        this.searchResult = new SearchResult('#search-result',this.state); 
        this.render();
    }

    searchHandler = async (keyword)=> {
        try {
            const resData = await GET(keyword);
            this.setState(resData);
        } catch (e) {
            console.log(e);
        }
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