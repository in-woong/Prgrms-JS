
import SearchResult from './SearchResult.js';
import SearchInput from './SearchInput.js';
import SearchHistory from './SearchHistory.js';
import { SELECTOR_SEARCH_RESULT, SELECTOR_SEARCH_KEYWORD, SELECTOR_SEARCH_HISTORY } from './constant.js';
import { fetchJjalbot } from './api.js';

function App() {

    this.data = null;
    this.inputText = null;

    this.applyApiResponse = async (value) => {
        this.inputText = value;
        this.data = await fetchJjalbot(this.inputText);
        this.SearchResult.setState(this.data);        
    }

    this.onKeyup = e => {
        this.applyApiResponse(e.target.value);
        this.SearchHistory.setState(this.inputText);
    }

    this.onClickHistory =  e => {
        this.applyApiResponse(e.target.textContent);
    }

    this.SearchInput = new SearchInput(SELECTOR_SEARCH_KEYWORD, this.onKeyup);
    this.SearchResult = new SearchResult(SELECTOR_SEARCH_RESULT, this.data);
    this.SearchHistory = new SearchHistory(SELECTOR_SEARCH_HISTORY, this.onClickHistory);
}

export default App
