import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import { debounce } from './util.js';
import SearchHistory from './SearchHistory.js';

function App($el) {
    this.data = [];
    this.history = [];
    const fetchData = async (keyword) => {
        try {
            const res = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`);
            return await res.json();
        } catch (error) {
            throw new Error(error);
        }
    };

    this.onKeyDown = (keyword) => debounce(async () => {
        const data = await fetchData(keyword);
        this.setState({data: [...data], history: [...this.history, keyword]});
    }, 200)


    this.searchHistory = new SearchHistory({data: this.history, $parent: $el});
    this.searchInput = new SearchInput({onKeyDown: this.onKeyDown, $parent: $el});
    this.searchResult = new SearchResult({data: this.data, $parent:$el});
    this.setState = ({data, history}) => {
    this.data = data;
    this.history = history;
      this.searchResult.setState(this.data);  
      this.searchHistory.setState(this.history);
    };
};

export default App;