import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import storage from './localStorage.js';

export default function App({ $target }) {

    this.state = [];

    this.setState = nextState => {
        this.state = nextState;
        searchResult.setState(this.state);
    }


    const searchInput = new SearchInput({
        $target,
        onInputChange: (data) => {
            this.setState(data);
        },
    });
    const searchResult = new SearchResult({
        initialState: this.state,
        $target,
    })
}