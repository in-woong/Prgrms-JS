import SearchResult from './SearchResult.js';
import SearchInput from './SearchInput.js';
import SearchHistory from './SearchHistory.js';
import ErrorMessage from './ErrorMessage.js';
import { dummyData, jjalbotAPI } from './api.js';

function App() {
    this.textState = {
        text : '',
        isClicked : false,
    }

    this.searchData = {
        jjals: [],
        histories: []
    }

    this.searchJjals = async keyword => {
        try {
            if(!keyword) {
                return;
            }
            const result = await jjalbotAPI(keyword);
            this.setState({
                jjals: result,
                histories: this.searchData.histories.includes(keyword)
                ? this.searchData.histories
                : this.searchData.histories.concat(keyword)
            });
        } catch(err) {
            this.searchHistory.setState([]);
            this.searchInput.setState([]);
            this.searchResult.setState([]);
            this.errorMessage.setState('API is not available');
            console.error(err);
        }
    }

    try {
        this.setState = resultData => {
            this.searchData = {...resultData};
            this.searchResult.setState(this.searchData.jjals);
            this.searchHistory.setState(this.searchData.histories);
        }
    
        this.searchHistory = new SearchHistory({
            elementId : 'search-history',
            histories : this.searchData.histories,
            searchJjals : this.searchJjals
        });
        this.searchInput = new SearchInput({
            elementId : 'search-keyword',
            searchJjals : this.searchJjals
        });
        this.searchResult = new SearchResult({
            elementId : 'search-result',
            jjalData: dummyData,
        });
        this.errorMessage = new ErrorMessage({
            elementId : 'error-show',
            message: ''
        });
    } catch{}
}

export default App;
