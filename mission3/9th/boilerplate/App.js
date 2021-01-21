import { fetchJjal } from './api.js';
import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js'


export default function App ($app) {
    this.state = {
        searchResults : []
    }

    this.components ={}
    this.components.searchInput = new SearchInput({
        $app,
        onSearch: async (keyword) => {
            const searchResults = await fetchJjal(keyword);
            this.setState({
                ...this.state,
                searchResults,
            })
        } ,
    })
    this.components.searchResult = new SearchResult({
        $app, 
        initialState : this.state.searchResults,
    })

    this.setState = (nextState) => {
        this.state = nextState
        this.components.searchResult.setState(this.state.searchResults)
    }


}