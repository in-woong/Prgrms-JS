import SearchResult from './SearchResult.js';
import SearchInput from './SearchInput.js';
import SearchHistory from './SearchHistory.js';

function App() {

    this.data = [];
    const $resultBox = document.querySelector('#search-result');
    const $historyBox = document.querySelector('#search-history');

    const searchInput = new SearchInput(this);
    const searchResult = new SearchResult(this.data, $resultBox);
    const searchHistory = new SearchHistory(this, $historyBox);

    this.setState = (newData, keyword) => {
        this.data = newData;
        searchResult.setState(this.data);
        searchHistory.addHistory(keyword); // input컴포넌트에서 엔터쳐야 실행되는데 왜 처음부터 실행되지.....

    }
}

export default App;
