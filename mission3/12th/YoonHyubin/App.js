import SearchHistory from './SearchHistory.js'
import SearchInput from './SearchInput.js'
import SearchResult from './SearchResult.js'
import searchEngine from './searchEngine.js'

export default function App({$target}) {
    this.state = [];
    this.lastKeyword = '';

    const searchHistory = new SearchHistory({
        $target,
        onHistoryClicked: (keyword) => {
            this.search(keyword);
        }
    });

    const searchInput = new SearchInput({
        $target, 
        onInputChanged: (keyword) => {
            if (keyword === this.lastKeyword) return;

            this.search(keyword);
            searchHistory.addHistory(keyword);
            this.lastKeyword = keyword;
        }
    });

    const searchResult = new SearchResult({
        initialState: this.state, 
        $target
    });

    this.search = async (keyword) => {
        const data = await searchEngine.fetchData(keyword);
        this.setState(data.filter(data => data.imageUrl), keyword);
    };

    this.setState = (data, keyword) => {
        this.state = data;
        searchResult.setState(this.state, keyword);
    };

}
