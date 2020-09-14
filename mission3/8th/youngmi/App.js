import SearchResult from './SearchResult.js';
import SearchInput from './SearchInput.js';

function App() {

    this.data = [];

    const searchInput = new SearchInput(this);
    const searchResult = new SearchResult(this, this.data);

    this.sendData = (newData) => {
        this.data = newData;
        searchResult.setState(this.data);
    }
    this.sendData();
}

export default App;
new App();
