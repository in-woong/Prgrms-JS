import SearchResult from './SearchResult.js';
import SearchInput from './SearchInput.js';

function App() {

    this.data = [];

    const $resultBox = document.querySelector('#search-result');

    const searchInput = new SearchInput(this);
    const searchResult = new SearchResult(this.data, $resultBox);

    this.sendData = (newData) => {
        this.data = newData;
        searchResult.setState(this.data);
    }
}

export default App;
