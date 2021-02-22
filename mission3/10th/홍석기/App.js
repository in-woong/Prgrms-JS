import {SearchInput} from "./Search/SearchInput.js";
import {SearchResult} from "./Search/SearchResult.js"

export function App($searchInput, $searchResult) {
    
    this.SearchInput = new SearchInput({
        $searchInput, 
        onSearchInput: (searchResultData) => {
            this.setState(searchResultData);
        }});

    this.SearchResult = new SearchResult({
        $searchResult,
        renderData : this.state
    });

    this.setState = (data) => {
        this.state = data;
        this.SearchResult.setState(this.state);
    }
}
